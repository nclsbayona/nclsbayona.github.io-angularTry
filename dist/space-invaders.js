import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

// Setup

const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load("images/SPACE-BG.jpg");

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(-10);
camera.position.setZ(10);
renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xa1abb0);
scene.add(pointLight, ambientLight);

// Controls

const controls = new OrbitControls(camera, renderer.domElement);

//Stars

function addStar(color) {
  const geometry = new THREE.SphereGeometry(0.1, 8, 8);
  const material = new THREE.MeshStandardMaterial({ color: color });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

for (let i = 0; i < 200; ++i) addStar();

// Invaders

var TEXTURE = new THREE.TextureLoader().load("images/FULL-INVADERS.png");
var SIZE;
var INVADER;
function createInvader() {
  SIZE = THREE.MathUtils.randFloatSpread(15);
  INVADER = new THREE.Mesh(
    new THREE.BoxGeometry(SIZE, SIZE, SIZE),
    new THREE.MeshStandardMaterial({ map: TEXTURE })
  );
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  INVADER.position.set(x, y, z);
  scene.add(INVADER);
}
var array_invaders = Array(5).fill().forEach(createInvader);

// Green

TEXTURE = new THREE.TextureLoader().load("images/SPACE-INVADER-GREEN.jpeg");

function createGREEN() {
  SIZE = THREE.MathUtils.randFloatSpread(15);
  INVADER = new THREE.Mesh(
    new THREE.BoxGeometry(SIZE, SIZE, SIZE),
    new THREE.MeshStandardMaterial({ map: TEXTURE })
  );
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  INVADER.position.set(x, y, z);
  scene.add(INVADER);
}
var array_green = Array(5).fill().forEach(createGREEN);

//Blue

TEXTURE = new THREE.TextureLoader().load("images/SPACE-INVADER-BLUE.jpeg");

function createBLUE() {
  SIZE = THREE.MathUtils.randFloatSpread(15);
  INVADER = new THREE.Mesh(
    new THREE.BoxGeometry(SIZE, SIZE, SIZE),
    new THREE.MeshStandardMaterial({ map: TEXTURE })
  );
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  INVADER.position.set(x, y, z);
  scene.add(INVADER);
}

var array_blue = Array(5).fill().forEach(createBLUE);

//Yellow

TEXTURE = new THREE.TextureLoader().load("images/SPACE-INVADER-YELLOW.jpeg");

function createYELLOW() {
  SIZE = THREE.MathUtils.randFloatSpread(15);
  INVADER = new THREE.Mesh(
    new THREE.BoxGeometry(SIZE, SIZE, SIZE),
    new THREE.MeshStandardMaterial({ map: TEXTURE })
  );
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  INVADER.position.set(x, y, z);
  scene.add(INVADER);
}

var array_yellow = Array(5).fill().forEach(createYELLOW);

//PINK

TEXTURE = new THREE.TextureLoader().load("images/SPACE-INVADER-PINK.jpeg");

function createPINK() {
  SIZE = THREE.MathUtils.randFloatSpread(15);
  INVADER = new THREE.Mesh(
    new THREE.BoxGeometry(SIZE, SIZE, SIZE),
    new THREE.MeshStandardMaterial({ map: TEXTURE })
  );
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  INVADER.position.set(x, y, z);
  scene.add(INVADER);
}

var array_pink = Array(5).fill().forEach(createPINK);

// Scroll Animation

function moveCamera() {
  scene.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 7);
  scene.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 11);
  scene.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 3);
}

function cameraMove() {
  scene.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 30);
}

document.body.onscroll = cameraMove;
cameraMove();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  console.log(controls.update());
  renderer.render(scene, camera);
}

animate();
// 80's like
setInterval(moveCamera, 350);
