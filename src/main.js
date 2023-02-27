// import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'
// import 'aframe';
import{GLTFLoader}  from 'three/examples/jsm/loaders/GLTFLoader';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

// const THREE = window.MINDAR.IMAGE.THREE;

//   document.addEventListener('DOMContentLoaded', () => {
//   const start = async () => {
//     const mindarThree = new window.MINDAR.IMAGE.MindARThree({
//       container: document.body,
//       imageTargetSrc:'./assets/targets/easter1.mind'


//     });
//     const {renderer, scene, camera} = mindarThree;

//     const geometry = new THREE.PlaneGeometry(1, 1);
//     const material = new THREE.MeshBasicMaterial({color: 0x0000ff, transparent: true, opacity: 0.5});
//     const plane = new THREE.Mesh(geometry, material);
//     const anchor = mindarThree.addAnchor(0);
//     anchor.group.add(plane); //Three group

//     await mindarThree.start();

//       renderer.setAnimationLoop(() => {
//         renderer.render(scene, camera);
//     })
//   }
//   start();
// });