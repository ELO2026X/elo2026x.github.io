import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info, Key, HelpCircle, Play, Wheat } from 'lucide-react';

const NARRATIVE_SCRIPT = [
    { time: 2, text: "Protocol: Birthday initiated." },
    { time: 10, text: "Smile. They are watching." },
    { time: 25, text: "Gifts contain sanity. Open them." },
    { time: 45, text: "Do not frown. Do not run." },
    { time: 60, text: "The Cornfield is waiting for the rude ones." }
];

// --- PROCEDURAL 3D ASSETS ---

const createScarecrow = () => {
    const group = new THREE.Group();

    // Post
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 1 });
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 0.2), woodMat);
    post.position.y = 1.5;
    group.add(post);

    // Crossbar
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 0.2), woodMat);
    crossbar.position.y = 2.2;
    // Tilt it slightly
    crossbar.rotation.z = (Math.random() - 0.5) * 0.2;
    group.add(crossbar);

    // Head (Burlap Sack)
    const sackMat = new THREE.MeshStandardMaterial({ color: 0xc2b280, roughness: 1 });
    const head = new THREE.Mesh(new THREE.DodecahedronGeometry(0.4), sackMat);
    head.position.y = 2.8;
    group.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.08);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.15, 2.85, 0.35);
    rightEye.position.set(0.15, 2.85, 0.35);
    group.add(leftEye);
    group.add(rightEye);

    // Tattered Cloth (Coat)
    const clothGeo = new THREE.ConeGeometry(0.8, 1.5, 4, 1, true);
    const clothMat = new THREE.MeshStandardMaterial({ color: 0x333333, side: THREE.DoubleSide, roughness: 1 });
    const coat = new THREE.Mesh(clothGeo, clothMat);
    coat.position.y = 1.8;
    coat.scale.z = 0.5;
    group.add(coat);

    return group;
};

const createCornStalk = () => {
    // Use a Billboard Sprite for performance if we have thousands, 
    // but user asked for 3D. Let's make a low-poly 3D stalk.
    const group = new THREE.Group();

    // Stalk
    const stalkGeo = new THREE.CylinderGeometry(0.05, 0.1, 4, 5);
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.8 });
    const stalk = new THREE.Mesh(stalkGeo, greenMat);
    stalk.position.y = 0; // Center is 0, so -2 to +2
    group.add(stalk);

    // Leaves (Simple Planes)
    const leafGeo = new THREE.PlaneGeometry(0.3, 1.5);
    leafGeo.translate(0, 0.75, 0); // Pivot at bottom
    for (let i = 0; i < 4; i++) {
        const leaf = new THREE.Mesh(leafGeo, greenMat);
        leaf.position.y = (Math.random() * 2) - 1;
        leaf.rotation.y = Math.random() * Math.PI * 2;
        leaf.rotation.z = Math.PI / 4; // Fold out
        group.add(leaf);
    }

    // Random Height/Scale variation
    const scale = 0.8 + Math.random() * 0.4;
    group.scale.set(scale, scale, scale);

    return group;
};


const BackroomsView = ({ onExit }) => {
    const containerRef = useRef();
    const [sanity, setSanity] = useState(100);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [status, setStatus] = useState("AWAITING INPUT...");
    const [hint, setHint] = useState("");
    const [keysCollected, setKeysCollected] = useState(0);
    const [currentThought, setCurrentThought] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [socialBattery, setSocialBattery] = useState(100);
    const [isInMenu, setIsInMenu] = useState(true);

    const audioRef = useRef(null);
    const sanityRef = useRef(100);
    const keysRef = useRef([]);
    const collectedKeysRef = useRef(0);
    const jumpScareRef = useRef(false);
    const currentLevelRef = useRef('PARTY');
    const hasWonRef = useRef(false);
    const cakeRef = useRef(null);

    // Scene Refs (to modify during loop)
    const sceneRef = useRef(null);
    const enemiesRef = useRef([]);
    const cornfieldGroupRef = useRef(new THREE.Group());
    const partyGroupRef = useRef(new THREE.Group());

    const moveState = useRef({
        forward: false, backward: false, left: false, right: false,
        smile: false, run: false
    });

    // 1 = Wall, 0 = Empty (Walkable)
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
    const validSpawnPoints = useRef([]);

    // --- AUDIO SYSTEM (Dark Drone) ---
    const initAudio = () => {
        if (audioRef.current) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        // Low Drone (constant)
        const droneOsc = ctx.createOscillator();
        droneOsc.type = 'sawtooth';
        droneOsc.frequency.value = 50;
        const droneGain = ctx.createGain();
        droneGain.gain.value = 0.1;

        // Filter to make it muffled/dark
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;

        droneOsc.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(ctx.destination);
        droneOsc.start();

        // Screech Osc (for Jumpscares only)
        const screamOsc = ctx.createOscillator();
        screamOsc.type = 'sawtooth';
        const screamGain = ctx.createGain();
        screamGain.gain.value = 0;
        screamOsc.connect(screamGain);
        screamGain.connect(ctx.destination);
        screamOsc.start();

        audioRef.current = { ctx, droneOsc, droneGain, screamOsc, screamGain };
        setAudioEnabled(true);
    };

    const startGame = (level) => {
        setIsInMenu(false);
        initAudio();
        pendingLevelSwitch.current = level;
    };

    // Switch queue
    const pendingLevelSwitch = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Input Handlers
        const handleKeyDown = (e) => {
            switch (e.code) {
                case 'KeyW': moveState.current.forward = true; break;
                case 'KeyS': moveState.current.backward = true; break;
                case 'KeyA': moveState.current.left = true; break;
                case 'KeyD': moveState.current.right = true; break;
                case 'Space': moveState.current.smile = true; break;
                case 'ShiftLeft':
                case 'ShiftRight': moveState.current.run = true; break;
            }
        };
        const handleKeyUp = (e) => {
            switch (e.code) {
                case 'KeyW': moveState.current.forward = false; break;
                case 'KeyS': moveState.current.backward = false; break;
                case 'KeyA': moveState.current.left = false; break;
                case 'KeyD': moveState.current.right = false; break;
                case 'Space': moveState.current.smile = false; break;
                case 'ShiftLeft':
                case 'ShiftRight': moveState.current.run = false; break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // THREE.JS INIT
        const baseUrl = import.meta.env.BASE_URL;
        const textureLoader = new THREE.TextureLoader();

        // Assets
        const partyWallTex = textureLoader.load(`${baseUrl}images/party_wallpaper.png`);
        const partyCarpetTex = textureLoader.load(`${baseUrl}images/carpet.png`);
        const dirtTex = textureLoader.load(`${baseUrl}images/dirt_ground.png`);
        const hostTex = textureLoader.load(`${baseUrl}images/host.png`);
        const cakeTex = textureLoader.load(`${baseUrl}images/cake.png`);

        // Tex Settings
        partyWallTex.wrapS = partyWallTex.wrapT = THREE.RepeatWrapping;
        partyCarpetTex.wrapS = partyCarpetTex.wrapT = THREE.RepeatWrapping;
        dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping;
        partyCarpetTex.repeat.set(4, 4);
        dirtTex.repeat.set(4, 4);
        hostTex.magFilter = THREE.NearestFilter;
        cakeTex.magFilter = THREE.NearestFilter;

        // Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0x332200);
        scene.fog = new THREE.FogExp2(0x443300, 0.03);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Retro Effect CSS
        renderer.domElement.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.2) sepia(0.4) saturate(1.5);';
        containerRef.current.appendChild(renderer.domElement);

        // Materials
        const partyMat = new THREE.MeshStandardMaterial({ map: partyWallTex, color: 0xffffff, roughness: 0.5 });
        const carpetMat = new THREE.MeshStandardMaterial({ map: partyCarpetTex, color: 0x554433, roughness: 1.0 });
        const dirtMat = new THREE.MeshStandardMaterial({ map: dirtTex, color: 0x333333, roughness: 1.0 });
        const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x221100 });

        // --- LEVEL GROUPS ---
        const partyGroup = new THREE.Group();
        partyGroupRef.current = partyGroup;
        scene.add(partyGroup);

        const cornGroup = new THREE.Group();
        cornfieldGroupRef.current = cornGroup;
        cornGroup.visible = false;
        scene.add(cornGroup);

        // Build Maze Geometry (Dual Level)
        const grid = mazeGridRef.current;
        const wallGeo = new THREE.BoxGeometry(cellSize, 12, cellSize);
        const floorGeo = new THREE.PlaneGeometry(cellSize, cellSize);

        grid.forEach((row, r) => {
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // 1. PARTY LEVEL BUILD
                const pFloor = new THREE.Mesh(floorGeo, carpetMat);
                pFloor.rotation.x = -Math.PI / 2;
                pFloor.position.set(x, -4, z);
                partyGroup.add(pFloor);

                const pCeiling = new THREE.Mesh(floorGeo, ceilingMat);
                pCeiling.rotation.x = Math.PI / 2;
                pCeiling.position.set(x, 4, z);
                partyGroup.add(pCeiling);

                if (cell === 1) { // Wall
                    const pWall = new THREE.Mesh(wallGeo, partyMat);
                    pWall.position.set(x, 0, z);
                    pWall.userData = { isBorder: true }; // Collidable
                    partyGroup.add(pWall);
                } else {
                    validSpawnPoints.current.push({ x, z });
                    // Sparse Lanterns
                    if (Math.random() > 0.85) {
                        const lantern = new THREE.PointLight(0xffaa00, 1, 12);
                        lantern.position.set(x, 1, z);
                        partyGroup.add(lantern);
                    }
                }

                // 2. CORNFIELD LEVEL BUILD
                const cFloor = new THREE.Mesh(floorGeo, dirtMat);
                cFloor.rotation.x = -Math.PI / 2;
                cFloor.position.set(x, -4, z); // Same floor plane
                cornGroup.add(cFloor);

                // NO CEILING IN CORNFIELD (Open Sky)

                if (cell === 1) {
                    // Wall for Cornfield is... THICK CORN STALKS
                    // Place 5-10 stalks per wall cell to create a "thicket"
                    for (let i = 0; i < 8; i++) {
                        const stalk = createCornStalk();
                        // Random offset within the cell
                        const ox = (Math.random() - 0.5) * cellSize * 0.9;
                        const oz = (Math.random() - 0.5) * cellSize * 0.9;
                        stalk.position.set(x + ox, -4, z + oz);
                        cornGroup.add(stalk);
                    }
                    // Invisible collider wall so player can't walk through stalks
                    const cCollider = new THREE.Mesh(wallGeo, new THREE.MeshBasicMaterial({ visible: false }));
                    cCollider.position.set(x, 0, z);
                    cCollider.userData = { isBorder: true }; // Collidable
                    cornGroup.add(cCollider);
                }
            });
        });

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffaa00, 0.4);
        scene.add(ambientLight);

        const flashlight = new THREE.SpotLight(0xffddaa, 3.0, 80, Math.PI / 5, 0.4, 1);
        flashlight.position.set(0, 0, 0);
        flashlight.target.position.set(0, 0, -1);
        camera.add(flashlight);
        camera.add(flashlight.target);
        scene.add(camera);

        // Spawn Player
        camera.position.set(cellSize, 0, cellSize);

        // Assets / Gifts (Global?)
        // Let's keep gifts in BOTH levels or reset them? For now, they are scene children.
        const keyGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
        const keyMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        for (let i = 0; i < 3; i++) {
            const idx = Math.floor(Math.random() * validSpawnPoints.current.length);
            const pos = validSpawnPoints.current[idx];
            const key = new THREE.Mesh(keyGeo, keyMat);
            key.position.set(pos.x, -2, pos.z);
            key.userData = { type: 'key' };
            scene.add(key); // Add to root scene so visible in both? Or switch? 
            // Ideally gifts should persist across levels. Root scene is fine as long as y matches.
            keysRef.current.push(key);
            const kLight = new THREE.PointLight(0xffd700, 1, 5);
            kLight.position.set(pos.x, -2, pos.z);
            scene.add(kLight);
        }

        // --- ENEMIES ---
        // 1. Hosts (Party) - Sprites
        // 2. Scarecrows (Cornfield) - 3D Models

        const spawnEntity = (type, pos) => {
            let entity;
            if (type === 'HOST') {
                const mat = new THREE.SpriteMaterial({ map: hostTex, transparent: true });
                entity = new THREE.Sprite(mat);
                entity.scale.set(1.5, 3.5, 1);
                entity.position.set(pos.x, 0, pos.z);
                entity.userData = {
                    type: 'HOST',
                    state: 'PATROL',
                    level: 'PARTY'
                };
                partyGroup.add(entity);
            } else {
                entity = createScarecrow();
                entity.position.set(pos.x, -4, pos.z); // Feet on ground
                entity.userData = {
                    type: 'SCARECROW',
                    state: 'FROZEN', // Weeping Angel logic default
                    level: 'CORNFIELD'
                };
                cornGroup.add(entity);
            }
            enemiesRef.current.push(entity);
        };

        // Initial Spawns
        spawnEntity('HOST', validSpawnPoints.current[5]);
        spawnEntity('HOST', validSpawnPoints.current[10] || validSpawnPoints.current[0]);
        spawnEntity('SCARECROW', validSpawnPoints.current[6]);
        spawnEntity('SCARECROW', validSpawnPoints.current[11] || validSpawnPoints.current[1]);


        // --- LEVEL SWITCH IMPLEMENTATION ---
        const handleSwitchLevel = (newLevel) => {
            currentLevelRef.current = newLevel;

            if (newLevel === 'CORNFIELD') {
                setStatus("EXILED TO THE CORNFIELD.");
                setHint("THEY ONLY MOVE WHEN UNAWARE. WATCH THEM.");

                // Visibility Trigger
                partyGroupRef.current.visible = false;
                cornfieldGroupRef.current.visible = true;

                // Atmosphere
                scene.background = new THREE.Color(0x111111); // Darker night
                scene.fog = new THREE.FogExp2(0x111111, 0.04);
                ambientLight.color.setHex(0x555577); // Moonlight blueish
                ambientLight.intensity = 0.2;

                // Randomize Player Pos
                const randPt = validSpawnPoints.current[Math.floor(Math.random() * validSpawnPoints.current.length)];
                camera.position.set(randPt.x, 0, randPt.z);

            } else {
                // PARTY
                setStatus("Objective: Find 3 Gifts");
                setHint("");

                partyGroupRef.current.visible = true;
                cornfieldGroupRef.current.visible = false;

                scene.background = new THREE.Color(0x332200);
                scene.fog = new THREE.FogExp2(0x443300, 0.03);
                ambientLight.color.setHex(0xffaa00);
                ambientLight.intensity = 0.4;

                camera.position.set(cellSize, 0, cellSize);
            }
        };


        // --- GAME LOOP ---
        let lastTime = performance.now();
        const animate = () => {
            requestAnimationFrame(animate);
            if (isInMenu) return; // Menu Pause

            if (pendingLevelSwitch.current) {
                handleSwitchLevel(pendingLevelSwitch.current);
                pendingLevelSwitch.current = null;
            }

            if (jumpScareRef.current || hasWonRef.current) return;

            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Player Movement
            if (moveState.current.left) camera.rotation.y += 2 * delta;
            if (moveState.current.right) camera.rotation.y -= 2 * delta;

            const moveForward = moveState.current.forward;
            const moveBackward = moveState.current.backward;

            if (moveForward || moveBackward) {
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                direction.y = 0; direction.normalize();
                if (moveBackward) direction.negate();

                const speed = moveState.current.run ? 12.0 : 5.0;
                const nextX = camera.position.x + direction.x * speed * delta;
                const nextZ = camera.position.z + direction.z * speed * delta;

                // Collision Check (Depends on active level group + border data)
                // We check against child meshes that have userData.isBorder
                const activeGroup = currentLevelRef.current === 'PARTY' ? partyGroupRef.current : cornfieldGroupRef.current;

                // Simple Grid Collision (Backsup Raycasting)
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                // Note: The logic handles both wall meshes and grid 0/1 array.
                // Grid array is safer.
                if (grid[gridZ] && grid[gridZ][gridX] === 0) {
                    camera.position.x = nextX; camera.position.z = nextZ;
                } else {
                    // Wall Sliding
                    const currGridZ = Math.round(camera.position.z / cellSize);
                    if (grid[currGridZ] && grid[currGridZ][gridX] === 0) {
                        camera.position.x = nextX;
                    }
                    else {
                        const currGridX = Math.round(camera.position.x / cellSize);
                        if (grid[gridZ] && grid[gridZ][currGridX] === 0) {
                            camera.position.z = nextZ;
                        }
                    }
                }

                // Head Bob
                const bobFreq = moveState.current.run ? 15 : 8;
                camera.position.y = Math.sin(time * bobFreq) * 0.08;
            } else {
                camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, delta * 5);
            }

            // Interaction Check (Keys / Cake)
            // Keys
            keysRef.current.forEach(key => {
                if (key.visible) {
                    key.rotation.y += delta;
                    if (camera.position.distanceTo(key.position) < 2.5) {
                        key.visible = false;
                        collectedKeysRef.current += 1;
                        setKeysCollected(c => c + 1);
                        // Heal Battery
                        setSocialBattery(100);
                        setStatus("GIFT OPENED. BATTERY RESTORED.");

                        // SPAWN CAKE
                        if (collectedKeysRef.current === 3) {
                            const cakeMat = new THREE.SpriteMaterial({ map: cakeTex, transparent: true });
                            const cake = new THREE.Sprite(cakeMat);
                            cake.scale.set(3, 3, 1);
                            cake.position.set(cellSize, 0, cellSize);
                            partyGroupRef.current.add(cake); // Add to party group 
                            //(What if in Cornfield? Assume exit is in Party level, requiring survival)
                            // Actually, if they are in Cornfield, they are stuck forever? 
                            // Let's make Cornfield contain a portal back?
                            // For now, Cake is exit.
                            cakeRef.current = cake;

                            setStatus("EXIT OPEN! RETURN TO START!");
                        }
                    }
                }
            });
            // Win
            if (cakeRef.current && currentLevelRef.current === 'PARTY') {
                if (camera.position.distanceTo(cakeRef.current.position) < 2.0) {
                    hasWonRef.current = true;
                    setGameOver(true);
                }
            }


            // --- ENTITY AI ---
            enemiesRef.current.forEach(enemy => {
                // Only process enemies in current level
                if (enemy.userData.level !== currentLevelRef.current) return;

                const dist = enemy.position.distanceTo(camera.position);
                const dirToPlayer = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize();
                dirToPlayer.y = 0; // Don't fly

                // Raycast Visibility
                const activeGroup = currentLevelRef.current === 'PARTY' ? partyGroupRef.current : cornfieldGroupRef.current;
                const raycaster = new THREE.Raycaster(enemy.position, dirToPlayer, 0, 40);
                // Intersect walls
                const intersects = raycaster.intersectObjects(activeGroup.children.filter(c => c.userData.isBorder));
                const canSee = (intersects.length === 0 || intersects[0].distance > dist);

                if (currentLevelRef.current === 'PARTY') {
                    // HOST AI
                    if (canSee && dist < 25) {
                        // Look at player (billboard does this auto, but logic needs to know)
                        // Check Smile
                        if (moveState.current.smile && socialBattery > 0) {
                            enemy.userData.state = 'STARE';
                        } else {
                            enemy.userData.state = 'CHASE';
                        }
                    } else {
                        enemy.userData.state = 'PATROL';
                    }

                    if (enemy.userData.state === 'CHASE') {
                        enemy.position.addScaledVector(dirToPlayer, 6.0 * delta);
                        if (dist < 1.0) {
                            triggerJumpScare(enemy);
                            setTimeout(() => {
                                pendingLevelSwitch.current = 'CORNFIELD';
                            }, 1500);
                        }
                    } else if (enemy.userData.state === 'PATROL') {
                        enemy.position.x += (Math.random() - 0.5) * 0.1;
                        enemy.position.z += (Math.random() - 0.5) * 0.1;
                    }

                } else {
                    // SCARECROW AI (Weeping Angel + 3D Rotation)
                    // Point 3D model at player
                    enemy.lookAt(camera.position.x, enemy.position.y, camera.position.z);

                    const playerDir = new THREE.Vector3();
                    camera.getWorldDirection(playerDir);
                    const angle = playerDir.dot(dirToPlayer); // Dot product of look vectors

                    // If player is looking roughly towards enemy (angle < -0.3 means looking opposite to enemy-to-player vector)
                    // Wait, dirToPlayer is Enemy -> Player. 
                    // If Player looks AT Enemy, PlayerDir is roughly -dirToPlayer.
                    // So Dot Product is nearly -1.
                    const isLookingAt = (canSee && angle < -0.3);

                    if (isLookingAt) {
                        enemy.userData.state = 'FROZEN';
                        // Maybe twitch?
                    } else {
                        enemy.userData.state = 'RUSH';
                        // Very fast
                        enemy.position.addScaledVector(dirToPlayer, 14.0 * delta);

                        if (dist < 1.0) triggerJumpScare(enemy);
                    }
                }
            });

            renderer.render(scene, camera);
        };
        const animationId = requestAnimationFrame(animate);

        const triggerJumpScare = (enemy) => {
            if (jumpScareRef.current) return;
            jumpScareRef.current = true;

            // AUDIO SCREECH
            if (audioRef.current) {
                const { screamOsc, screamGain, ctx } = audioRef.current;
                const now = ctx.currentTime;
                screamOsc.frequency.setValueAtTime(200, now);
                screamOsc.frequency.linearRampToValueAtTime(1200, now + 0.1);
                screamOsc.frequency.linearRampToValueAtTime(100, now + 0.8);

                screamGain.gain.setValueAtTime(0, now);
                screamGain.gain.linearRampToValueAtTime(0.8, now + 0.1);
                screamGain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
            }

            setStatus("CAUGHT.");

            setTimeout(() => { jumpScareRef.current = false; }, 2000);
        };

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (containerRef.current && renderer.domElement) containerRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            if (audioRef.current) {
                audioRef.current.ctx.close();
            }
        };

    }, [isInMenu]); // Re-run when leaving menu

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-mono select-none">
            <div ref={containerRef} className="w-full h-full" />

            {/* UI HUD */}
            <div className="absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md">PROTOCOL: BIRTHDAY</h1>
                        <p className="text-xl text-yellow-200 mt-2 animate-pulse">{status}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl text-yellow-500 font-bold mb-2">SOCIAL BATTERY</div>
                        <div className="w-64 h-6 bg-gray-900 border-2 border-yellow-700">
                            <div className="h-full bg-yellow-500 transition-all duration-200" style={{ width: `${socialBattery}%` }} />
                        </div>
                        <div className="mt-4 flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-yellow-300">HOLD [SPACE] TO WIDEN SMILE</span>
                                <div className={`w-8 h-8 rounded-full border-2 ${moveState.current?.smile ? 'bg-green-500 border-green-300' : 'bg-transparent border-red-500'}`} />
                            </div>
                            <div className="text-sm text-yellow-300">HOLD [SHIFT] TO RUN</div>
                        </div>
                        <div className="mt-4 text-xl text-yellow-200">GIFTS OPENED: {keysCollected} / 3</div>
                    </div>
                </div>
            </div>

            {/* HINT OVERLAY */}
            {hint && (
                <div className="absolute bottom-1/4 w-full text-center pointer-events-none z-20">
                    <p className="text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse">{hint}</p>
                </div>
            )}

            {/* MAIN MENU STAGE SELECT */}
            {isInMenu && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-yellow-500">
                    <h1 className="text-6xl font-black tracking-widest mb-12 animate-pulse text-yellow-200 drop-shadow-lg">SELECT STAGE</h1>
                    <div className="flex gap-8">
                        <button
                            onClick={() => startGame('PARTY')}
                            className="group relative px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="flex flex-col items-center gap-4 relative z-10">
                                <Play className="w-12 h-12 text-yellow-500 group-hover:text-white" />
                                <span className="text-2xl font-bold tracking-widest group-hover:text-white">LEVEL 21: THE PARTY</span>
                            </div>
                            <div className="absolute inset-0 bg-yellow-600/20 group-hover:bg-yellow-600/40 transition-all translate-y-full group-hover:translate-y-0" />
                        </button>

                        <button
                            onClick={() => startGame('CORNFIELD')}
                            className="group relative px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="flex flex-col items-center gap-4 relative z-10">
                                <Wheat className="w-12 h-12 text-red-700 group-hover:text-red-500" />
                                <span className="text-2xl font-bold tracking-widest text-red-800 group-hover:text-red-500">LEVEL 10: THE CORNFIELD</span>
                            </div>
                            <div className="absolute inset-0 bg-red-900/10 group-hover:bg-red-900/30 transition-all translate-y-full group-hover:translate-y-0" />
                        </button>
                    </div>
                    <p className="mt-12 text-gray-500 font-mono text-sm max-w-md text-center">
                        WARNING: Level 10 is an Exiled Zone. Entities demonstrate quantum-lock behaviors. Do not blink.
                    </p>
                </div>
            )}

            {/* Victory / Game Over Overlay */}
            {(gameOver || jumpScareRef.current) && !isInMenu && (
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center ${gameOver ? 'bg-yellow-900' : 'bg-red-600'} mix-blend-multiply transition-opacity duration-1000`}>
                    {gameOver ? (
                        <div className="text-center animate-bounce">
                            <h1 className="text-9xl font-black text-yellow-100 mb-8 drop-shadow-lg">SURVIVED</h1>
                            <p className="text-4xl text-yellow-300 mb-8">REWARD: ALMOND WATER</p>
                            <img src={`${import.meta.env.BASE_URL}images/cake.png`} className="w-64 h-64 mx-auto pixelated animate-spin" alt="Cake" />
                            <button onClick={() => window.location.reload()} className="mt-12 px-8 py-4 bg-yellow-600 text-black font-bold text-2xl hover:bg-yellow-500">REPLAY</button>
                        </div>
                    ) : (
                        <h1 className="text-9xl font-black text-black animate-ping">RUDE!</h1>
                    )}
                </div>
            )}

            {/* Scanlines / Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] mix-blend-overlay"></div>

            {/* Action Buttons */}
            <div className="absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto">
                <button onClick={onExit} className="flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold">ABORT <ArrowLeft className="w-4 h-4" /></button>
            </div>

            {/* Center Reticle */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion" />
        </div>
    );
};

export default BackroomsView;
