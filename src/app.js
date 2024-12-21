import * as THREE from 'three';

/**
 * 构建流程：
 * 1. 创建场景
 * 2. 创建相机
 * 3. 创建渲染器
 */


let camera = null,
  renderer = null,
  scene = null;

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
  camera = new THREE.PerspectiveCamera(_angleOfview, window.innerWidth / window.innerHeight, _near, _far);

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

function initThreeView() {
  initScene();
  initCamera();
  initRenderer();
}

initThreeView();

function animate() {

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate();