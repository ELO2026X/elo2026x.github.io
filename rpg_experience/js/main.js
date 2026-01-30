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
    createEnvironment();

    // 6. Player Setup
    createPlayer();

    // 7. Controls & Events
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

function createEnvironment() {
    // Ground - Infinite Grid aesthetic
    const geometry = new THREE.PlaneGeometry(CONFIG.worldSize, CONFIG.worldSize);
    const material = new THREE.MeshStandardMaterial({
        color: CONFIG.colors.ground,
        metalness: 0.8,
        roughness: 0.2
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid Helper
    const gridHelper = new THREE.GridHelper(CONFIG.worldSize, 50, CONFIG.colors.grid, 0x222222);
    scene.add(gridHelper);

    // Random Geometric "Buildings"
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x333333 });

    for (let i = 0; i < 50; i++) {
        const h = Math.random() * 10 + 2;
        const mesh = new THREE.Mesh(boxGeo, boxMat);
        mesh.position.set(
            (Math.random() - 0.5) * CONFIG.worldSize * 0.8,
            h / 2,
            (Math.random() - 0.5) * CONFIG.worldSize * 0.8
        );
        mesh.scale.set(Math.random() * 5 + 2, h, Math.random() * 5 + 2);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    }

    // Green Pipes (Procedural)
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x00aa00, roughness: 0.4 });
    for (let i = 0; i < 5; i++) {
        const pipeGroup = new THREE.Group();
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 3, 16), pipeMat);
        tube.position.y = 1.5;
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.8, 16), pipeMat);
        rim.position.y = 2.8;

        pipeGroup.add(tube);
        pipeGroup.add(rim);

        pipeGroup.position.set(
            (Math.random() - 0.5) * 40,
            0,
            (Math.random() - 0.5) * 40
        );
        pipeGroup.traverse(c => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
        scene.add(pipeGroup);
    }
}

function createPlayer() {
    // Placeholder Cube Player
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff003c, emissive: 0x330000 });
    player = new THREE.Mesh(geometry, material);
    player.position.y = 1;
    player.castShadow = true;
    scene.add(player);

    playerVelocity = new THREE.Vector3();
}

function updatePlayer(dt) {
    if (!player) return;

    const speed = keyState['ShiftLeft'] ? 10 : 5;
    const moveDir = new THREE.Vector3();

    if (keyState['KeyW']) moveDir.z -= 1;
    if (keyState['KeyS']) moveDir.z += 1;
    if (keyState['KeyA']) moveDir.x -= 1;
    if (keyState['KeyD']) moveDir.x += 1;

    moveDir.normalize();

    // Orient input to camera
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    camDir.y = 0;
    camDir.normalize();

    const camRight = new THREE.Vector3();
    camRight.crossVectors(camDir, new THREE.Vector3(0, 1, 0));

    const finalDir = new THREE.Vector3();
    finalDir.addScaledVector(camDir, -moveDir.z); // -z because camera looks down negative z
    finalDir.addScaledVector(camRight, moveDir.x);

    if (finalDir.lengthSq() > 0) {
        player.position.addScaledVector(finalDir, speed * dt);

        // Rotate player to face direction
        player.lookAt(player.position.clone().add(finalDir));
    }

    // Follow camera slightly
    controls.target.copy(player.position);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
