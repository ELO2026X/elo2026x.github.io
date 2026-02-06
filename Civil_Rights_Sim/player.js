export class Player {
    constructor() {
        this.classType = "AUDITOR"; // Default
        this.level = 1;
        this.xp = 0;
        this.xpToNext = 100;

        // Stats
        this.stats = {
            logic: 3,      // Hand Size
            resolve: 100,  // Max HP
            influence: 1.0 // Dmg Multiplier
        };

        // Perks unlocked
        this.perks = [];
    }

    setClass(type) {
        this.classType = type;
        if (type === "AUDITOR") {
            this.stats.logic = 4;
            this.stats.resolve = 100;
            this.stats.influence = 1.0;
        } else if (type === "LITIGATOR") {
            this.stats.logic = 3;
            this.stats.resolve = 120;
            this.stats.influence = 1.2; // 20% Bonus Dmg
        }
    }

    loadData(data) {
        if (!data) return;
        this.level = data.level || 1;
        this.xp = data.xp || 0;
        this.xpToNext = data.xpToNext || 100;
        this.classType = data.classType || "AUDITOR";
        if (data.stats) {
            this.stats = data.stats;
        }
    }

    gainXP(amount) {
        this.xp += amount;
        if (this.xp >= this.xpToNext) {
            this.levelUp();
            return true; // Leveled up
        }
        return false;
    }

    levelUp() {
        this.level++;
        this.xp -= this.xpToNext;
        this.xpToNext = Math.floor(this.xpToNext * 1.5);

        // Stat Boost
        this.stats.resolve += 10;
        if (this.level % 2 === 0) this.stats.logic++;
        if (this.level % 3 === 0) this.stats.influence += 0.1;
    }
}
