import { html } from "../../node_modules/lit-html/lit-html.js";

//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";




// renderer създава самия черен прозорец (HTML canvas)
// scene определя какво ще се рисува вътре
// camera определя откъде гледаме сцената

// Renderer = телевизорът
// Canvas = екранът на телевизора
// Scene = филмът
// Camera = гледната точка
// Objects = актьорите

// const AxesHelper = new THREE.AxesHelper(3);  Create an axes helper to visualize the coordinate system
// renderer.shadowMap.enabled = true; // Enable shadow mapping for realistic shadows
// scene.add(AxesHelper); // Add the axes helper to the scene

// const AmbientLight = new THREE.AmbientLight(0xffffff); // Create an ambient light
// scene.add(AmbientLight); // Add the ambient light to the scene

// const dLightHelper = new THREE.DirectionalLight(); // Create a directional light helper
// scene.add(dLightHelper); // Add the directional light helper to the scene

//npm i dad gui - helper - create options... the gui.add(options, (type of change))

// const ambientLight = new THREE.AmbientLight(0xffffff, 1, 5);
// scene.add(ambientLight);

let DashboardTemplate = () => html`
    <section class="about-section" id="za-nas">
    <div class="about-inner">

      <section class="about-header">
    <p class="about-eyebrow">ЗА НАС</p>
    <p class="about-subtitle">Екип от специалисти, отдадени на вашето здраве и напредък — с грижа, опит и внимание към всеки детайл.</p>
</section>

    </div>

    <div class="team-grid">

        <article class="team-card">
            <div class="team-photo">
                <img src="../img/IMG_2263.jpeg" alt="Алекс Николаев, кинезитерапевт" />
            </div>
            <div class="team-info">
                <h3 class="team-name">Алекс Николаев</h3>
                <p class="team-role">Кинезитерапевт, Основател</p>
                <p class="team-bio">
                   Над 6 години опит в спортната рехабилитация и възстановяване при нервномускулни
                  и ортопедични състояния. Практика в масажи, сухи игли и 
                  вендузотерапия, с 3 години професионален опит в чужбина.

                </p>
            </div>
        </article>

        <article class="team-card">
            <div class="team-photo">
            <img src="../img/IMG_2250.jpeg" alt="Христина Принджева, кинезитерапевт" />
            </div>
            <div class="team-info">
            <h3 class="team-name">Христина Принджева</h3>
            <p class="team-role">Кинезитерапевт, Основател</p>
            <p class="team-bio">
            3 години работа извън България, 5+ години опит при възстановяване на 
            спротни травми, следоперативна рехабилитация, работа при деца с увреждания както 
            и различни видове масаж.
            </p>
            </div>
            </article>
            </div>

            
            <article class="about-3d-intro" aria-label="Описание на 3D анатомичния модел">
                <h2 class="title-3d-description">Интерактивният 3D анатомичен модел</h2>
                <h3 class="subtitle-3d-description">Нашият помощник</h3>
                <p class="about-3d-description">
                    Помага ви да разгледате основните мускулни групи и тяхната функция в реално движение.
                    Може да завъртите модела, за да видите как всеки мускул подпомага стойката, стабилността и контрола на движението в различни части на тялото.
                </p>
            </article>

            <main class="about-3d">
            <div id="threeDContainer"></div>
            </main>
            
            </section>

`;

export function AboutUs(ctx) {
    ctx.render(DashboardTemplate());


    const container = document.getElementById("threeDContainer");

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000); // Create a perspective camera
    const raycaster = new THREE.Raycaster(); // Това е лъч
    const mouse = new THREE.Vector2();

    renderer.setClearColor(0xFAF7F4);
    container.appendChild(renderer.domElement);

    renderer.setSize(container.clientWidth, container.clientHeight); // Set the renderer size to match the container size

    camera.position.set(1, 2, 4); // Set the camera position x / y / z

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 8, 6);
    
    const BackLight = new THREE.DirectionalLight(0xffffff, 1.2);
    BackLight.position.set(-5, 8, -6);
    
    scene.add(keyLight);
    scene.add(BackLight);
    
    
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.update();
    
    const loader = new GLTFLoader();
    loader.load(
        "/model/ecorche_-_anatomy_study.glb",
        (gltf) => {
           const model = gltf.scene;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model); // Вземаме размера на модела (Представи си, че Three.js слага невидима кутия около модела.)
            const size = box.getSize(new THREE.Vector3()); // Вземаме ширина, височина и дълбочина
            const maxDim = Math.max(size.x, size.y, size.z); // Намираме най-голямата стойност
            
            if (maxDim > 0) {
                const targetSize = 3; // Искам най-голямата страна на модела да бъде 3 единици.“
                const scale = targetSize / maxDim; // Изчисляваме колко да го намалим/увеличим
                model.scale.setScalar(scale);   // Т.е. моделът трябва да стане 50% от оригиналния си размер. („Промени размера на модела еднакво по X, Y и Z.“)
                model.position.set(0, 0.2, 0);

            }
        },
        undefined,
        (error) => {
            console.error("GLB load error:", error);
        }
    );

    renderer.domElement.addEventListener("click", (event) => {

        mouse.x = (event.clientX / container.clientWidth) * 2 - 1; // parameters where the mouse has been clicked

        mouse.y = -(event.clientY / container.clientHeight) * 2 + 1; // parameters where the mouse has been clicked 

        raycaster.setFromCamera(mouse, camera); // mouse показва къде върху екрана е кликнал потребителят // От тази камера, през тази позиция на екрана, накъде трябва да тръгне лъчът?“

        const intersects = raycaster.intersectObjects( // „Провери дали този лъч пресича някой от тези 3D обекти.“
            scene.children,
            true // „Провери не само директните деца, а и техните деца, и техните деца и т.н.“
        );

        if (intersects.length > 0) {
            console.log(intersects[0].object);
        }
    });

    window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    function animate() {

        requestAnimationFrame(animate); // animating loop 
        renderer.render(scene, camera);
    }

    animate();
}