export class EntropySystem {
    constructor() {
        this.value = 50; // Start at Equilibrium
        this.min = 0;    // Absolute Zero
        this.max = 100;  // Heat Death
        this.state = 'STABLE'; // STABLE, COLD, HOT

        // DOM Elements
        this.bar = document.getElementById('entropy-fill');
        this.label = document.getElementById('entropy-label');

        // Auto-Cooling / Auto-Warming towards equilibrium
        this.decayRate = 0.05;
    }

    update(deltaTime) {
        // Natural decay towards 50
        if (this.value > 50) {
            this.value -= this.decayRate;
        } else if (this.value < 50) {
            this.value += this.decayRate;
        }

        this.checkState();
        this.updateUI();
    }

    addEntropy(amount) {
        this.value += amount;
        this.clamp();
    }

    reduceEntropy(amount) {
        this.value -= amount;
        this.clamp();
    }

    clamp() {
        this.value = Math.max(this.min, Math.min(this.max, this.value));
    }

    checkState() {
        if (this.value >= 80) {
            this.state = 'HOT';
            // document.body.style.filter = `hue-rotate(${this.value}deg) contrast(1.2)`; // REMOVED PER USER REQUEST
            if (window.heatSys) window.heatSys.applyHeat(this.value);
        } else if (this.value <= 20) {
            this.state = 'COLD';
            // document.body.style.filter = `grayscale(${(20 - this.value) / 20})`; // REMOVED PER USER REQUEST
            if (window.heatSys) window.heatSys.applyHeat(0);
        } else {
            this.state = 'STABLE';
            document.body.style.filter = 'none'; // Ensure reset
            if (window.heatSys) window.heatSys.applyHeat(0);
        }
    }

    updateUI() {
        if (this.bar) {
            this.bar.style.width = `${this.value}%`;

            // Color Shift
            if (this.value > 60) {
                this.bar.style.backgroundColor = '#ff3333'; // Hot Red
            } else if (this.value < 40) {
                this.bar.style.backgroundColor = '#33ccff'; // Ice Blue
            } else {
                this.bar.style.backgroundColor = '#33ff33'; // Stable Green
            }
        }

        if (this.label) {
            this.label.innerText = `ENTROPY: ${Math.floor(this.value)}% [${this.state}]`;
        }
    }
}
