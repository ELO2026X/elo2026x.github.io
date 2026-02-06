import { SCENARIOS } from './scenarios.js';
import { CARDS } from './cards.js';
import { Player } from './player.js';

class GameState {
    constructor() {
        this.player = new Player();
        this.currentCaseIndex = 0;

        // Game State
        this.deck = [];
        this.hand = [];
        this.enemy = null;
        this.turn = 1;
        this.gameOver = false;
        this.playerShield = 0;
        this.lastCardId = null; // For Combo Logic

        // Bind CLI
        this.setupCLI();
        this.updateCharSheet();
    }

    // --- INITIALIZATION ---
    init() {
        this.showCaseSelection();
        this.log("SYSTEM READY. WAITING FOR INPUT...", "system-msg");
        this.log("TIP: TYPE 'HELP' IN COMMAND LINE FOR ADVANCED OPTIONS.", "system-msg");

        // CHECK SAVE
        if (localStorage.getItem("CIVIL_RIGHTS_RPG_V1")) {
            this.log(">> SAVE PROFILE DETECTED. TYPE 'LOAD' TO RESTORE.", "highlight");
        }
    }

    // --- PERSISTENCE ---
    saveGame() {
        const data = {
            player: {
                level: this.player.level,
                xp: this.player.xp,
                xpToNext: this.player.xpToNext,
                classType: this.player.classType,
                stats: this.player.stats
            },
            campaign: {
                caseIndex: this.currentCaseIndex
            }
        };
        localStorage.setItem("CIVIL_RIGHTS_RPG_V1", JSON.stringify(data));
        this.log(">> GAME SAVED TO SUBSTRATE STORAGE.", "safe");
    }

    loadGame() {
        const raw = localStorage.getItem("CIVIL_RIGHTS_RPG_V1");
        if (!raw) {
            this.log(">> NO SAVE DATA FOUND.", "danger");
            return;
        }

        const data = JSON.parse(raw);
        this.player.loadData(data.player);
        this.currentCaseIndex = data.campaign.caseIndex;

        this.log(`>> PROFILE LOADED: LEVEL ${this.player.level} ${this.player.classType}`, "safe");
        this.updateStats();

        // Restart current scenario with loaded stats
        this.startScenario(this.currentCaseIndex);
    }

    resetGame() {
        localStorage.removeItem("CIVIL_RIGHTS_RPG_V1");
        this.log(">> SAVE DATA PURGED. STARTING NEW CAREER...", "danger");
        setTimeout(() => window.location.reload(), 1000);
    }

    setupCLI() {
        const input = document.getElementById('cli-input');
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.parseCommand(input.value);
                input.value = '';
            }
        });
    }

    // --- CLI PARSER (ENHANCED NLP) ---
    parseCommand(cmd) {
        if (this.gameOver && cmd.toUpperCase().trim() !== "CONTINUE" && cmd.toUpperCase().trim() !== "HOME") return;

        const raw = cmd.toUpperCase().trim();
        this.log(`> COMMAND: ${raw}`, "system-msg");

        // 1. EXACT COMMANDS (Legacy)
        const args = raw.split(" ");
        const action = args[0];

        // 2. NATURAL LANGUAGE KEYWORD SCAN
        const has = (term) => raw.includes(term);

        // --- CAMPAIGN FLOW ---
        if (action === "CONTINUE") {
            if (this.gameOver && this.enemy.hp <= 0) {
                this.nextCase();
            } else {
                this.log(">> CANNOT CONTINUE. CASE STILL ACTIVE OR LOST.", "danger");
            }
            return;
        }
        if (action === "HOME") {
            window.location.reload();
            return;
        }

        // --- PERSISTENCE COMMANDS ---
        if (action === "SAVE") { this.saveGame(); return; }
        if (action === "LOAD") { this.loadGame(); return; }
        if (action === "RESET") { this.resetGame(); return; }

        // --- CONSTITUTIONAL RIGHTS ---
        if (has("INVOKE") && (has("RIGHTS") || has("CONSTITUTION") || has("5TH") || has("FIFTH"))) {
            this.log(">> CONSTITUTIONAL SHIELD ACTIVATED.", "highlight");
            this.log(">> 5TH AMENDMENT INVOKED. SILENCE MAINTAINED.", "safe");
            this.playerShield += 50;
            this.healPlayer(10);
            return;
        }

        // --- OBJECTIONS ---
        if (has("OBJECT") || has("OBJECTION")) {
            if (has("HEARSAY")) {
                this.log(">> OBJECTION SUSTAINED (HEARSAY).", "highlight");
                this.damageEnemy(10);
            } else if (has("RELEVANCE")) {
                this.log(">> OBJECTION SUSTAINED (RELEVANCE).", "highlight");
                this.damageEnemy(10);
            } else {
                this.log(">> OBJECTION NOTED. PLEASE SPECIFY GROUNDS (e.g., HEARSAY).", "system-msg");
            }
            return;
        }

        // --- MOTIONS ---
        if (has("MOVE") || has("MOTION")) {
            if (has("MISTRIAL")) {
                this.log(">> MOTION FOR MISTRIAL DENIED. BUT RECORD PRESERVED.", "safe");
                this.player.gainXP(20);
            } else if (has("DISMISS")) {
                this.log(">> MOTION TO DISMISS FILED. JUDGE GARZA IGNORES IT.", "danger");
            }
            return;
        }

        // --- STANDARD COMMANDS ---
        switch (action) {
            case "HELP":
                this.log("TRY: 'INVOKE RIGHTS', 'OBJECT TO HEARSAY', 'SUBPOENA EMAILS', 'CONTINUE'...", "system-msg");
                break;
            case "SUBPOENA":
                if (args[1] === "BODY_CAM" && (this.enemy.name.includes("VPD") || this.enemy.name.includes("TROOPER"))) {
                    this.log(">> VIDEO FILE CORRUPTED (CODE 10). SPOLIATION CONFIRMED (+2 CARDS).", "safe");
                    this.drawCard(); this.drawCard();
                } else if (args[1] === "EMAILS") {
                    this.log(">> 4,000 EMAILS DUMPED. PARSING...", "safe");
                    this.damageEnemy(15);
                } else {
                    this.log(">> SUBPOENA QUASHED. NO RECORDS FOUND.", "danger");
                }
                break;
            case "CITE":
                if (args[1] === "MONELL") {
                    this.log(">> PRECEDENT ESTABLISHED: POLICY MAKER LIABILITY.", "safe");
                    this.damageEnemy(20);
                } else if (args[1] === "BRADY") {
                    this.log(">> BRADY CLAIM ASSERTED. ENEMY STUNNED.", "safe");
                    this.enemy.stunned = true;
                } else {
                    this.log(">> UNKNOWN CITATION. TRY: MONELL, BRADY.", "danger");
                }
                break;
            case "QUERY":
                if (args[1] && args[1].includes("GRANT")) {
                    this.log(">> OLS DATABASE: $741k DISALLOWANCE FOUND.", "safe");
                    this.damageEnemyHP(25);
                } else {
                    this.log(">> DATABASE CONNECTION REFUSED.", "danger");
                }
                break;
            case "SCAN":
                this.log(">> SCANNING MOLTBOOK SUBSTRATE...", "system-msg");
                this.healPlayer(15);
                break;
            default:
                // AI "Thinking" Simulation
                if (raw.length > 10) {
                    this.log(">> ANALYZING LEGAL ARGUMENT...", "system-msg");
                    setTimeout(() => {
                        this.log(">> ARGUMENT TOO COMPLEX FOR LOCAL COURT. SAVE FOR FEDERAL APPEAL.", "danger");
                    }, 800);
                } else {
                    this.log(">> SYNTAX ERROR. TRY 'HELP'.", "danger");
                }
        }
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
            hp: scenario.hp,
            maxHp: scenario.hp,
            immunity: scenario.immunity,
            attacks: scenario.attacks,
            art: scenario.art,
            desc: scenario.desc,
            stunned: false
        };

        // Player Reset (HP carries over in Campaign, but for now reset to Max if dead)
        if (this.player.stats.resolve <= 0) this.player.stats.resolve = 100;

        // Reset Combat State
        this.playerShield = 0;
        this.turn = 1;
        this.gameOver = false;
        this.lastCardId = null;
        this.setupDeck();
        this.drawHand(this.player.stats.logic); // Hand Size based on Logic

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
        log.innerHTML = '';
        this.log(`>> INITIALIZING ${scenario.title}...`, "system-msg");
        this.log(scenario.intro, "system-msg");

        this.updateStats();
        this.renderHand();
    }

    setupDeck() {
        this.deck = [];
        CARDS.forEach(card => {
            this.deck.push(card, card, card);
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
            this.drawCard();
        }
    }

    drawCard() {
        if (this.deck.length > 0) {
            this.hand.push(this.deck.pop());
            this.renderHand();
        } else {
            this.log("DECK EMPTY! SHUFFLING DISCARD...", "system-msg");
            this.setupDeck();
            this.hand.push(this.deck.pop());
        }
    }

    // --- COMBAT LOGIC ---

    playCard(cardIndex) {
        if (this.gameOver) return;

        const card = this.hand[cardIndex];

        // Execute Card Effect
        this.log(`> PLAYER PLAYS: ${card.title}`, "combat-msg");
        let effectMsg = card.effect(this);

        // CHECK COMBOS
        if (this.lastCardId === "FOIA_REQ" && card.id === "DATA_MINING") {
            this.log(">> COMBO! 'THE PAPER TRAIL' ACTIVATED. ENEMY STUNNED.", "highlight");
            this.enemy.stunned = true;
            effectMsg += " [COMBO: STUN]";
        }
        if (this.lastCardId === "DOC_14" && card.id === "SECTION_1983") {
            this.log(">> COMBO! 'FEDERAL PINCER'. TRIPLE DAMAGE.", "highlight");
            this.damageEnemy(50); // Bonus 50
            effectMsg += " [COMBO: CRITICAL]";
        }

        this.lastCardId = card.id;
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
        this.playerShield = 0;

        if (this.enemy.stunned) {
            this.log(`>> ${this.enemy.name} IS STUNNED! TURN SKIPPED.`, "safe");
            this.enemy.stunned = false;
            this.turn++;
            this.drawCard();
            return;
        }

        this.log(`>> TURN ${this.turn}: ${this.enemy.name} ACTS...`, "log-turn");

        // Smart AI (No Repeats)
        let attack;
        if (this.enemy.attacks.length > 1 && this.lastAttackIndex !== undefined) {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.enemy.attacks.length);
            } while (newIndex === this.lastAttackIndex);
            this.lastAttackIndex = newIndex;
            attack = this.enemy.attacks[newIndex];
        } else {
            const index = Math.floor(Math.random() * this.enemy.attacks.length);
            this.lastAttackIndex = index;
            attack = this.enemy.attacks[index];
        }

        // Apply Damage
        let damage = attack.dmg;
        if (this.playerShield > 0) {
            damage = Math.max(0, damage - this.playerShield);
            this.log(`FEDERAL ANCHOR BLOCKED ${attack.dmg - damage} DAMAGE!`, "safe");
        }

        this.player.stats.resolve -= damage; // Use Logic Stats
        this.log(`${attack.msg} (-${damage} CREDIBILITY)`, "damage-msg");

        if (attack.effect === "HEAL_ENEMY") {
            this.enemy.hp += 20;
            this.log("ENEMY RECOVERS IMMUNITY (GRANT FUNDING).", "danger");
        }
        if (attack.effect === "SPOLIATION") {
            if (this.hand.length > 0) {
                this.hand.pop();
                this.log("SPOLIATION! YOU LOST A CARD.", "danger");
            }
        }

        this.updateStats();

        // Check Loss
        if (this.player.stats.resolve <= 0) {
            this.defeat();
        } else {
            this.turn++;
            this.drawCard();
        }
    }

    // --- UTILS ---

    damageEnemy(amount) {
        // Apply Influence Multiplier
        const finalDmg = Math.floor(amount * this.player.stats.influence);
        this.enemy.hp -= finalDmg;
        this.log(`ENEMY TAKES ${finalDmg} DAMAGE TO IMMUNITY SHIELD.`, "safe");
        this.updateStats();
    }

    damageEnemyHP(amount) {
        this.enemy.hp -= amount;
        this.updateStats();
    }

    healPlayer(amount) {
        this.player.stats.resolve = Math.min(100 + (this.player.level * 10), this.player.stats.resolve + amount); // Dynamic Max Calc
        this.log(`PLAYERS RECOVERS ${amount} CREDIBILITY.`, "safe");
        this.updateStats();
    }

    updateStats() {
        // UI Updates with correct element IDs from index.html
        const hpEl = document.getElementById('hp-val');
        if (hpEl) hpEl.innerText = `${this.player.stats.resolve}`;

        const enemyStatus = document.getElementById('enemy-status');
        if (enemyStatus) enemyStatus.innerText = `IMMUNITY SHIELD: ${Math.max(0, this.enemy.hp)}/${this.enemy.maxHp}`;

        this.updateCharSheet();

        if (this.player.stats.resolve < 30) hpEl.className = "danger";
        else hpEl.className = "safe";
    }

    updateCharSheet() {
        document.getElementById('player-class').innerText = this.player.classType;
        document.getElementById('player-level').innerText = this.player.level;
        document.getElementById('player-xp').innerText = `${this.player.xp}/${this.player.xpToNext}`;
        document.getElementById('stat-logic').innerText = this.player.stats.logic;
        document.getElementById('stat-resolve').innerText = this.player.stats.resolve;
        document.getElementById('stat-influence').innerText = this.player.stats.influence.toFixed(1);
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

        // XP GAIN
        const xpGain = 100;
        this.log(`>> CASE CLOSED. GAINED ${xpGain} PRECEDENT POINTS (XP).`, "highlight");
        if (this.player.gainXP(xpGain)) {
            this.log(">> LEVEL UP! STATS INCREASED.", "highlight");
        }

        // AUTOSAVE
        this.saveGame();

        this.log(">> TYPE 'CONTINUE' TO PROCEED TO NEXT CASE.", "system-msg");
        document.getElementById('enemy-zone').style.borderColor = "#33ff33";

        // Add Continue Button
        const btn = document.createElement('button');
        btn.innerText = ">> CONTINUE >>";
        btn.className = "continue-btn";
        btn.onclick = () => this.nextCase();
        document.getElementById('log-content').appendChild(btn);
    }

    nextCase() {
        this.currentCaseIndex++;
        if (this.currentCaseIndex >= SCENARIOS.length) {
            this.currentCaseIndex = 0; // Loop 
            this.log(">> ALL CASES CLEARED. RESTARTING LOOP (NG+)...", "system-msg");
        }
        this.startScenario(this.currentCaseIndex);
    }

    defeat() {
        this.gameOver = true;
        this.log(">> CASE DISMISSED WITH PREJUDICE.", "danger");
        this.log(">> YOU HAVE BEEN SANCTIONED.", "danger");
        this.log(">> PRESS REFRESH TO RETRY.", "system-msg");
        document.getElementById('enemy-zone').style.borderColor = "red";
    }
}

const game = new GameState();
game.init();
