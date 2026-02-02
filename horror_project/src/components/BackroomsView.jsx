import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Skull, Eye, Volume2, VolumeX, AlertCircle, ArrowLeft, Move, Info, Key, HelpCircle, Play, Wheat, Mountain } from 'lucide-react';

// --- PROCEDURAL 3D ASSETS ---

const createScarecrow = () => {
    const group = new THREE.Group();

    // Scaling Up significantly (2x Base)
    const baseScale = 2.0;
    group.scale.set(baseScale, baseScale, baseScale);

    // Post (Elongated)
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 1 });
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 6, 0.15), woodMat);
    post.position.y = 3.0;
    group.add(post);

    // Crossbar
    const crossbar = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.15, 0.15), woodMat);
    crossbar.position.y = 4.8;
    crossbar.rotation.z = (Math.random() - 0.5) * 0.4;
    group.add(crossbar);

    // Head (Burlap Sack - Blocky)
    const sackMat = new THREE.MeshStandardMaterial({ color: 0xc2b280, roughness: 1 });
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.7), sackMat); // Bigger head
    head.position.y = 5.4;
    group.add(head);

    // Eyes (X Shape)
    const xMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const xGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.4);

    const createEye = (x, y, z) => {
        const eyeGroup = new THREE.Group();
        eyeGroup.position.set(x, y, z);
        const line1 = new THREE.Mesh(xGeo, xMat);
        const line2 = new THREE.Mesh(xGeo, xMat);
        line1.rotation.z = Math.PI / 4;
        line2.rotation.z = -Math.PI / 4;
        eyeGroup.add(line1);
        eyeGroup.add(line2);
        return eyeGroup;
    };

    group.add(createEye(-0.2, 5.45, 0.36));
    group.add(createEye(0.2, 5.45, 0.36));

    // Stitched Smile
    const smileCurve = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 8, Math.PI), xMat);
    smileCurve.rotation.x = Math.PI;
    smileCurve.position.set(0, 5.2, 0.36);
    group.add(smileCurve);

    // Tattered Coat (Longer)
    const clothGeo = new THREE.ConeGeometry(1.2, 4.5, 5, 1, true);
    const clothMat = new THREE.MeshStandardMaterial({ color: 0x4a3c31, side: THREE.DoubleSide, roughness: 1 });
    const coat = new THREE.Mesh(clothGeo, clothMat);
    coat.position.y = 3.2;
    coat.scale.z = 0.5;
    group.add(coat);

    return group;
};

const createCornStalk = () => {
    const group = new THREE.Group();
    const stalkGeo = new THREE.CylinderGeometry(0.05, 0.1, 4, 5);
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x556b2f, roughness: 0.8 });
    const stalk = new THREE.Mesh(stalkGeo, greenMat);
    stalk.position.y = 0;
    group.add(stalk);

    const leafGeo = new THREE.PlaneGeometry(0.3, 1.5);
    leafGeo.translate(0, 0.75, 0);
    for (let i = 0; i < 4; i++) {
        const leaf = new THREE.Mesh(leafGeo, greenMat);
        leaf.position.y = (Math.random() * 2) - 1;
        leaf.rotation.y = Math.random() * Math.PI * 2;
        leaf.rotation.z = Math.PI / 4;
        group.add(leaf);
    }
    const scale = 0.8 + Math.random() * 0.4;
    group.scale.set(scale, scale, scale);
    return group;
};

const createRuinsColumn = () => {
    const group = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 });
    const vineMat = new THREE.MeshStandardMaterial({ color: 0x228822, roughness: 1.0 });

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 1.5), stoneMat);
    base.position.y = 0.5;
    group.add(base);

    // Column Segments
    const height = 2 + Math.random() * 4;
    const segments = Math.floor(height);
    for (let i = 0; i < segments; i++) {
        const geo = new THREE.CylinderGeometry(0.6, 0.6, 1, 8);
        const seg = new THREE.Mesh(geo, stoneMat);
        seg.position.y = 1.5 + i;
        seg.position.x = (Math.random() - 0.5) * 0.1;
        seg.position.z = (Math.random() - 0.5) * 0.1;
        seg.rotation.y = Math.random() * Math.PI;
        group.add(seg);

        if (Math.random() > 0.6) {
            const vine = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.05, 4, 6), vineMat);
            vine.rotation.x = Math.PI / 2;
            vine.position.y = 1.5 + i;
            vine.rotation.z = (Math.random() - 0.5);
            group.add(vine);
        }
    }

    if (Math.random() > 0.3) {
        const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 1.6), stoneMat);
        top.position.y = 1.5 + segments;
        top.rotation.z = (Math.random() - 0.5) * 0.2;
        group.add(top);
    }

    return group;
};


const BackroomsView = ({ onExit }) => {
    const containerRef = useRef();
    const [sanity, setSanity] = useState(100);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [status, setStatus] = useState("AWAITING INPUT...");
    const [hint, setHint] = useState("");
    const [keysCollected, setKeysCollected] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [socialBattery, setSocialBattery] = useState(100);
    const [isInMenu, setIsInMenu] = useState(true);

    const audioRef = useRef(null);
    const keysRef = useRef([]);
    const collectedKeysRef = useRef(0);
    const jumpScareRef = useRef(false);
    const currentLevelRef = useRef('PARTY');
    const hasWonRef = useRef(false);
    const cakeRef = useRef(null);

    const sceneRef = useRef(null);
    const enemiesRef = useRef([]);
    const partyGroupRef = useRef(new THREE.Group());
    const cornfieldGroupRef = useRef(new THREE.Group());
    const ruinsGroupRef = useRef(new THREE.Group());

    const moveState = useRef({
        forward: false, backward: false, left: false, right: false,
        smile: false, run: false
    });

    const cellSize = 10;
    const validSpawnPoints = useRef([]);

    // Check local storage for high score? Nah, Keep it simple.

    // Spawn Lists
    const partySpawns = useRef([]);
    const cornSpawns = useRef([]);
    const ruinsSpawns = useRef([]);

    // --- AUDIO SYSTEM ---
    const initAudio = () => {
        if (audioRef.current) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        const droneOsc = ctx.createOscillator();
        droneOsc.type = 'sawtooth';
        droneOsc.frequency.value = 50;
        const droneGain = ctx.createGain();
        droneGain.gain.value = 0.1;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        droneOsc.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(ctx.destination);
        droneOsc.start();

        const screamOsc = ctx.createOscillator();
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
    const pendingLevelSwitch = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Pointer Lock & Mouse Look
        document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock;
        const handleClick = () => {
            if (!isInMenu && !gameOver) containerRef.current.requestPointerLock();
        };
        const handleMouseMove = (e) => {
            if (document.pointerLockElement === containerRef.current) {
                // Standard FPS: Y-axis is Yaw (World Up), X-axis is Pitch (Local Right)
                sceneRef.current.camera.rotation.y -= e.movementX * 0.002;
                sceneRef.current.camera.rotation.x -= e.movementY * 0.002;
                // Clamp Pitch
                sceneRef.current.camera.rotation.x = Math.max(-1.5, Math.min(1.5, sceneRef.current.camera.rotation.x));
                // Ensure Z is 0 (No roll)
                sceneRef.current.camera.rotation.z = 0;
                // NOTE: ThreeJS camera rotation order is usually XYZ, which might cause gimbal lock issues if we aren't careful.
                // Ideally we use a Pitch Object and a Yaw Object.
                // For simplicity in this quick implementation, direct rotation is often "Okay" if Z is locked, 
                // but proper FPS uses: PlayerObject(Yaw) -> Camera(Pitch).
                // Let's stick to direct camera manipulation but force order YXZ to fix gimbal lock.
                sceneRef.current.camera.rotation.order = "YXZ";
            }
        };

        const handleKeyDown = (e) => {
            switch (e.code) {
                case 'KeyW': moveState.current.forward = true; break;
                case 'KeyS': moveState.current.backward = true; break;
                case 'KeyA': moveState.current.left = true; break; // Strafe Left
                case 'KeyD': moveState.current.right = true; break; // Strafe Right
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
        document.addEventListener('mousemove', handleMouseMove);
        containerRef.current.addEventListener('click', handleClick);

        // INIT THREE
        const baseUrl = import.meta.env.BASE_URL;
        const textureLoader = new THREE.TextureLoader();
        const partyWallTex = textureLoader.load(`${baseUrl}images/party_wallpaper.png`);
        const partyCarpetTex = textureLoader.load(`${baseUrl}images/carpet.png`);
        const dirtTex = textureLoader.load(`${baseUrl}images/dirt_ground.png`);
        const hostTex = textureLoader.load(`${baseUrl}images/host.png`);
        const cakeTex = textureLoader.load(`${baseUrl}images/cake.png`);

        partyWallTex.wrapS = partyWallTex.wrapT = THREE.RepeatWrapping;
        partyCarpetTex.wrapS = partyCarpetTex.wrapT = THREE.RepeatWrapping;
        dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping;
        partyCarpetTex.repeat.set(4, 4);
        dirtTex.repeat.set(4, 4);
        hostTex.magFilter = THREE.NearestFilter;
        cakeTex.magFilter = THREE.NearestFilter;

        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.rotation.order = "YXZ"; // Not scene, camera needs this.

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.rotation.order = "YXZ"; // Critical for FPS
        sceneRef.current.camera = camera; // Hack to access in MouseMove

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.1) saturate(1.2);';
        containerRef.current.appendChild(renderer.domElement);

        const partyMat = new THREE.MeshStandardMaterial({ map: partyWallTex, color: 0xffffff, roughness: 0.5 });
        const carpetMat = new THREE.MeshStandardMaterial({ map: partyCarpetTex, color: 0x554433, roughness: 1.0 });
        const dirtMat = new THREE.MeshStandardMaterial({ map: dirtTex, color: 0x333333, roughness: 1.0 });
        const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x221100 });
        const stoneFloorMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.8 });

        // GROUPS
        partyGroupRef.current = new THREE.Group();
        cornfieldGroupRef.current = new THREE.Group();
        ruinsGroupRef.current = new THREE.Group();
        cornfieldGroupRef.current.visible = false;
        ruinsGroupRef.current.visible = false;
        scene.add(partyGroupRef.current);
        scene.add(cornfieldGroupRef.current);
        scene.add(ruinsGroupRef.current);

        // --- GRID GENERATION ---
        // 12x12 Maze Data
        const mazeGrid = [
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
        ];

        const wallGeo = new THREE.BoxGeometry(cellSize, 12, cellSize);
        const floorGeo = new THREE.PlaneGeometry(cellSize, cellSize);

        mazeGrid.forEach((row, r) => {
            row.forEach((cell, c) => {
                const x = c * cellSize;
                const z = r * cellSize;

                // --- PARTY BUILD ---
                const pFloor = new THREE.Mesh(floorGeo, carpetMat);
                pFloor.rotation.x = -Math.PI / 2;
                pFloor.position.set(x, -4, z);
                partyGroupRef.current.add(pFloor);
                const pCeil = new THREE.Mesh(floorGeo, ceilingMat);
                pCeil.rotation.x = Math.PI / 2;
                pCeil.position.set(x, 4, z);
                partyGroupRef.current.add(pCeil);

                if (cell === 1) {
                    const wall = new THREE.Mesh(wallGeo, partyMat);
                    wall.position.set(x, 0, z);
                    wall.userData = { isBorder: true };
                    partyGroupRef.current.add(wall);
                } else {
                    partySpawns.current.push({ x, z });
                    if (Math.random() > 0.9) {
                        const l = new THREE.PointLight(0xffaa00, 1, 10);
                        l.position.set(x, 2, z);
                        partyGroupRef.current.add(l);
                    }
                }

                // --- CORNFIELD BUILD ---
                const cFloor = new THREE.Mesh(floorGeo, dirtMat);
                cFloor.rotation.x = -Math.PI / 2;
                cFloor.position.set(x, -4, z);
                cornfieldGroupRef.current.add(cFloor);

                if (cell === 1) {
                    for (let i = 0; i < 8; i++) {
                        const stalk = createCornStalk();
                        stalk.position.set(x + (Math.random() - 0.5) * 8, -4, z + (Math.random() - 0.5) * 8);
                        cornfieldGroupRef.current.add(stalk);
                    }
                    const cColl = new THREE.Mesh(wallGeo, new THREE.MeshBasicMaterial({ visible: false }));
                    cColl.position.set(x, 0, z);
                    cColl.userData = { isBorder: true };
                    cornfieldGroupRef.current.add(cColl);
                } else {
                    cornSpawns.current.push({ x, z });
                }
            });
        });

        // --- RUINS BUILD ---
        const ruinsSize = 20;
        const ruinsCell = 15;
        for (let r = 0; r < ruinsSize; r++) {
            for (let c = 0; c < ruinsSize; c++) {
                const x = c * ruinsCell;
                const z = r * ruinsCell;

                const rFloor = new THREE.Mesh(new THREE.PlaneGeometry(ruinsCell, ruinsCell), stoneFloorMat);
                rFloor.rotation.x = -Math.PI / 2;
                rFloor.position.set(x, -4, z);
                rFloor.rotation.x += (Math.random() - 0.5) * 0.05;
                rFloor.rotation.y += (Math.random() - 0.5) * 0.05;
                ruinsGroupRef.current.add(rFloor);

                const isEdge = r === 0 || r === ruinsSize - 1 || c === 0 || c === ruinsSize - 1;
                const isObstacle = Math.random() > 0.8;

                if (isEdge || isObstacle) {
                    if (Math.random() > 0.5) {
                        const col = createRuinsColumn();
                        col.position.set(x, -3.5, z);
                        col.scale.set(1.5, 1.5, 1.5);
                        ruinsGroupRef.current.add(col);

                        const rColl = new THREE.Mesh(new THREE.BoxGeometry(2, 10, 2), new THREE.MeshBasicMaterial({ visible: false }));
                        rColl.position.set(x, 0, z);
                        rColl.userData = { isBorder: true };
                        ruinsGroupRef.current.add(rColl);
                    } else {
                        const w = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 8), stoneMat);
                        w.position.set(x, -3, z);
                        w.rotation.y = Math.random();
                        ruinsGroupRef.current.add(w);
                        w.userData = { isBorder: true };
                    }
                } else {
                    ruinsSpawns.current.push({ x, z });
                }
            }
        }


        // LIGHTING (Daylight Boost)
        const ambientLight = new THREE.AmbientLight(0xffaa00, 1.0); // BRIGHT
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
        sunLight.position.set(50, 100, 50);
        scene.add(sunLight);

        // Flashlight (Ultra Bright)
        const flashlight = new THREE.SpotLight(0xffddaa, 8.0, 120, Math.PI / 3, 0.4, 1);
        flashlight.position.set(0, 0, 0);
        flashlight.target.position.set(0, 0, -1);
        camera.add(flashlight);
        camera.add(flashlight.target);
        scene.add(camera);

        camera.position.set(cellSize, 0, cellSize);

        // KEYS
        const keyGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16);
        const keyMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        const spawnKeys = (list, group) => {
            for (let i = 0; i < 3; i++) {
                if (list.length === 0) return;
                const pt = list[Math.floor(Math.random() * list.length)];
                const k = new THREE.Mesh(keyGeo, keyMat);
                k.position.set(pt.x, -2, pt.z);
                k.userData = { type: 'key' };
                group.add(k);
                const l = new THREE.PointLight(0xffd700, 2, 8);
                l.position.set(pt.x, -2, pt.z);
                group.add(l);
                keysRef.current.push(k);
            }
        };
        spawnKeys(partySpawns.current, partyGroupRef.current);
        spawnKeys(cornSpawns.current, cornfieldGroupRef.current);
        spawnKeys(ruinsSpawns.current, ruinsGroupRef.current);

        // ENEMIES (BIGGER & SCARIER)
        const spawnMob = (type, list, group) => {
            if (list.length === 0) return;
            const pt = list[Math.floor(Math.random() * list.length)];
            let mob;
            if (type === 'HOST') {
                const mat = new THREE.SpriteMaterial({ map: hostTex, transparent: true });
                mob = new THREE.Sprite(mat);
                mob.scale.set(3.0, 7.0, 1); // Bigger Host
                mob.userData = { type, state: 'PATROL', level: 'PARTY', spawnY: 0 };
            } else if (type === 'SCARECROW') {
                mob = createScarecrow();
                mob.userData = { type, state: 'FROZEN', level: 'CORNFIELD', spawnY: 0 };
            } else {
                // RUINS MINOTAUR (GIANT)
                mob = new THREE.Group();
                const body = new THREE.Mesh(new THREE.BoxGeometry(3, 7, 3), new THREE.MeshStandardMaterial({ color: 0x550000, roughness: 0.5 })); // HUGE
                body.position.y = -0.5;
                mob.add(body);

                const head = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2.5), new THREE.MeshStandardMaterial({ color: 0x330000 }));
                head.position.set(0, 3.5, 0.5);
                mob.add(head);

                const horn = new THREE.Mesh(new THREE.ConeGeometry(0.3, 2), new THREE.MeshBasicMaterial({ color: 0xffffff }));
                horn.position.set(0.8, 4.5, 0.5); horn.rotation.z = -0.5;
                mob.add(horn.clone());
                horn.position.set(-0.8, 4.5, 0.5); horn.rotation.z = 0.5;
                mob.add(horn);

                mob.scale.set(1.5, 1.5, 1.5); // 1.5x Multiplier on top of Giant Geo
                mob.userData = { type, state: 'CHASE', level: 'RUINS', spawnY: 2 };
            }
            mob.position.set(pt.x, mob.userData.spawnY, pt.z);
            group.add(mob);
            enemiesRef.current.push(mob);
        };
        spawnMob('HOST', partySpawns.current, partyGroupRef.current);
        spawnMob('SCARECROW', cornSpawns.current, cornfieldGroupRef.current);
        spawnMob('MINOTAUR', ruinsSpawns.current, ruinsGroupRef.current);

        // --- LEVEL SWITCH ---
        const handleSwitchLevel = (newLevel) => {
            currentLevelRef.current = newLevel;
            partyGroupRef.current.visible = false;
            cornfieldGroupRef.current.visible = false;
            ruinsGroupRef.current.visible = false;

            if (newLevel === 'PARTY') {
                setStatus("Objective: Find 3 Gifts");
                setHint("");
                scene.background = new THREE.Color(0x332200);
                scene.fog = new THREE.FogExp2(0x443300, 0.02);
                ambientLight.color.setHex(0xffaa00);
                ambientLight.intensity = 0.8;
                partyGroupRef.current.visible = true;
                camera.position.set(partySpawns.current[0].x, 0, partySpawns.current[0].z);
            }
            else if (newLevel === 'CORNFIELD') {
                setStatus("EXILED.");
                setHint("DON'T BLINK.");
                scene.background = new THREE.Color(0x887766);
                scene.fog = new THREE.FogExp2(0x887766, 0.02);
                ambientLight.color.setHex(0xffeedd);
                ambientLight.intensity = 1.0;
                cornfieldGroupRef.current.visible = true;
                const pt = cornSpawns.current[Math.floor(Math.random() * cornSpawns.current.length)];
                camera.position.set(pt.x, 0, pt.z);
            }
            else if (newLevel === 'RUINS') {
                setStatus("THE SANCTUARY.");
                setHint("THE SKY IS WATCHING.");
                scene.background = new THREE.Color(0x87CEEB);
                scene.fog = new THREE.FogExp2(0xeeeeee, 0.005);
                ambientLight.color.setHex(0xffffff);
                ambientLight.intensity = 1.2;
                ruinsGroupRef.current.visible = true;
                const pt = ruinsSpawns.current[Math.floor(Math.random() * ruinsSpawns.current.length)];
                camera.position.set(pt.x, 0, pt.z);
            }
        };

        // LOOP
        let lastTime = performance.now();
        const animate = () => {
            requestAnimationFrame(animate);
            if (isInMenu) return;

            if (pendingLevelSwitch.current) {
                handleSwitchLevel(pendingLevelSwitch.current);
                pendingLevelSwitch.current = null;
            }

            if (jumpScareRef.current || hasWonRef.current) return;

            const time = performance.now();
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            // MOVEMENT (FPS Style)
            const forward = moveState.current.forward ? 1 : 0;
            const backward = moveState.current.backward ? 1 : 0;
            const left = moveState.current.left ? 1 : 0;
            const right = moveState.current.right ? 1 : 0;

            if (forward || backward || left || right) {
                const speed = moveState.current.run ? 16.0 : 8.0; // Faster Sprint

                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                direction.y = 0; direction.normalize();

                const sideDir = new THREE.Vector3();
                sideDir.crossVectors(camera.up, direction).normalize(); // Points Right? Or Left? 
                // ThreeJS: Up(0,1,0) x Dir(0,0,-1) = (-1,0,0) -> Right is -1?
                // Standard Right Rule: Index(Up) x Middle(Fwd) -> Thumb(Right).
                // Let's just try: if 'A' goes wrong way, flip sign.
                // Usually Cross(Dir, Up) = Right. Cross(Up, Dir) = Left.
                // So sideDir is LEFT.

                const moveVec = new THREE.Vector3();
                if (forward) moveVec.add(direction);
                if (backward) moveVec.sub(direction);
                if (left) moveVec.add(sideDir);    // Add Left
                if (right) moveVec.sub(sideDir);   // Sub Left = Right

                moveVec.normalize();

                const nextX = camera.position.x + moveVec.x * speed * delta;
                const nextZ = camera.position.z + moveVec.z * speed * delta;

                // Collision
                let activeGroup = partyGroupRef.current;
                if (currentLevelRef.current === 'CORNFIELD') activeGroup = cornfieldGroupRef.current;
                if (currentLevelRef.current === 'RUINS') activeGroup = ruinsGroupRef.current;

                let collided = false;
                if (currentLevelRef.current === 'RUINS') {
                    // Ruins Collision
                    activeGroup.children.forEach(c => {
                        if (c.userData.isBorder) {
                            const dx = Math.abs(c.position.x - nextX);
                            const dz = Math.abs(c.position.z - nextZ);
                            if (dx < 2.5 && dz < 2.5) collided = true;
                        }
                    });
                } else {
                    // Grid Collision
                    const gridX = Math.round(nextX / cellSize);
                    const gridZ = Math.round(nextZ / cellSize);
                    if (mazeGrid[gridZ] && mazeGrid[gridZ][gridX] === 1) collided = true;
                }

                if (!collided) {
                    camera.position.x = nextX;
                    camera.position.z = nextZ;
                }

                const bobFreq = moveState.current.run ? 18 : 10;
                camera.position.y = Math.sin(time * bobFreq) * 0.15;
            }

            // Keys
            keysRef.current.forEach(k => {
                if (k.visible && k.parent.visible) {
                    k.rotation.y += delta;
                    if (camera.position.distanceTo(k.position) < 3.0) {
                        k.visible = false;
                        collectedKeysRef.current++;
                        setKeysCollected(c => c + 1);
                        if (collectedKeysRef.current === 3 && !cakeRef.current) {
                            setStatus("EXIT REVEALED.");
                            const cake = new THREE.Sprite(new THREE.SpriteMaterial({ map: cakeTex }));
                            cake.scale.set(3, 3, 1);
                            cake.position.set(camera.position.x + 5, 0, camera.position.z + 5);
                            if (currentLevelRef.current === 'PARTY') partyGroupRef.current.add(cake);
                            if (currentLevelRef.current === 'CORNFIELD') cornfieldGroupRef.current.add(cake);
                            if (currentLevelRef.current === 'RUINS') ruinsGroupRef.current.add(cake);
                            cakeRef.current = cake;
                        }
                    }
                }
            });

            if (cakeRef.current && camera.position.distanceTo(cakeRef.current.position) < 2.0) {
                hasWonRef.current = true;
                setGameOver(true);
            }

            // ENEMIES & ANIMATION
            enemiesRef.current.forEach(e => {
                if (e.userData.level !== currentLevelRef.current) return;
                const dist = e.position.distanceTo(camera.position);

                // ANIMATION
                if (e.userData.type === 'SCARECROW') {
                    // Twitch
                    e.rotation.z = Math.sin(time * 20) * 0.1; // Fast jitter
                    e.rotation.x = Math.sin(time * 15) * 0.05;
                } else if (e.userData.type === 'MINOTAUR') {
                    // Heave / Breathe
                    const s = 1.5 + Math.sin(time * 3) * 0.1;
                    e.scale.set(s, s, s);
                }

                // CHASE
                if (dist < 40) { // Increased Aggro Range
                    const dir = new THREE.Vector3().subVectors(camera.position, e.position).normalize();
                    dir.y = 0;

                    const spd = e.userData.type === 'SCARECROW' ? 14 : (e.userData.type === 'MINOTAUR' ? 9 : 6);
                    e.position.addScaledVector(dir, spd * delta);

                    // Look at player
                    if (e.userData.type !== 'HOST') e.lookAt(camera.position.x, e.position.y, camera.position.z);

                    if (dist < 1.5) { // Increased hit radius for big mobs
                        jumpScareRef.current = true;
                        setStatus("CAUGHT");
                        setTimeout(() => window.location.reload(), 2000);
                    }
                }
            });

            renderer.render(scene, camera);
        };
        const aniId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(aniId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('mousemove', handleMouseMove);
            if (containerRef.current) containerRef.current.innerHTML = '';
            renderer.dispose();
            if (audioRef.current) audioRef.current.ctx.close();
        };

    }, [isInMenu]);

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
                            <div className="text-sm text-yellow-300 text-right mt-2 w-48">
                                CLICK SCREEN TO ENABLE MOUSE LOOK
                            </div>
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
                        <button onClick={() => startGame('PARTY')} className="px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer">
                            <div className="flex flex-col items-center gap-4">
                                <Play className="w-12 h-12 text-yellow-500" />
                                <span className="text-2xl font-bold">LEVEL 21</span>
                            </div>
                        </button>
                        <button onClick={() => startGame('CORNFIELD')} className="px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer">
                            <div className="flex flex-col items-center gap-4">
                                <Wheat className="w-12 h-12 text-red-700" />
                                <span className="text-2xl font-bold">LEVEL 10</span>
                            </div>
                        </button>
                        <button onClick={() => startGame('RUINS')} className="px-8 py-6 border-2 border-cyan-800 bg-black hover:bg-cyan-950 transition-all cursor-pointer">
                            <div className="flex flex-col items-center gap-4">
                                <Mountain className="w-12 h-12 text-cyan-500" />
                                <span className="text-2xl font-bold">THE RUINS</span>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* Victory / Game Over Overlay */}
            {(gameOver || jumpScareRef.current) && !isInMenu && (
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center ${gameOver ? 'bg-yellow-900' : 'bg-red-600'} mix-blend-multiply transition-opacity duration-1000`}>
                    {gameOver ? (
                        <div className="text-center animate-bounce">
                            <h1 className="text-9xl font-black text-yellow-100 mb-8">SURVIVED</h1>
                            <button onClick={() => window.location.reload()} className="mt-12 px-8 py-4 bg-yellow-600 text-black font-bold">REPLAY</button>
                        </div>
                    ) : (
                        <h1 className="text-9xl font-black text-black animate-ping">CAUGHT!</h1>
                    )}
                </div>
            )}

            <div className="absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto">
                <button onClick={onExit} className="flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold">ABORT <ArrowLeft className="w-4 h-4" /></button>
            </div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion" />
        </div>
    );
};

export default BackroomsView;
