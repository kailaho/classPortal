import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function loadItem(path, s1, s2, s3, xPos, yPos, zPos, xRot, yRot, zRot){
    console.log("in loadItem function");
     var loadTree = new GLTFLoader();
     loadTree.load(`${path}`, function (gltf){
    console.log("in gltf function");
     var object = gltf.scene;
     console.log(object);
     object.scale.set(s1, s2, s3);
     object.position.x = xPos;
     console.log("xPos: " + xPos);
     object.position.y = yPos;
     console.log("yPos: " + yPos);
     object.position.z = zPos;
     console.log("zPos: " + zPos);
     object.rotateX(xRot);
     console.log("xRot: " + xRot);
     object.rotateY(yRot);
     console.log("yRot: " + yRot);
     object.rotateZ(zRot);
     console.log("zRot: " + zRot);
     console.log(object);
     scene.add(object);
     console.log(object);
     object.rotation.x += 0.01;
     object.rotation.y += 0.01;
 
 }

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();