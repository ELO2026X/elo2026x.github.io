import * as THREE from 'three';

export class FalloutSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
    }

    // Spawn purely visual fire sprites
    spawnFire(position) {
        // Legacy fallback
        this.spawnPsychedelicFlare(position);
    }

    spawnIce(position) {
        // Legacy fallback
        this.spawnIceSculpture(position);
    }

    // Spawn procedural ice sculptures (Stacks of geometry)
    spawnIceSculpture(position) {
        // Randomize geometry type for variety
        const geos = [
            new THREE.OctahedronGeometry(0.5, 0),
            new THREE.ConeGeometry(0.3, 1, 4),
            new THREE.BoxGeometry(0.4, 0.4, 0.4)
        ];
        const geo = geos[Math.floor(Math.random() * geos.length)];

        const material = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            emissive: 0x001133,
            roughness: 0.1,
            metalness: 0.9,
            transparent: true,
            opacity: 0.8
        });

        // Spawn a single piece of the sculpture
        const mesh = new THREE.Mesh(geo, material);

        // Random offset from player center to build "outward"
        const offset = new THREE.Vector3(
            (Math.random() - 0.5) * 4,
            Math.random() * 2, // Stack upwards
            (Math.random() - 0.5) * 4
        );

        mesh.position.copy(position).add(offset);

        // Random rotation to look organic/crystalline
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

        // Random scale variation
        const scale = 0.5 + Math.random() * 1.5;
        mesh.scale.set(scale, scale, scale);

        this.scene.add(mesh);

        this.particles.push({
            mesh: mesh,
            type: 'ICE',
            velocity: new THREE.Vector3(0, 0, 0),
            life: 5.0 + Math.random() * 2 // Stay longer
        });
    }

    // Spawn psychedelic fire flares
    spawnPsychedelicFlare(position) {
        const geometry = new THREE.DodecahedronGeometry(0.4);

        // Psychedelic colors (Purple, Pink, Orange)
        const colors = [0xff00ff, 0xff4400, 0xee00aa, 0xffaa00];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 1.0,
            blending: THREE.AdditiveBlending
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Random offset
        const offset = new THREE.Vector3(
            (Math.random() - 0.5) * 1.5,
            0.5,
            (Math.random() - 0.5) * 1.5
        );

        mesh.position.copy(position).add(offset);
        this.scene.add(mesh);

        this.particles.push({
            mesh: mesh,
            type: 'FIRE',
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.2,
                0.3 + Math.random() * 0.5, // Faster rise
                (Math.random() - 0.5) * 0.2
            ),
            rotationSpeed: new THREE.Vector3(
                Math.random() * 0.2,
                Math.random() * 0.2,
                Math.random() * 0.2
            ),
            life: 0.8 + Math.random() * 0.5 // Short burst
        });
    }

    update(delta) {
        // Update physics/life
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            p.life -= delta;

            if (p.type === 'FIRE') {
                p.mesh.position.add(p.velocity);
                p.mesh.rotation.x += p.rotationSpeed.x;
                p.mesh.rotation.y += p.rotationSpeed.y;
                p.mesh.scale.multiplyScalar(0.92); // Fast shrink
                p.mesh.material.opacity = p.life;
            } else if (p.type === 'ICE') {
                // Ice just slowly fades and rotates slightly
                // Gentle float/hum
                p.mesh.position.y += Math.sin(Date.now() * 0.002 + p.mesh.id) * 0.002;

                if (p.life < 1.0) {
                    p.mesh.scale.multiplyScalar(0.95);
                    p.mesh.material.opacity = p.life;
                }
            }

            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                if (p.mesh.geometry) p.mesh.geometry.dispose();
                if (p.mesh.material) p.mesh.material.dispose();
                this.particles.splice(i, 1);
            }
        }
    }
}
