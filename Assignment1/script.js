
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 20;
controls.update();
controls.enableDamping = true;
controls.dampingFactor = 0.25;


const grassGeometry = new THREE.PlaneGeometry(30, 30);
const grassMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.rotation.x = -Math.PI / 2;
scene.add(grass);


const roadGeometry = new THREE.PlaneGeometry(2, 30);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);




const building1Geometry = new THREE.BoxGeometry(7.5, 3, 7.5);
const building1Material = new THREE.MeshBasicMaterial({ color: 0xFFFFF });
const building1 = new THREE.Mesh(building1Geometry, building1Material);
building1.position.set(-7, 3, 8);  
scene.add(building1);


const building2Geometry = new THREE.BoxGeometry(4, 3, 15);
const building2Material = new THREE.MeshBasicMaterial({ color: 0xFFFFF });
const building2 = new THREE.Mesh(building2Geometry, building2Material);
building2.position.set(7.5, 3, -1);  
scene.add(building2);


const building3Geometry = new THREE.BoxGeometry(7.5, 3, 7.5);
const building3Material = new THREE.MeshBasicMaterial({ color: 0xFFFF });
const building3 = new THREE.Mesh(building3Geometry, building3Material);
building3.position.set(-7, 3, -8);  
scene.add(building3);


const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0.5, -10); 
scene.add(sphere);


function animateObject() {
  gsap.timeline({ repeat: -1, yoyo: true })
    .to(sphere.position, { duration: 3, z: 10, ease: "power1.inOut" })
    .to(sphere.position, { duration: 3, z: -10, ease: "power1.inOut" });
}

animateObject(); 


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();


window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
