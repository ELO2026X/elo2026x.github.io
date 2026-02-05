import * as THREE from 'three';

export class GatheringSystem {
    constructor(scene) {
        this.scene = scene;
        this.items = [];
        this.inventory = {
            herbs: 0,
            shrooms: 0,
            potions: 0
        };

        // Configuration
        this.itemCount = 50;
        this.spawnRadius = 100;
        this.safeZoneInfo = { x: 0, z: 0, r: 35 }; // Slight buffer around village (30)

        // UI Elements
        this.ui = {
            herb: document.getElementById('count-herb'),
            shroom: document.getElementById('count-shroom'),
            potion: document.getElementById('count-potion')
        };

        // Cooldowns
        this.lastActionTime = 0;
    }

    init() {
        console.log("Initializing Gathering System...");
        this.createResources();
        this.updateUI();
    }

    createResources() {
        // Shared Geometries/Materials
        const stemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.3);
        const herbMat = new THREE.MeshStandardMaterial({ color: 0x22ff22 });
        const shroomMat = new THREE.MeshStandardMaterial({ color: 0x0088ff });
        const stalkMat = new THREE.MeshStandardMaterial({ color: 0xdddddd });

        for (let i = 0; i < this.itemCount; i++) {
            // Determine position (Outside Safe Zone)
            let x, z, r;
            do {
                x = (Math.random() - 0.5) * this.spawnRadius * 2;
                z = (Math.random() - 0.5) * this.spawnRadius * 2;
                r = Math.sqrt(x * x + z * z);
            } while (r < this.safeZoneInfo.r);

            const isHerb = Math.random() > 0.5;
            const group = new THREE.Group();
            group.position.set(x, 0, z);

            if (isHerb) {
                // Herb Visuals (Cluster of green stalks)
                for (let j = 0; j < 3; j++) {
                    const leaf = new THREE.Mesh(stemGeo, herbMat);
                    leaf.rotation.z = (Math.random() - 0.5);
                    leaf.rotation.x = (Math.random() - 0.5);
                    leaf.position.y = 0.15;
                    group.add(leaf);
                }
                group.userData = { type: 'herb', name: 'Herb' };
                // Add sparkle
                this.addSparkle(group, 0x22ff22);
            } else {
                // Shroom Visuals
                const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.2), stalkMat);
                stem.position.y = 0.1;
                group.add(stem);

                const cap = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2), shroomMat);
                cap.position.y = 0.2;
                group.add(cap);

                group.userData = { type: 'shroom', name: 'Blue Mushroom' };
                this.addSparkle(group, 0x0088ff);
            }

            this.scene.add(group);
            this.items.push(group);
        }
    }

    addSparkle(parent, color) {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array([0, 0.5, 0]);
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({
            color: color,
            size: 0.5,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const sparkle = new THREE.Points(geo, mat);
        parent.add(sparkle);
    }

    update(delta, playerPos, keyState) {
        const time = Date.now();

        // 1. Check Gathering
        if (keyState['KeyF'] && time - this.lastActionTime > 500) {
            this.tryGather(playerPos);
            this.lastActionTime = time;
        }

        // 2. Check Crafting
        if (keyState['KeyC'] && time - this.lastActionTime > 500) {
            this.tryCraft();
            this.lastActionTime = time;
        }

        // 3. Check Consume
        if (keyState['KeyQ'] && time - this.lastActionTime > 500) {
            this.tryConsume();
            this.lastActionTime = time;
        }

        // Animation for items
        this.items.forEach(item => {
            if (item.visible) {
                item.rotation.y += delta;
            }
        });
    }

    tryGather(playerPos) {
        // Find nearest item
        let nearest = null;
        let minDesc = 2.0; // Gather radius

        this.items.forEach(item => {
            if (!item.visible) return;
            const dist = item.position.distanceTo(playerPos);
            if (dist < minDesc) {
                nearest = item;
                minDesc = dist;
            }
        });

        if (nearest) {
            // Collect
            nearest.visible = false; // Hide 
            if (nearest.userData.type === 'herb') {
                this.inventory.herbs++;
                console.log("Gathered Herb");
            } else {
                this.inventory.shrooms++;
                console.log("Gathered Mushroom");
            }
            this.updateUI();

            // Audio Cue (Optional placeholder)
            // if (window.sfx) window.sfx.play('gather');
        }
    }

    tryCraft() {
        if (this.inventory.herbs >= 1 && this.inventory.shrooms >= 1) {
            this.inventory.herbs--;
            this.inventory.shrooms--;
            this.inventory.potions++;
            console.log("Crafted Potion");
            this.updateUI();
        } else {
            console.log("Not enough ingredients!");
            // Visual feedback could go here (flash red)
        }
    }

    tryConsume() {
        if (this.inventory.potions > 0) {
            this.inventory.potions--;
            console.log("Glup!");

            // Effect: Restore Entropy
            if (window.entropySys) {
                // "Heal" entropy back to 50
                const current = window.entropySys.value;
                const diff = 50 - current;
                window.entropySys.value += diff * 0.5; // restore 50% of difference
                window.entropySys.clamp();
            }
            this.updateUI();
        }
    }

    updateUI() {
        if (this.ui.herb) this.ui.herb.innerText = this.inventory.herbs;
        if (this.ui.shroom) this.ui.shroom.innerText = this.inventory.shrooms;
        if (this.ui.potion) this.ui.potion.innerText = this.inventory.potions;
    }
}
