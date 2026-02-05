```
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EntropySystem } from './EntropySystem.js';
import { HeatSystem } from './HeatSystem.js';
import { FalloutSystem } from './FalloutSystem.js';
import { VillageSystem } from './VillageSystem.js';
import { GatheringSystem } from './GatheringSystem.js';
import { MoltbookAgent } from './MoltbookAgent.js';

// --- CONFIGURATION ---
const CONFIG = {
    colors: {
        skyTop: 0x000022,
        skyBottom: 0xff003c, // Cyberpunk red tint
        fog: 0x050510,
        ground: 0x111111,
        grid: 0x00f3ff
    },
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.fog);
    scene.fog = new THREE.FogExp2(CONFIG.colors.fog, 0.02);

    // 2. Camera Setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // 3. Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true }); // Clean edges
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(50, 50, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    // Point lights for atmosphere
    const pointLightP = new THREE.PointLight(0x00f3ff, 2, 50);
    pointLightP.position.set(0, 5, 0);
    scene.add(pointLightP);

    // 5. Environment (Skybox & Ground)
    createDetailedEnvironment();

    // 6. Player Setup
    createPlayer();

    // 6.5 Entropy & Fallout Systems
    window.heatSys = new HeatSystem();
    entropySys = new EntropySystem();
    falloutSys = new FalloutSystem(scene);
    
    villageSys = new VillageSystem(scene);
    villageSys.init();

    gatherSys = new GatheringSystem(scene);
    gatherSys.init();
    
    // Globals for convenience
    window.entropySys = entropySys;
    window.gatherSys = gatherSys;

    // 6.6 Moltbook Agent
    moltAgent = new MoltbookAgent(scene, new THREE.Vector3(10, 5, 10)); // Spawn near start

    // 7. Creatures (Osamu Sato Style)
    createPsychedelicCreatures();

    // 8. Controls & Events
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; // Prevent going below ground

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('keydown', (e) => {
        keyState[e.code] = true;
    });
    document.addEventListener('keyup', (e) => keyState[e.code] = false);

    clock = new THREE.Clock();

    // Start Loop
    animate();
}

function createDetailedEnvironment() {
    // 1. SKY & ATMOSPHERE
    // "Galaxy Moon" aesthetic
    const moonGeo = new THREE.SphereGeometry(20, 32, 32);
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffcc });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.position.set(0, 50, -100);
    scene.add(moon);

    // Moon Glow
    const moonLight = new THREE.PointLight(0xaaaaff, 0.5, 200);
    moonLight.position.set(0, 50, -80);
    scene.add(moonLight);

    // 2. GROUND (Cobblestone-ish)
    const geometry = new THREE.PlaneGeometry(CONFIG.worldSize, CONFIG.worldSize, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.2,
        roughness: 0.8,
        wireframe: false
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 3. PROCEDURAL GOTHIC BUILDINGS
    const buildingMat = new THREE.MeshStandardMaterial({ color: 0x2a2a35, roughness: 0.9 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x151520, roughness: 0.9 });
    const windowMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 2 });

    for (let i = 0; i < 80; i++) {
        const x = (Math.random() - 0.5) * CONFIG.worldSize * 0.9;
        const z = (Math.random() - 0.5) * CONFIG.worldSize * 0.9;

        // Clear center area for spawn
        if (Math.abs(x) < 15 && Math.abs(z) < 15) continue;

        const width = Math.random() * 4 + 3;
        const depth = Math.random() * 4 + 3;
        const height = Math.random() * 15 + 10;

        const bGroup = new THREE.Group();
        bGroup.position.set(x, 0, z);

        // Main Body
        const bodyGeo = new THREE.BoxGeometry(width, height, depth);
        const body = new THREE.Mesh(bodyGeo, buildingMat);
        body.position.y = height / 2;
        body.castShadow = true;
        body.receiveShadow = true;
        bGroup.add(body);

        // Roof (Pyramid)
        const roofHeight = 5;
        const roofGeo = new THREE.ConeGeometry(Math.max(width, depth) * 0.8, roofHeight, 4);
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.y = height + roofHeight / 2;
        roof.rotation.y = Math.PI / 4;
        bGroup.add(roof);

        // Windows
        for (let w = 0; w < 4; w++) {
            if (Math.random() > 0.5) continue;
            const winGeo = new THREE.PlaneGeometry(1, 2);
            const win = new THREE.Mesh(winGeo, windowMat);

            if (Math.random() > 0.5) {
                win.position.set(0, (Math.random() * height * 0.6) + 2, depth / 2 + 0.1);
            } else {
                win.position.set(width / 2 + 0.1, (Math.random() * height * 0.6) + 2, 0);
                win.rotation.y = Math.PI / 2;
            }
            bGroup.add(win);
        }

        scene.add(bGroup);
    }

    // 4. PIPES & BLOCKS
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x00aa00, roughness: 0.2, metalness: 0.5 });
    for (let i = 0; i < 8; i++) {
        const pipeGroup = new THREE.Group();
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 4, 32), pipeMat);
        tube.position.y = 2;
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 1, 32), pipeMat);
        rim.position.y = 3.5;

        pipeGroup.add(tube);
        pipeGroup.add(rim);

        pipeGroup.position.set(
            (Math.random() - 0.5) * 60,
            0,
            (Math.random() - 0.5) * 60
        );
        if (pipeGroup.position.length() < 10) pipeGroup.position.x += 20;

        pipeGroup.traverse(c => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
        scene.add(pipeGroup);
    }

    // Floating Blocks & Coins
    const blockMat = new THREE.MeshStandardMaterial({ color: 0xcc5500, metalness: 0.4 });
    const qBlockMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xaa8800, emissiveIntensity: 2 });
    const coinMat = new THREE.MeshStandardMaterial({ color: 0xffff00, metalness: 1, roughness: 0.2, emissive: 0xaa8800, emissiveIntensity: 1 });

    for (let i = 0; i < 40; i++) {
        const type = Math.random();
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 80,
            Math.random() * 10 + 5,
            (Math.random() - 0.5) * 80
        );

        if (type > 0.6) {
            const block = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), blockMat);
            block.position.copy(pos);
            block.castShadow = true;
            scene.add(block);
        } else if (type > 0.3) {
            const qBlock = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), qBlockMat);
            qBlock.position.copy(pos);
            qBlock.castShadow = true;
            const qLight = new THREE.PointLight(0xffaa00, 1, 10);
            qLight.position.copy(pos);
            scene.add(qLight);
            scene.add(qBlock);
        } else {
            const coin = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.2, 16), coinMat);
            coin.rotation.x = Math.PI / 2;
            coin.position.copy(pos);
            coin.userData = { isCoin: true, rotSpeed: Math.random() * 2 + 1 };
            scene.add(coin);
        }
    }

    // 5. PARTICLES (Reduced/Cleaned)
    const particleCount = 500;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 150;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.2,
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);
}

function createPsychedelicCreatures() {
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 15, -40);

    const headGeo = new THREE.SphereGeometry(6, 32, 32);
    const headMat = new THREE.MeshStandardMaterial({
        color: 0xffff00,
        emissive: 0xaa00aa,
        emissiveIntensity: 0.5,
        roughness: 0.2
    });
    const head = new THREE.Mesh(headGeo, headMat);
    headGroup.add(head);

    const eyeGeo = new THREE.SphereGeometry(1.5, 16, 16);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-2.5, 1, 5);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(2.5, 1, 5);
    headGroup.add(rightEye);

    const mouthGeo = new THREE.TorusKnotGeometry(1, 0.3, 64, 8);
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, -3, 5);
    headGroup.add(mouth);

    for (let i = 0; i < 12; i++) {
        const wingGeo = new THREE.BoxGeometry(20, 0.5, 4);
        const wingMat = new THREE.MeshStandardMaterial({ color: 0xff003c, emissive: 0xff003c, emissiveIntensity: 0.5 });
        const wing = new THREE.Mesh(wingGeo, wingMat);
        wing.position.set(0, 0, -2);
        wing.rotation.z = (Math.PI / 6) * i;
        wing.userData = { isWing: true, initRot: (Math.PI / 6) * i, index: i };
        headGroup.add(wing);
    }

    headGroup.userData = { isCreature: true, speed: 0.5 };
    scene.add(headGroup);

    const watcherGeo = new THREE.SphereGeometry(1, 16, 16);
    const watcherMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const irisGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const irisMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    for (let i = 0; i < 20; i++) {
        const wrapper = new THREE.Group();
        const eye = new THREE.Mesh(watcherGeo, watcherMat);
        const iris = new THREE.Mesh(irisGeo, irisMat);
        iris.position.set(0, 0, 0.8);
        wrapper.add(eye);
        wrapper.add(iris);

        wrapper.position.set(
            (Math.random() - 0.5) * 100,
            Math.random() * 20 + 5,
            (Math.random() - 0.5) * 100
        );

        wrapper.lookAt(0, 0, 0);
        wrapper.userData = { isWatcher: true, bobOffset: Math.random() * 100 };
        scene.add(wrapper);
    }
}

function createPlayer() {
    // ADVANCED HUMANOID RIG (Capsule/Sphere Blending)
    player = new THREE.Group();
    player.position.y = 0;

    // Materials
    const armorColor = 0xe0e0e0; // White armor
    const jointColor = 0x222222; // Dark inner suit
    const visorColor = 0x00f3ff; // Cyan glowing visor

    // Smooth shading materials
    const skinMat = new THREE.MeshStandardMaterial({
        color: armorColor,
        roughness: 0.4,
        metalness: 0.5
    });
    const jointMat = new THREE.MeshStandardMaterial({
        color: jointColor,
        roughness: 0.7
    });
    const visorMat = new THREE.MeshStandardMaterial({
        color: visorColor,
        emissive: visorColor,
        emissiveIntensity: 3
    });

    // --- SKELETAL HIERARCHY ---

    // 1. PELVIS (Root of the body)
    // Using a sphere to act as the central joint
    const pelvisGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const pelvis = new THREE.Mesh(pelvisGeo, jointMat);
    pelvis.position.y = 1.0; // Hip height
    pelvis.castShadow = true;
    player.add(pelvis);

    // 2. TORSO (Capsule)
    const torsoGeo = new THREE.CapsuleGeometry(0.35, 0.7, 4, 16);
    const torso = new THREE.Mesh(torsoGeo, skinMat);
    torso.position.y = 0.5; // Offset from pelvis UP
    pelvis.add(torso); // Torso attached to pelvis

    // 3. HEAD NECK joint
    const neckGeo = new THREE.SphereGeometry(0.25, 32, 32);
    const neck = new THREE.Mesh(neckGeo, jointMat);
    neck.position.y = 0.5; // Top of torso
    torso.add(neck);

    // HEAD MESH
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.2;
    neck.add(headGroup);

    // Face/Helmet shape (Rounded Box for sci-fi look)
    // Manually creating a "sculpted" head using multiple meshes
    const skullGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const skull = new THREE.Mesh(skullGeo, skinMat);
    headGroup.add(skull);

    const visorGeo = new THREE.CapsuleGeometry(0.15, 0.4, 4, 16);
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.z = Math.PI / 2;
    visor.position.set(0, 0, 0.25); // Eye level
    headGroup.add(visor);

    // --- HUNTER HELMET CREST (Rathian Style) ---
    const armorMat = new THREE.MeshStandardMaterial({
        color: 0x880000, // Dark Red Armor
        metalness: 1.0,
        roughness: 0.3
    });
    const crestGeo = new THREE.ConeGeometry(0.1, 0.6, 4);
    const crest = new THREE.Mesh(crestGeo, armorMat);
    crest.rotation.x = -Math.PI / 4;
    crest.position.set(0, 0.4, -0.1);
    headGroup.add(crest);

    // --- LIMBS Helper ---
    function createLimb(width, length, material, jointMat) {
        const limbGroup = new THREE.Group();

        // Joint (Shoulder/Hip)
        const jointGeo = new THREE.SphereGeometry(width, 32, 32);
        const joint = new THREE.Mesh(jointGeo, jointMat);
        limbGroup.add(joint);

        // Bone (Capsule)
        const boneGeo = new THREE.CapsuleGeometry(width * 0.85, length, 4, 16);
        const bone = new THREE.Mesh(boneGeo, material);
        // Position capsule so joint is at the top
        bone.position.y = -length / 2;
        limbGroup.add(bone);

        return limbGroup;
    }

    // 4. ARMS
    const armLength = 0.6;
    const armWidth = 0.12;

    // Shoulders attached to High Torso
    const shoulderHeight = 0.3;
    const shoulderWidth = 0.45;

    // Left Arm
    const leftArm = createLimb(armWidth, armLength, skinMat, jointMat);
    leftArm.position.set(-shoulderWidth, shoulderHeight, 0);
    torso.add(leftArm);

    // Right Arm
    const rightArm = createLimb(armWidth, armLength, skinMat, jointMat);
    rightArm.position.set(shoulderWidth, shoulderHeight, 0);
    torso.add(rightArm);

    // 5. LEGS
    const legLength = 0.7;
    const legWidth = 0.15;

    // Left Leg
    const leftLeg = createLimb(legWidth, legLength, skinMat, jointMat);
    leftLeg.position.set(-0.2, 0, 0); // Offset from Pelvis center
    pelvis.add(leftLeg);

    // Right Leg
    const rightLeg = createLimb(legWidth, legLength, skinMat, jointMat);
    rightLeg.position.set(0.2, 0, 0);
    pelvis.add(rightLeg);

    // --- HUNTER ARMOR (Pauldrons) ---
    const pdrnGeo = new THREE.ConeGeometry(0.25, 0.4, 4);

    // Left Pauldron
    const lPdrn = new THREE.Mesh(pdrnGeo, armorMat);
    lPdrn.position.set(0, 0, 0); // On the joint
    lPdrn.rotation.z = Math.PI / 3;
    leftArm.add(lPdrn);

    // Right Pauldron
    const rPdrn = new THREE.Mesh(pdrnGeo, armorMat);
    rPdrn.position.set(0, 0, 0);
    rPdrn.rotation.z = -Math.PI / 3;
    rightArm.add(rPdrn);

    // --- GREAT SWORD (Back Mounted) ---
    const swordGroup = new THREE.Group();
    // Blade
    const bladeGeo = new THREE.BoxGeometry(0.3, 1.5, 0.05);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 1.0, roughness: 0.2 });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.5;
    swordGroup.add(blade);

    // Hilt
    const hiltGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.4);
    const hilt = new THREE.Mesh(hiltGeo, armorMat);
    hilt.position.y = -0.3;
    swordGroup.add(hilt);

    // Guard
    const grdGeo = new THREE.BoxGeometry(0.4, 0.1, 0.1);
    const guard = new THREE.Mesh(grdGeo, armorMat);
    guard.position.y = -0.2;
    swordGroup.add(guard);

    // Mount to Back
    swordGroup.position.set(0, 0.2, -0.25);
    swordGroup.rotation.z = -Math.PI / 6; // Angled carry
    swordGroup.rotation.x = Math.PI / 12;
    torso.add(swordGroup);

    scene.add(player);
    playerVelocity = new THREE.Vector3();

    // Rigging Data
    player.userData = {
        pelvis,
        torso,
        neck,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg,
        headGroup
    };
}

function updatePlayer(dt) {
    if (!player) return;

    const speed = keyState['ShiftLeft'] ? 10 : 5;
    const moveDir = new THREE.Vector3();
    let isMoving = false;

    // Movement Logic
    if (keyState['KeyW']) moveDir.z -= 1;
    if (keyState['KeyS']) moveDir.z += 1;
    if (keyState['KeyA']) moveDir.x -= 1;
    if (keyState['KeyD']) moveDir.x += 1;

    moveDir.normalize();

    // Camera Orientation
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    camDir.y = 0;
    camDir.normalize();
    const camRight = new THREE.Vector3();
    camRight.crossVectors(camDir, new THREE.Vector3(0, 1, 0));

    const finalDir = new THREE.Vector3();
    finalDir.addScaledVector(camDir, -moveDir.z);
    finalDir.addScaledVector(camRight, moveDir.x);

    // --- PROCEDURAL ANIMATION SYSTEM ---
    const rig = player.userData;
    const time = Date.now() * 0.01; // Animation time

    if (finalDir.lengthSq() > 0) {
        isMoving = true;
        player.position.addScaledVector(finalDir, speed * dt);
        player.lookAt(player.position.clone().add(finalDir));

        const runFactor = keyState['ShiftLeft'] ? 1.5 : 1.0;
        const animSpeed = time * runFactor;

        // 1. Leg Swing
        rig.leftLeg.rotation.x = Math.sin(animSpeed) * 0.8;
        rig.rightLeg.rotation.x = Math.sin(animSpeed + Math.PI) * 0.8;

        // Knee bend (simple inverse kinematic simulation)
        // If leg is moving back, bend knee (not implemented in simple rig, but we can fake drag)

        // 2. Arm Swing (Opposite to legs)
        rig.leftArm.rotation.x = Math.sin(animSpeed + Math.PI) * 0.6;
        rig.rightArm.rotation.x = Math.sin(animSpeed) * 0.6;

        // 3. Torso Twist
        rig.torso.rotation.y = Math.sin(animSpeed) * 0.1;

        // 4. Head Bob/Stabilization
        rig.headGroup.rotation.y = Math.sin(animSpeed) * 0.05; // Look slightly side to side

        // 5. Vertical Bob (Bounce)
        rig.pelvis.position.y = 1.0 + Math.abs(Math.sin(animSpeed)) * 0.1;

    } else {
        // IDLE STATE (Breathing)
        const breath = Math.sin(time * 0.2);

        // Reset rotation with interpolation (simple lerp)
        const lerpRot = (obj, target) => { obj.rotation.x *= 0.9; };

        lerpRot(rig.leftLeg);
        lerpRot(rig.rightLeg);
        lerpRot(rig.leftArm);
        lerpRot(rig.rightArm);
        rig.torso.rotation.y *= 0.9;

        // Breathing animation
        rig.torso.position.y = 0.5 + breath * 0.01;
        rig.headGroup.rotation.x = breath * 0.05; // Nod slightly
        rig.pelvis.position.y = 1.0; // Reset height
    }

    // Camera Follow
    controls.target.copy(player.position);
    controls.target.y += 1; // Look at head/torso area
}

function updateCreatures(dt, time) {
    scene.traverse((obj) => {
        if (obj.userData.isCreature) {
            obj.rotation.y = Math.sin(time * 0.5) * 0.2;
            obj.position.y = 15 + Math.sin(time) * 2;
            const scale = 1 + Math.sin(time * 5) * 0.05;
            obj.scale.set(scale, scale, scale);
            obj.children.forEach(child => {
                if (child.userData.isWing) {
                    child.rotation.z = child.userData.initRot + Math.sin(time * 2 + child.userData.index) * 0.2;
                }
            });
        }
        if (obj.userData.isWatcher) {
            obj.position.y += Math.sin(time * 2 + obj.userData.bobOffset) * 0.05 * dt;
            obj.lookAt(player.position);
            obj.rotation.z += dt * 0.5;
        }
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateCoins(dt) {
    scene.traverse((object) => {
        if (object.userData && object.userData.isCoin) {
            object.rotation.z += dt * object.userData.rotSpeed;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (entropySys) entropySys.update(delta);
    if (falloutSys) falloutSys.update(delta);
    if (moltAgent && player) moltAgent.update(delta, player.position);
    if (villageSys && player) {
        villageSys.update(delta, player.position);
        
        // SAFE ZONE LOGIC
        if (villageSys.isInsideSafeZone(player.position)) {
             // Force Entropy to stabilize rapidly
             if (entropySys) entropySys.reduceEntropy(delta * 10); 
        }
             if (entropySys) entropySys.reduceEntropy(delta * 10); 
        }
    }
    if (gatherSys && player) {
        gatherSys.update(delta, player.position, keyState);
    }

    // CONTINUOUS SPELLCASTING (Hold Key)
    // Rate limit spawns to avoid crashing (every few frames or based on time)
    if (falloutSys && entropySys && player) {
        if (keyState['KeyE']) {
            // ORDER: Ice Sculptures
            entropySys.reduceEntropy(1 * (delta * 60)); // Continuous cooling
            if (Math.random() < 0.2) { // 20% chance per frame (approx 12/sec)
                falloutSys.spawnIceSculpture(player.position);
            }
        }
        if (keyState['KeyR']) {
            // CHAOS: Psychedelic Flares
            entropySys.addEntropy(1 * (delta * 60)); // Continuous heating
            // Spawn multiple flares for intensity
            falloutSys.spawnPsychedelicFlare(player.position);
            if (Math.random() < 0.5) falloutSys.spawnPsychedelicFlare(player.position);
        }
    }

    updateCoins(delta);
    updateCreatures(delta, elapsedTime);
    updatePlayer(delta);
    controls.update();

    renderer.render(scene, camera);
}

// Start
init();
