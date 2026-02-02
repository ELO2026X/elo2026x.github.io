import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info, Key } from 'lucide-react';

const NARRATIVE_SCRIPT = [
    { time: 2, text: "It's dark. Too dark." },
    { time: 10, text: "I need to find the keys. They said three would open the way." },
    { time: 25, text: "I hear... slurping sounds?" },
    { time: 45, text: "The bananas... they aren't right here." },
    { time: 60, text: "DONT LET THEM TOUCH YOU." },
    { time: 90, text: "The peeling... it never stops." }
];

const BackroomsView = ({ onExit }) => {
    const containerRef = useRef();
    const [sanity, setSanity] = useState(100);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [status, setStatus] = useState("OBJECTIVE: FIND 3 RUSTY KEYS");
    const [keysCollected, setKeysCollected] = useState(0);
    const [currentThought, setCurrentThought] = useState(null);
    const [entityInfo, setEntityInfo] = useState(null);
    const [isManifesting, setIsManifesting] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    // Refs for mutable state in animation loop
    const audioRef = useRef(null);
    const sanityRef = useRef(100);
    const startTimeRef = useRef(performance.now());
    const keysRef = useRef([]); // Array of key meshes
    const collectedKeysRef = useRef(0);
    const jumpScareRef = useRef(false);

    // Mutable Maze Grid
    const mazeGridRef = useRef([
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);
    const cellSize = 10;
    const wallMeshesRef = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const baseUrl = import.meta.env.BASE_URL;
        const textureLoader = new THREE.TextureLoader();

        // Load Textures
        const wallTexture = textureLoader.load(`${baseUrl}images/wallpaper.png`);
        const carpetTexture = textureLoader.load(`${baseUrl}images/carpet.png`);
        const bananaTexture = textureLoader.load(
            `${baseUrl}images/nano_banana.png`,
            () => console.log("Banana Texture Loaded"),
            undefined,
            (err) => console.error("Banana Texture Failed:", err)
        );

        // Fix texture wrapping
        wallTexture.wrapS = THREE.RepeatWrapping;
        wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(1, 1);

        carpetTexture.wrapS = THREE.RepeatWrapping;
        carpetTexture.wrapT = THREE.RepeatWrapping;
        carpetTexture.repeat.set(4, 4);

        // Materials
        const wallMaterial = new THREE.MeshStandardMaterial({
            map: wallTexture,
            color: 0xffffff, // Pure white to show the yellow wallpaper
            roughness: 0.5,
            metalness: 0.0
        });
        const floorMaterial = new THREE.MeshStandardMaterial({
            map: carpetTexture,
            color: 0x554433, // Brownish carpet
            roughness: 1.0
        });
        const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0x221100 });

        // Build Maze
        const mazeGroup = new THREE.Group();
        const wallGeometry = new THREE.BoxGeometry(cellSize, 9, cellSize);
        const floorGeometry = new THREE.PlaneGeometry(cellSize, cellSize);

        const grid = mazeGridRef.current;
        const validSpawnPoints = [];

        grid.forEach((row, r) => {
            const rowMeshes = [];
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // Floor
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.rotation.x = -Math.PI / 2;
                floor.position.set(x, -4, z);
                mazeGroup.add(floor);

                // Ceiling
                const ceiling = new THREE.Mesh(floorGeometry, ceilingMaterial);
                ceiling.rotation.x = Math.PI / 2;
                ceiling.position.set(x, 4, z);
                mazeGroup.add(ceiling);

                // Walls
                const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                const targetY = cell === 1 ? 0 : -10;
                wall.position.set(x, targetY, z);
                wall.userData = { targetY, isBorder: (r === 0 || r === grid.length - 1 || c === 0 || c === row.length - 1) };
                mazeGroup.add(wall);
                rowMeshes.push(wall);

                if (cell === 0) validSpawnPoints.push({ x, z });

                // Add Lanterns (Now "Party Lights" - Red/Blue/Green or just Yellow)
                if (cell === 1 && Math.random() > 0.85) {
                    const lantern = new THREE.PointLight(0xffaa00, 1, 12);
                    lantern.position.set(x, 1, z);
                    lantern.userData = { flickerSpeed: Math.random() * 0.1 + 0.05, baseInt: 1 };
                    mazeGroup.add(lantern);
                }
            });
            wallMeshesRef.current.push(rowMeshes);
        });
        scene.add(mazeGroup);

        // Ambient light (Dim, creepy yellow party vibe)
        const ambientLight = new THREE.AmbientLight(0xffaa00, 0.4);
        scene.add(ambientLight);

        // Player Light (Flashlight - Slightly Warm)
        const flashlight = new THREE.SpotLight(0xffddaa, 3.0, 80, Math.PI / 5, 0.4, 1);
        flashlight.position.set(0, 0, 0);
        flashlight.target.position.set(0, 0, -1);
        camera.add(flashlight);
        camera.add(flashlight.target);
        scene.add(camera);

        // ... (Inside animate loop)
        enemies.forEach(enemy => {
            // Always face camera (Billboard)
            enemy.lookAt(camera.position.x, enemy.position.y, camera.position.z);

            const dist = enemy.position.distanceTo(camera.position);

            // Line of Sight
            const dirToPlayer = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize();
            const raycaster = new THREE.Raycaster(enemy.position, dirToPlayer, 0, 40);
            const intersects = raycaster.intersectObjects(mazeGroup.children);

            let canSee = false;
            if (intersects.length === 0 || intersects[0].distance > dist) {
                canSee = true;
            }

            // Update State
            if (canSee && dist < 25) {
                enemy.userData.state = 'CHASE';
            } else {
                enemy.userData.state = 'PATROL';
            }

            // "Glitch" & Movement Logic
            if (enemy.userData.state === 'CHASE') {
                // Base Speed
                let speed = 5.0 * delta;

                // 1. Random Glitch / Burst
                // 2% chance per frame to "teleport" or "sprint"
                if (Math.random() < 0.05) {
                    // Micro-teleport forward (Jitter)
                    enemy.position.x += dirToPlayer.x * 2.5;
                    enemy.position.z += dirToPlayer.z * 2.5;
                    console.log("Enemy Glitch-Jump!");
                }

                // 2. Stop and Stare (Unpredictable)
                // 1% chance to just freeze for a moment
                if (Math.random() < 0.01) {
                    speed = 0;
                }

                enemy.position.x += dirToPlayer.x * speed;
                enemy.position.z += dirToPlayer.z * speed;

                // Jumpscare Trigger
                if (dist < 1.0) { // Very close
                    triggerJumpScare(enemy);
                }
            } else {
                // Wandering (Jittery Patrol)
                // Random direction change
                if (!enemy.userData.patrolDir || Math.random() < 0.02) {
                    enemy.userData.patrolDir = new THREE.Vector3(Math.random() - 0.5, 0, Math.random() - 0.5).normalize();
                }

                enemy.position.x += enemy.userData.patrolDir.x * 2.0 * delta;
                enemy.position.z += enemy.userData.patrolDir.z * 2.0 * delta;
            }
        });

        // --- Keys Generation ---
        const keyGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
        const keyMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        for (let i = 0; i < 3; i++) {
            if (validSpawnPoints.length > 0) {
                const idx = Math.floor(Math.random() * validSpawnPoints.length);
                const pos = validSpawnPoints.splice(idx, 1)[0];
                const key = new THREE.Mesh(keyGeo, keyMat);
                key.position.set(pos.x, -2, pos.z);
                key.userData = { type: 'key', id: i };
                scene.add(key);
                keysRef.current.push(key);

                // Key Light
                const kLight = new THREE.PointLight(0xffd700, 1, 5);
                kLight.position.set(pos.x, -2, pos.z);
                scene.add(kLight);
            }
        }

        // Create Enemy (Host Entity)
        hostTexture.magFilter = THREE.NearestFilter; // Pixel art look
        const createEnemy = (x, z) => {
            const spriteMat = new THREE.SpriteMaterial({
                map: hostTexture,
                color: 0xffffff,
                transparent: true,
                depthWrite: false // Fix billboarding transparency issues
            });
            const sprite = new THREE.Sprite(spriteMat);
            sprite.position.set(x, 0, z); // Center on floor
            sprite.scale.set(1.5, 3.5, 1); // Tall, lanky
            sprite.userData = {
                name: 'Host',
                state: 'PATROL',
                glitchTimer: 0
            };
            mazeGroup.add(sprite);
            return sprite;
        }

        // Spawn Enemies slightly away from start (0,0 is start mostly?)
        // Camera starts at (cellSize, 0, cellSize) which is index 0 roughly.
        // We spawn enemies at the END of the validSpawnPoints array to ensure max distance.
        console.log("Spawning Enemies. Valid Points:", validSpawnPoints.length);
        if (validSpawnPoints.length > 5) {
            // Spawn at last index and middle index
            const lastIdx = validSpawnPoints.length - 1;
            const midIdx = Math.floor(validSpawnPoints.length / 2);

            const e1 = createEnemy(validSpawnPoints[lastIdx].x, validSpawnPoints[lastIdx].z);
            const e2 = createEnemy(validSpawnPoints[midIdx].x, validSpawnPoints[midIdx].z);
            enemies.push(e1, e2);
            console.log("Enemies Spawned at", validSpawnPoints[lastIdx], validSpawnPoints[midIdx]);
        } else {
            console.warn("Not enough spawn points for enemies!");
        }

        camera.position.set(cellSize, 0, cellSize);

        // Controls
        let moveForward = false, moveBackward = false, turnLeft = false, turnRight = false, isRunning = false;
        const onKeyDown = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = true;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = true;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = true;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = true;
            if (e.code === 'Space') isRunning = true;
        };
        const onKeyUp = (e) => {
            if (e.key === 'w' || e.key === 'ArrowUp') moveForward = false;
            if (e.key === 's' || e.key === 'ArrowDown') moveBackward = false;
            if (e.key === 'a' || e.key === 'ArrowLeft') turnLeft = false;
            if (e.key === 'd' || e.key === 'ArrowRight') turnRight = false;
            if (e.code === 'Space') isRunning = false;
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        // Animation Loop
        let lastTime = performance.now();
        const animate = () => {
            if (jumpScareRef.current) return; // Stop rendering loop on jumpscare

            requestAnimationFrame(animate);
            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Player Movement
            if (turnLeft) camera.rotation.y += 2 * delta;
            if (turnRight) camera.rotation.y -= 2 * delta;

            if (moveForward || moveBackward) {
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                // Lock Y movement
                direction.y = 0;
                direction.normalize();

                if (moveBackward) direction.negate();

                const speed = isRunning ? 7.0 : 3.5;
                const nextX = camera.position.x + direction.x * speed * delta;
                const nextZ = camera.position.z + direction.z * speed * delta;

                // Collision with Sliding
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                // 1. Try moving Both axes
                if (grid[gridZ] && grid[gridZ][gridX] === 0) {
                    camera.position.x = nextX;
                    camera.position.z = nextZ;
                } else {
                    // 2. Blocked? Try sliding along X
                    const currGridZ = Math.round(camera.position.z / cellSize);
                    if (grid[currGridZ] && grid[currGridZ][gridX] === 0) {
                        camera.position.x = nextX;
                        // Z stays same
                    } else {
                        // 3. Blocked? Try sliding along Z
                        const currGridX = Math.round(camera.position.x / cellSize);
                        if (grid[gridZ] && grid[gridZ][currGridX] === 0) {
                            camera.position.z = nextZ;
                            // X stays same
                        }
                    }
                }
            }

            // Bobbing
            if (moveForward || moveBackward) {
                camera.position.y = Math.sin(time * 0.01) * 0.15;
            }

            // Keys Logic
            keysRef.current.forEach((key, index) => {
                if (key.visible) {
                    key.rotation.y += delta;
                    if (camera.position.distanceTo(key.position) < 2) {
                        key.visible = false;
                        collectedKeysRef.current += 1;
                        setKeysCollected(c => c + 1);
                        console.log("Key Collected! Total:", collectedKeysRef.current);

                        if (collectedKeysRef.current >= 3) {
                            setStatus("KEYS COLLECTED. EXIT PORTAL OPENING...");
                            // Logic to spawn exit would go here
                        }
                    }
                }
            });

            // Enemy Logic (Billboarding & UNPREDICTABLE CHASE)
            enemies.forEach(enemy => {
                // Always face camera (Billboard)
                enemy.lookAt(camera.position.x, enemy.position.y, camera.position.z);

                const dist = enemy.position.distanceTo(camera.position);

                // Line of Sight
                const dirToPlayer = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize();
                const raycaster = new THREE.Raycaster(enemy.position, dirToPlayer, 0, 40);
                const intersects = raycaster.intersectObjects(mazeGroup.children);

                let canSee = false;
                if (intersects.length === 0 || intersects[0].distance > dist) {
                    canSee = true;
                }

                // Update State
                if (canSee && dist < 25) {
                    enemy.userData.state = 'CHASE';
                } else {
                    enemy.userData.state = 'PATROL';
                }

                // "Glitch" & Movement Logic
                if (enemy.userData.state === 'CHASE') {
                    // Base Speed
                    let speed = 5.0 * delta;

                    // 1. Random Glitch / Burst
                    // 5% chance per frame to "teleport" or "sprint"
                    if (Math.random() < 0.05) {
                        // Micro-teleport forward (Jitter)
                        enemy.position.x += dirToPlayer.x * 1.5;
                        enemy.position.z += dirToPlayer.z * 1.5;
                    }

                    // 2. Stop and Stare (Unpredictable)
                    // 1% chance to just freeze for a moment
                    if (Math.random() < 0.01) {
                        speed = 0;
                    }

                    enemy.position.x += dirToPlayer.x * speed;
                    enemy.position.z += dirToPlayer.z * speed;

                    // Jumpscare Trigger
                    if (dist < 1.0) { // Very close
                        triggerJumpScare(enemy);
                    }
                } else {
                    // Wandering (Jittery Patrol)
                    // Random direction change
                    if (!enemy.userData.patrolDir || Math.random() < 0.02) {
                        enemy.userData.patrolDir = new THREE.Vector3(Math.random() - 0.5, 0, Math.random() - 0.5).normalize();
                    }

                    enemy.position.x += enemy.userData.patrolDir.x * 2.0 * delta;
                    enemy.position.z += enemy.userData.patrolDir.z * 2.0 * delta;
                }
            });

            // Lantern Flicker
            scene.children.forEach(child => {
                if (child.isGroup) {
                    child.children.forEach(c => {
                        if (c.isPointLight && c.userData.flickerSpeed) {
                            c.intensity = c.userData.baseInt + Math.sin(time * c.userData.flickerSpeed) * 0.5;
                        }
                    })
                }
            });

            // Narrative
            const elapsedTime = (time - startTimeRef.current) / 1000;
            const currentScriptLine = NARRATIVE_SCRIPT.find(l => Math.abs(l.time - elapsedTime) < 0.5);
            if (currentScriptLine) {
                setCurrentThought(currentScriptLine.text);
                setTimeout(() => setCurrentThought(null), 4000);
            }

            // Sanity Drain
            sanityRef.current -= 0.02 * delta; // Faster drain
            setSanity(Math.max(0, sanityRef.current));

            if (sanityRef.current <= 0 && !gameOver) {
                triggerJumpScare();
            }

            renderer.render(scene, camera);
        };

        const animationId = requestAnimationFrame(animate);

        const triggerJumpScare = (enemy) => {
            if (jumpScareRef.current) return;

            // Non-fatal Jumpscare
            jumpScareRef.current = true;
            console.log("JUMPSCARE! Teleporting enemy away...");

            // 1. Audio Blast
            if (audioRef.current) {
                const now = audioRef.current.ctx.currentTime;
                audioRef.current.osc.frequency.setValueAtTime(100, now);
                audioRef.current.osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
                audioRef.current.gain.gain.setValueAtTime(1, now);
                audioRef.current.gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            }

            // 2. Flash Overlay (We use setGameOver temporarily for the visual or a new state? 
            // Let's use a separate state to avoid full game block)
            setStatus("RUN! IT FOUND YOU!");
            setSanity(s => Math.max(0, s - 25));

            // 3. Teleport Enemy Away
            // Find a spawn point far away
            if (enemy && validSpawnPoints.length > 0) {
                // Just pick a random valid point
                const randPt = validSpawnPoints[Math.floor(Math.random() * validSpawnPoints.length)];
                enemy.position.set(randPt.x, -1, randPt.z);
                enemy.userData.state = 'PATROL'; // Reset state
            }

            // Reset flag after a delay so we can get scared again
            setTimeout(() => {
                jumpScareRef.current = false;
                setStatus("Objective: Find Keys");
            }, 2000);
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        }
    }, [audioEnabled]);

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full bg-black z-50 overflow-hidden cursor-none">
            {/* JUMP SCARE OVERLAY */}
            {gameOver && (
                <div className="absolute inset-0 z-[100] bg-black flex items-center justify-center animate-vibrate">
                    <img src={`${import.meta.env.BASE_URL}images/nano_banana.png`} className="w-full h-full object-contain animate-pulse-fast filter contrast-150 brightness-50" />
                    <h1 className="absolute text-red-600 font-black text-9xl animate-ping">CAUGHT</h1>
                </div>
            )}

            {/* HUD */}
            <div className="absolute top-8 left-8 z-50 pointer-events-none select-none mix-blend-difference">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-black text-red-600 tracking-widest uppercase">Vital Systems</h2>
                    <div className="h-2 w-48 bg-gray-900 border border-red-900/50">
                        <div className="h-full bg-red-600" style={{ width: `${sanity}%` }} />
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-yellow-500">
                        <Key className="w-6 h-6" />
                        <span className="text-2xl font-mono">{keysCollected} / 3 KEYS</span>
                    </div>
                    <p className="text-orange-500 font-mono mt-2 animate-pulse">{status}</p>
                </div>
            </div>

            {/* Thought Overlay */}
            {currentThought && (
                <div className="absolute bottom-32 left-0 w-full text-center z-50 pointer-events-none">
                    <p className="text-xl text-gray-200 font-serif italic tracking-wide bg-black/50 p-4 inline-block rounded">
                        "{currentThought}"
                    </p>
                </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto">
                <button
                    onClick={onExit}
                    className="flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold"
                >
                    ABORT <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className="self-end bg-black/50 p-2 border border-gray-800 text-gray-400"
                >
                    {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
            </div>

            {/* Center Reticle */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion" />

            {/* CRT Effect */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-[0.05] pointer-events-none z-40"></div>
        </div>
    );
};

export default BackroomsView;
