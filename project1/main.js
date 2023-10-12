// Load 3D Scene
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
var scene = new THREE.Scene(); 

// Load Camera Perspektive
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 1, 1, 20 );
   
// Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor( 0xA3DCFF );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
   
// Load the Orbitcontroller
//var controls = new THREE.OrbitControls( camera, renderer.domElement ); 
           
// Load Light
var ambientLight = new THREE.AmbientLight( 0xfffff0 );
scene.add( ambientLight );
           
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );	

// glTf 2.0 Loader
/*
var loadBackground = new THREE.TextureLoader();
loadBackground.load("./img/blueSky.png", function (texture){
   console.log("in loadBackround");
   console.log("texture: " +texture);
   scene.background = texture;
});*/

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

});
   
}

loadItem('./models/low_poly_plants/scene.gltf', .5, .5, .5 , 0, -3, 0, 0, 170, 0);
loadItem('./models/pineTree/scene.gltf', .7, .7, .7, 8, -3, 0, 0,0,0);
loadItem('./models/aspen/scene.gltf', .5, .5, .5, -22, -8, 0, 0, 185, 0);
loadItem('./models/mountains/scene.gltf', 125, 125, 125, 0, -20, -200, 0, 180, 0);

function animate() {
   //console.log("in animate");
   render();
   requestAnimationFrame( animate );
   }

function render() {
   //console.log("in render");
   renderer.render( scene, camera );
   }

 render();
 animate();





