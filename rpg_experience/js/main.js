import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- CONFIGURATION ---
const CONFIG = {
    colors: {
        skyTop: 0x000022,
        skyBottom: 0xff003c, // Cyberpunk red tint
        fog: 0x050510,
        ground: 0x111111,
        grid: 0x00f3ff
    },
    worldSize: 200
};

// --- GLOBAL VARIABLES ---
let scene, camera, renderer, controls;
let clock, delta;
let player, playerVelocity, playerDirection;
const keyState = {};

// --- INITIALIZATION ---
function init() {
    // 1. Scene Setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.fog);
    scene.fog = new THREE.FogExp2(CONFIG.colors.fog, 0.02);

    // 2. Camera Setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // 3. Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
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

    // 7. Audio System
    setupAudio();

    // 8. Controls & Events
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; // Prevent going below ground

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('keydown', (e) => keyState[e.code] = true);
    document.addEventListener('keyup', (e) => keyState[e.code] = false);

    clock = new THREE.Clock();

    // Start Loop
    animate();
}

function setupAudio() {
    // Audio Listener
    const listener = new THREE.AudioListener();
    camera.add(listener);

    // Global Audio Source
    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();

    // Load background music
    // Note: User must place 'osamu_sato.mp3' in assets folder
    audioLoader.load('../assets/osamu_sato.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    }, undefined, function (err) {
        console.warn('Audio file not found: assets/osamu_sato.mp3');
    });
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

        // Windows (Randomly placed glowing planes)
        for (let w = 0; w < 4; w++) {
            if (Math.random() > 0.5) continue;
            const winGeo = new THREE.PlaneGeometry(1, 2);
            const win = new THREE.Mesh(winGeo, windowMat);

            // Simple placement logic (front face or side face)
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

    // 4. PIPES & BLOCKS (Mario Elements)
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
        // Ensure not in center
        if (pipeGroup.position.length() < 10) pipeGroup.position.x += 20;

        pipeGroup.traverse(c => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
        scene.add(pipeGroup);
    }

    // Floating Blocks & Coins
    const blockMat = new THREE.MeshStandardMaterial({ color: 0xcc5500, metalness: 0.4 }); // Brick color
    const qBlockMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xaa8800, emissiveIntensity: 0.2 }); // Gold
    const coinMat = new THREE.MeshStandardMaterial({ color: 0xffff00, metalness: 1, roughness: 0.2, emissive: 0xaa8800 });

    for (let i = 0; i < 40; i++) {
        const type = Math.random();
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 80,
            Math.random() * 10 + 5,
            (Math.random() - 0.5) * 80
        );

        if (type > 0.6) {
            // Brick Block
            const block = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), blockMat);
            block.position.copy(pos);
            block.castShadow = true;
            scene.add(block);
        } else if (type > 0.3) {
            // ? Block
            const qBlock = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), qBlockMat);
            qBlock.position.copy(pos);
            qBlock.castShadow = true;

            // Add a simple light to it
            const qLight = new THREE.PointLight(0xffaa00, 1, 10);
            qLight.position.copy(pos);
            scene.add(qLight);
            scene.add(qBlock);
        } else {
            // Coin
            const coin = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.2, 16), coinMat);
            coin.rotation.x = Math.PI / 2; // Flat facing player initially
            coin.position.copy(pos);
            coin.userData = { isCoin: true, rotSpeed: Math.random() * 2 + 1 };
            scene.add(coin);
        }
    }

    // 5. PARTICLES (Glitch/Magic)
    const particleCount = 1500;
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
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);
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

    updateCoins(delta);
    updatePlayer(delta);
    controls.update();

    renderer.render(scene, camera);
}

// Start
init();
