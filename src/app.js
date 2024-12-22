/* eslint-disable no-unused-vars */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Tween } from '@tweenjs/tween.js';

/**
 * 构建流程：
 * 1. 创建场景
 * 2. 创建相机
 * 3. 创建渲染器
 */

let camera = null,
  controls = null,
  grid = null,
  // eslint-disable-next-line prefer-const
  mesh = null,
  renderer = null,
  scene = null,
  tween = null;

/**
 * @description 初始化场景
 */
function initScene() {
  scene = new THREE.Scene();
}

/**
 * @description 初始化相机
 */
function initCamera() {
  const _angleOfview = 45,
    _far = 1000,
    _near = 0.1;
  camera = new THREE.PerspectiveCamera(
    _angleOfview,
    window.innerWidth / window.innerHeight,
    _near,
    _far
  );

  // 更具手势，我们需要往外拉10个单位长度
  camera.position.z = 10;
}

/**
 * @description 初始化渲染器
 */
function initRenderer() {
  renderer = new THREE.WebGLRenderer();

  // 设置画布大小
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
}

function initAxesHelper() {
  const axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper);
}

/**
 * @description 绘制地面网格
 */
function initGridHelper() {
  const size = 20;
  const divisions = 40;
  const colorCenterLine = 'red';
  const colorGrid = 'white';
  grid = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
  grid.material.transparent = true;
  grid.material.opacity = 0.25;
  scene.add(grid);
}

/**
 * @description 初始化轨道控制器
 */
function initOrbitControls() {
  controls = new OrbitControls(camera, renderer.domElement);
}

function initAmbientLight() {
  const color = 0xffffff;
  const intensity = 2;
  const ambientLight = new THREE.AmbientLight(color, intensity);
  scene.add(ambientLight);
}

function createTween() {
  const duration = 1000;
  tween = new Tween(mesh.position)
    .to(
      {
        x: 1,
        y: 1,
        z: 1,
      },
      duration
    )
    .onUpdate((that) => {
      mesh.position.copy(that);
    })
    .start();
}

function loadCarModel() {
  // eslint-disable-next-line capitalized-comments
  // new GLTFLoader().load(carModel, (gltf) => {});
}

function initThreeView() {
  initScene();
  initCamera();
  initRenderer();
  initAxesHelper();
  initOrbitControls();
  initGridHelper();
  loadCarModel();
  initAmbientLight();

  // CreateTween()
}

initThreeView();

function animate(time) {
  renderer.render(scene, camera);
  // Tween.update(time)
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
