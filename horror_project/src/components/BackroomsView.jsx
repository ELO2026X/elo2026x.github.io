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
    const [isInMenu, setIsInMenu] = useState(true); // Default to Menu

    const audioRef = useRef(null);
    const sanityRef = useRef(100);
    const startTimeRef = useRef(performance.now());
    const keysRef = useRef([]);
    const collectedKeysRef = useRef(0);
    const jumpScareRef = useRef(false);
    const currentLevelRef = useRef('PARTY'); // 'PARTY' or 'CORNFIELD'
    const hasWonRef = useRef(false);
    const cakeRef = useRef(null);

    const moveState = useRef({
        forward: false, backward: false, left: false, right: false,
        smile: false, run: false
    });

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

    // --- LOGIC: Select Level ---
    const startGame = (level) => {
        setIsInMenu(false);
        // Audio Context can only start here
        if (!audioRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            gain.gain.value = 0;
            osc.start();
            audioRef.current = { ctx, osc, gain };
            setAudioEnabled(true);
        }

        if (level === 'CORNFIELD') {
            // We need to trigger this AFTER the scene is ready in the loop? 
            // No, we can trigger it immediately via a ref flag or just let the loop handle it
            // Actually, best to set a flag that the loop reads on first frame
            // But since 'switchLevel' relies on 'scene' variables which are inside useEffect,
            // we probably should expose switchLevel or just pass the prop.
            // Simpler: Set a ref "pendingLevelSwitch" and handle in animate loop once.
            pendingLevelSwitch.current = 'CORNFIELD';
        } else {
            setStatus("Objective: Find 3 Gifts");
        }
    };

    // Create a ref to hold the switch function so we can call it from state changes if needed
    // But since `switchLevel` is defined inside useEffect, we can't call it from `startGame` easily.
    // Solution: Use a `pendingLevelSwitch` ref.
    const pendingLevelSwitch = useRef(null);


    useEffect(() => {
        if (!containerRef.current) return;

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

        const baseUrl = import.meta.env.BASE_URL;
        const textureLoader = new THREE.TextureLoader();

        // --- ASSETS ---
        const partyWallTex = textureLoader.load(`${baseUrl}images/party_wallpaper.png`);
        const partyCarpetTex = textureLoader.load(`${baseUrl}images/carpet.png`);
        const hostTex = textureLoader.load(`${baseUrl}images/host.png`);
        const cornWallTex = textureLoader.load(`${baseUrl}images/corn_wall.png`);
        const dirtTex = textureLoader.load(`${baseUrl}images/dirt_ground.png`);
        const scarecrowTex = textureLoader.load(`${baseUrl}images/scarecrow.png`);
        const cakeTex = textureLoader.load(`${baseUrl}images/cake.png`);

        // Texture Settings
        [partyWallTex, cornWallTex].forEach(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, 1); });
        [partyCarpetTex, dirtTex].forEach(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 4); });

        hostTex.magFilter = THREE.NearestFilter;
        scarecrowTex.magFilter = THREE.NearestFilter;
        cakeTex.magFilter = THREE.NearestFilter;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x332200);
        scene.fog = new THREE.FogExp2(0x443300, 0.03);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.2) sepia(0.4) saturate(1.5);';
        containerRef.current.appendChild(renderer.domElement);

        // Materials
        const wallMaterial = new THREE.MeshStandardMaterial({ map: partyWallTex, color: 0xffffff, roughness: 0.5 });
        const floorMaterial = new THREE.MeshStandardMaterial({ map: partyCarpetTex, color: 0x554433, roughness: 1.0 });
        const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0x221100 });

        // Maze Group
        const mazeGroup = new THREE.Group();
        const wallGeometry = new THREE.BoxGeometry(cellSize, 12, cellSize);
        const floorGeometry = new THREE.PlaneGeometry(cellSize, cellSize);

        const grid = mazeGridRef.current;
        const validSpawnPoints = [];
        const ceilingMeshes = [];

        grid.forEach((row, r) => {
            const rowMeshes = [];
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.rotation.x = -Math.PI / 2;
                floor.position.set(x, -4, z);
                mazeGroup.add(floor);

                const ceiling = new THREE.Mesh(floorGeometry, ceilingMaterial);
                ceiling.rotation.x = Math.PI / 2;
                ceiling.position.set(x, 4, z);
                mazeGroup.add(ceiling);
                ceilingMeshes.push(ceiling);

                const wall = new THREE.Mesh(wallGeometry, wallMaterial);
                const targetY = cell === 1 ? 0 : -20;
                wall.position.set(x, targetY, z);
                wall.userData = { targetY, isBorder: (r === 0 || r === grid.length - 1 || c === 0 || c === row.length - 1) };
                mazeGroup.add(wall);
                rowMeshes.push(wall);

                if (cell === 0) validSpawnPoints.push({ x, z });

                if (cell === 1 && Math.random() > 0.85) {
                    const lantern = new THREE.PointLight(0xffaa00, 1, 12);
                    lantern.position.set(x, 1, z);
                    lantern.userData = { type: 'lantern', flickerSpeed: Math.random() * 0.1 + 0.05, baseInt: 1 };
                    mazeGroup.add(lantern);
                }
            });
            wallMeshesRef.current.push(rowMeshes);
        });
        scene.add(mazeGroup);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffaa00, 0.4);
        scene.add(ambientLight);

        const flashlight = new THREE.SpotLight(0xffddaa, 3.0, 80, Math.PI / 5, 0.4, 1);
        flashlight.position.set(0, 0, 0);
        flashlight.target.position.set(0, 0, -1);
        camera.add(flashlight);
        camera.add(flashlight.target);
        scene.add(camera);

        // Enemies
        const enemies = [];
        const spawnEnemy = (tex, name) => {
            if (validSpawnPoints.length === 0) return;
            const idx = Math.floor(validSpawnPoints.length * 0.8 + Math.random() * (validSpawnPoints.length * 0.2));
            const pos = validSpawnPoints[idx];
            const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
            const sprite = new THREE.Sprite(spriteMat);
            sprite.position.set(pos.x, 0, pos.z);
            sprite.scale.set(1.5, 3.5, 1);
            sprite.userData = { name, state: 'PATROL', glitchTimer: 0 };
            mazeGroup.add(sprite);
            enemies.push(sprite);
        };
        spawnEnemy(hostTex, "Host");
        spawnEnemy(hostTex, "Host");

        camera.position.set(cellSize, 0, cellSize);

        // Keys / Gifts
        const keyGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
        const keyMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        for (let i = 0; i < 3; i++) {
            const idx = Math.floor(Math.random() * validSpawnPoints.length);
            const pos = validSpawnPoints[idx];
            const key = new THREE.Mesh(keyGeo, keyMat);
            key.position.set(pos.x, -2, pos.z);
            key.userData = { type: 'key' };
            scene.add(key);
            keysRef.current.push(key);
            const kLight = new THREE.PointLight(0xffd700, 1, 5);
            kLight.position.set(pos.x, -2, pos.z);
            scene.add(kLight);
        }

        // --- LEVEL SWITCH LOGIC ---
        const switchLevel = (newLevel) => {
            currentLevelRef.current = newLevel;

            if (newLevel === 'CORNFIELD') {
                setStatus("EXILED TO THE CORNFIELD.");
                setHint("THEY ONLY MOVE WHEN UNAWARE. WATCH THEM.");
                setSanity(100);

                wallMaterial.map = cornWallTex;
                floorMaterial.map = dirtTex;
                floorMaterial.color.setHex(0x333333);
                wallMaterial.color.setHex(0xaaaaaa);

                ceilingMeshes.forEach(m => m.visible = false);

                scene.background = new THREE.Color(0x555544);
                scene.fog = new THREE.FogExp2(0x555544, 0.04);
                ambientLight.color.setHex(0xaaaaaa);
                ambientLight.intensity = 0.8;

                enemies.forEach(e => {
                    e.material.map = scarecrowTex;
                    e.userData.name = "Scarecrow";
                    e.scale.set(2, 4, 1);
                });

                mazeGroup.children.forEach(c => {
                    if (c.userData.type === 'lantern') c.visible = false;
                });

                const randPt = validSpawnPoints[Math.floor(Math.random() * validSpawnPoints.length)];
                camera.position.set(randPt.x, 0, randPt.z);

                // Clear hint after 5 seconds
                setTimeout(() => setHint(""), 5000);

            }
        };

        // LOOP
        let lastTime = performance.now();
        const animate = () => {
            requestAnimationFrame(animate);

            // Halt if in Menu or Game Over
            if (isInMenu) return; // <-- PAUSE GAME IF IN MENU

            // Handle pending switch
            if (pendingLevelSwitch.current) {
                switchLevel(pendingLevelSwitch.current);
                pendingLevelSwitch.current = null;
            }

            if (jumpScareRef.current || hasWonRef.current) return;

            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // Movement
            if (moveState.current.left) camera.rotation.y += 2 * delta;
            if (moveState.current.right) camera.rotation.y -= 2 * delta;

            const moveForward = moveState.current.forward;
            const moveBackward = moveState.current.backward;

            if (moveForward || moveBackward) {
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                direction.y = 0; direction.normalize();
                if (moveBackward) direction.negate();

                const speed = moveState.current.run ? 12.0 : 5.0; // Sprint Multiplier
                const nextX = camera.position.x + direction.x * speed * delta;
                const nextZ = camera.position.z + direction.z * speed * delta;

                // Improved Collision with Wall Slide
                const gridX = Math.round(nextX / cellSize);
                const gridZ = Math.round(nextZ / cellSize);

                if (grid[gridZ] && grid[gridZ][gridX] === 0) {
                    // No collision, move freely
                    camera.position.x = nextX; camera.position.z = nextZ;
                } else {
                    // Collision! Try sliding.
                    // Try moving only X
                    const currGridZ = Math.round(camera.position.z / cellSize);
                    if (grid[currGridZ] && grid[currGridZ][gridX] === 0) {
                        camera.position.x = nextX;
                    }
                    // Try moving only Z
                    else {
                        const currGridX = Math.round(camera.position.x / cellSize);
                        if (grid[gridZ] && grid[gridZ][currGridX] === 0) {
                            camera.position.z = nextZ;
                        }
                    }
                }

                // Reduced Head Bob (Less shaking, fast bob when running)
                const bobFreq = moveState.current.run ? 15 : 10;
                camera.position.y = Math.sin(time * bobFreq) * 0.05;
            } else {
                // Reset height when stopped
                camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, delta * 5);
            }

            // Social Battery & Switch
            if (moveState.current.smile) {
                if (socialBattery > 0) setSocialBattery(prev => Math.max(0, prev - (15 * delta)));
                else {
                    moveState.current.smile = false;
                    if (currentLevelRef.current === 'PARTY') switchLevel('CORNFIELD');
                }
            } else {
                setSocialBattery(prev => Math.min(100, prev + (2 * delta)));
            }

            // Keys
            keysRef.current.forEach(key => {
                if (key.visible) {
                    key.rotation.y += delta;
                    if (camera.position.distanceTo(key.position) < 2) {
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
                            mazeGroup.add(cake);
                            cakeRef.current = cake;
                            const cLight = new THREE.PointLight(0xff00ff, 2, 8);
                            cLight.position.set(cellSize, 0, cellSize);
                            mazeGroup.add(cLight);

                            setStatus("EXIT OPEN! FIND THE CAKE WHERE YOU STARTED!");
                        }
                    }
                }
            });

            // WIN Check
            if (cakeRef.current) {
                if (camera.position.distanceTo(cakeRef.current.position) < 2.0) {
                    hasWonRef.current = true;
                    setGameOver(true);
                }
            }

            // Enemy Logic
            enemies.forEach(enemy => {
                enemy.lookAt(camera.position.x, enemy.position.y, camera.position.z);
                const dist = enemy.position.distanceTo(camera.position);
                const dirToPlayer = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize();

                const raycaster = new THREE.Raycaster(enemy.position, dirToPlayer, 0, 50);
                const intersects = raycaster.intersectObjects(mazeGroup.children.filter(c => c.isMesh && c.userData.isBorder !== undefined));
                const canSee = (intersects.length === 0 || intersects[0].distance > dist);

                if (currentLevelRef.current === 'PARTY') {
                    if (canSee && dist < 20) {
                        if (moveState.current.smile && socialBattery > 0) enemy.userData.state = 'STARE';
                        else enemy.userData.state = 'CHASE';
                    } else {
                        enemy.userData.state = 'PATROL';
                    }

                    if (enemy.userData.state === 'CHASE') {
                        enemy.position.x += dirToPlayer.x * 6.0 * delta;
                        enemy.position.z += dirToPlayer.z * 6.0 * delta;
                        if (dist < 1.0) {
                            triggerJumpScare(enemy);
                            setTimeout(() => switchLevel('CORNFIELD'), 1000);
                        }
                    } else if (enemy.userData.state === 'PATROL') {
                        enemy.position.x += (Math.random() - 0.5) * 0.2;
                        enemy.position.z += (Math.random() - 0.5) * 0.2;
                    }
                } else {
                    // CORNFIELD
                    const playerDir = new THREE.Vector3();
                    camera.getWorldDirection(playerDir);
                    const angle = playerDir.dot(dirToPlayer);
                    const isLookingAt = (canSee && angle < -0.4);

                    if (isLookingAt) {
                        enemy.userData.state = 'FROZEN';
                    } else {
                        enemy.userData.state = 'RUSH';
                        enemy.position.x += dirToPlayer.x * 12.0 * delta;
                        enemy.position.z += dirToPlayer.z * 12.0 * delta;

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

            if (audioRef.current) {
                const now = audioRef.current.ctx.currentTime;
                audioRef.current.osc.frequency.setValueAtTime(100, now);
                audioRef.current.osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
                audioRef.current.gain.gain.setValueAtTime(1, now);
                audioRef.current.gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            }
            setStatus(currentLevelRef.current === 'PARTY' ? "RUDE! EXILE IMMINENT!" : "CONSUMED BY THE CORN.");
            if (enemy) {
                const randPt = validSpawnPoints[Math.floor(Math.random() * validSpawnPoints.length)];
                enemy.position.set(randPt.x, 0, randPt.z);
            }
            setTimeout(() => { jumpScareRef.current = false; }, 2000);
        };

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (containerRef.current && renderer.domElement) containerRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };

    }, [audioEnabled, isInMenu]); // Added isInMenu dep

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

            {/* MAIN MENU STAGE SELECT (NEW) */}
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
