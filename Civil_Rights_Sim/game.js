import { SCENARIOS } from './scenarios.js';
import { CARDS } from './cards.js';

class GameState {
    constructor() {
        this.currentCaseIndex = 0;
        this.hp = 100; // Player Credibility
        this.pressure = 0; // Current Scenario Pressure (0-100)
        this.deck = [];
        this.hand = [];
        this.enemy = null;
        this.turn = 1;
        this.gameOver = false;
        this.playerShield = 0;
    }

    // --- INITIALIZATION ---
    init() {
        this.showCaseSelection();
        this.log("SYSTEM READY. WAITING FOR INPUT...", "system-msg");
    }

    showCaseSelection() {
        const modal = document.getElementById('modal-overlay');
        const optionsDiv = document.getElementById('modal-options');
        optionsDiv.innerHTML = '';

        SCENARIOS.forEach((scenario, index) => {
            const btn = document.createElement('button');
            btn.innerText = `[${scenario.id}] ${scenario.title}`;
            btn.onclick = () => this.startScenario(index);
            optionsDiv.appendChild(btn);
        });

        modal.classList.remove('hidden');
    }

    startScenario(index) {
        this.currentCaseIndex = index;
        const scenario = SCENARIOS[index];
        this.enemy = {
            name: scenario.enemy,
            hp: scenario.hp, // This is effectively "Immunity Points"
            maxHp: scenario.hp,
            immunity: scenario.immunity,
            attacks: scenario.attacks,
            art: scenario.art,
            desc: scenario.desc
        };

        // Reset Player State
        this.hp = 100;
        this.pressure = 0;
        this.playerShield = 0;
        this.turn = 1;
        this.gameOver = false;
        this.setupDeck();
        this.drawHand(3);

        // Update UI
        document.getElementById('modal-overlay').classList.add('hidden');
        document.getElementById('case-id').innerText = scenario.id;
        document.getElementById('judge-name').innerText = "HON. ELI GARZA";
        document.getElementById('enemy-name').innerText = `OPPONENT: ${this.enemy.name}`;
        document.getElementById('enemy-status').innerText = `IMMUNITY SHIELD: ${this.enemy.hp}/${this.enemy.maxHp}`;
        document.getElementById('enemy-intent').innerText = `INTENT: ${scenario.desc}`;
        document.getElementById('enemy-art').innerHTML = this.enemy.art;

        // Log
        const log = document.getElementById('log-content');
        log.innerHTML = ''; // sensitive clear
        this.log(`>> INITIALIZING ${scenario.title}...`, "system-msg");
        this.log(scenario.intro, "system-msg");

        this.updateStats();
        this.renderHand();
    }

    setupDeck() {
        this.deck = [];
        // Add copies of cards
        CARDS.forEach(card => {
            this.deck.push(card, card, card); // 3 copies of each
        });
        this.shuffleDeck();
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawHand(count) {
        for (let i = 0; i < count; i++) {
            if (this.deck.length > 0) {
                this.hand.push(this.deck.pop());
            }
        }
    }

    drawCard() {
        if (this.deck.length > 0) {
            this.hand.push(this.deck.pop());
            this.renderHand();
        } else {
            this.log("DECK EMPTY! SHUFFLING DISCARD...", "system-msg");
            this.setupDeck(); // simplistic reshuffle 
            this.hand.push(this.deck.pop());
        }
    }

    // --- COMBAT LOGIC ---

    playCard(cardIndex) {
        if (this.gameOver) return;

        const card = this.hand[cardIndex];

        // Execute Card Effect
        this.log(`> PLAYER PLAYS: ${card.title}`, "combat-msg");
        const effectMsg = card.effect(this); // Pass game state to card
        this.log(effectMsg, "combat-msg");

        // Remove card
        this.hand.splice(cardIndex, 1);
        this.renderHand();

        // Check Win
        if (this.enemy.hp <= 0) {
            this.victory();
        } else {
            // Enemy Turn
            setTimeout(() => this.enemyTurn(), 1000);
        }
    }

    enemyTurn() {
        if (this.gameOver) return;
        this.playerShield = 0; // Reset shield at start of enemy turn? Or end? Let's say shield lasts 1 turn.

        this.log(`>> TURN ${this.turn}: ${this.enemy.name} ACTS...`, "log-turn");

        // Pick random attack
        const attack = this.enemy.attacks[Math.floor(Math.random() * this.enemy.attacks.length)];

        // Apply Damage
        let damage = attack.dmg;
        if (this.playerShield > 0) {
            damage = Math.max(0, damage - this.playerShield);
            this.log(`FEDERAL ANCHOR BLOCKED ${attack.dmg - damage} DAMAGE!`, "safe");
        }

        this.hp -= damage;
        this.log(`${attack.msg} (-${damage} CREDIBILITY)`, "damage-msg");

        // Apply Effects
        if (attack.effect === "HEAL_ENEMY") {
            this.enemy.hp += 20;
            this.log("ENEMY RECOVERS IMMUNITY (GRANT FUNDING).", "danger");
        }
        if (attack.effect === "SPOLIATION") {
            this.hand.pop(); // Lose a card
            this.log("SPOLIATION! YOU LOST A CARD.", "danger");
        }

        this.updateStats();

        // Check Loss
        if (this.hp <= 0) {
            this.defeat();
        } else {
            this.turn++;
            this.drawCard(); // Player draws start of turn
        }
    }

    // --- UTILS ---

    damageEnemy(amount) {
        // Logic: Some cards might bypass "Immunity" or flat damage
        // For now, simple HP reduction
        this.enemy.hp -= amount;
        this.log(`ENEMY TAKES ${amount} DAMAGE TO IMMUNITY SHIELD.`, "safe");
        this.updateStats();
    }

    damageEnemyHP(amount) {
        this.enemy.hp -= amount;
        this.updateStats();
    }

    healPlayer(amount) {
        this.hp = Math.min(100, this.hp + amount);
        this.log(`PLAYERS RECOVERS ${amount} CREDIBILITY.`, "safe");
        this.updateStats();
    }

    updateStats() {
        document.getElementById('hp-val').innerText = `${this.hp}%`;
        document.getElementById('enemy-status').innerText = `IMMUNITY SHIELD: ${Math.max(0, this.enemy.hp)}/${this.enemy.maxHp}`;

        // Visuals
        if (this.hp < 30) document.getElementById('hp-val').className = "danger";
        else document.getElementById('hp-val').className = "safe";
    }

    log(msg, className = "combat-msg") {
        const log = document.getElementById('log-content');
        const p = document.createElement('p');
        p.className = className;
        p.innerText = msg;
        log.appendChild(p);
        log.scrollTop = log.scrollHeight;
    }

    renderHand() {
        const container = document.getElementById('card-container');
        container.innerHTML = '';

        this.hand.forEach((card, index) => {
            const div = document.createElement('div');
            div.className = "card";
            div.innerHTML = `
                <div class="card-title">${card.title}</div>
                <div class="card-desc">${card.desc}</div>
                <div class="card-cost">COST: ${card.cost}</div>
            `;
            div.onclick = () => this.playCard(index);
            container.appendChild(div);
        });
    }

    victory() {
        this.gameOver = true;
        this.log(">> JUDGMENT FOR PLAINTIFF!", "safe");
        this.log(">> QUALIFIED IMMUNITY STRIPPED.", "safe");
        this.log(">> PRESS REFRESH TO TRY ANOTHER CASE.", "system-msg");
        document.getElementById('enemy-zone').style.borderColor = "#33ff33";
    }

    defeat() {
        this.gameOver = true;
        this.log(">> CASE DISMISSED WITH PREJUDICE.", "danger");
        this.log(">> YOU HAVE BEEN SANCTIONED.", "danger");
        this.log(">> PRESS REFRESH TO RETRY.", "system-msg");
        document.getElementById('enemy-zone').style.borderColor = "red";
    }
}

// Start Game
const game = new GameState();
game.init();
