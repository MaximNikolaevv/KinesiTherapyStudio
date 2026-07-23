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
    <header class="header">
        <div class="header__container">

            <button class="nav-toggle" id="navToggle" aria-label="Отвори менюто" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="main-nav" id="primaryNav">
                <ul class="main-nav__list">
                    <li><a href="/" class="main-nav__link">Начало</a></li>
                    <li><a href="/aboutUs" class="main-nav__link is-current">За нас</a></li>
                    <li><a href="/uslugi" class="main-nav__link">Услуги</a></li>
                    <li><a href="/kak-rabotim" class="main-nav__link">Как работим</a></li>
                    <li><a href="/otzivi" class="main-nav__link">Отзиви</a></li>
                    <li><a href="/ContactUs" class="main-nav__link">Контакти</a></li>
                </ul>
            </nav>

        </div>
    </header>

    <section class="about-section" id="za-nas">
    <div class="about-inner">

        <div class="about-header">
            <h1 class="about-eyebrow">За нас</h1>
            <h2 class="about-title">Хората зад вашето възстановяване</h2>
        </div>

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
                    Над 10 години опит в спортната рехабилитация и лечението на болки
                    в гръбначния стълб. Магистър по кинезитерапия, сертифициран
                    специалист по мануална терапия.
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
            Специализира във следоперативна рехабилитация и възстановяване
            при възрастни пациенти. Над 8 години клиничен опит в
            университетска болница и частна практика.
            </p>
            </div>
            </article>
            </div>

            
            <article class="about-3d-intro" aria-label="Описание на 3D анатомичния модел">
                <h2 class="title-3d-description">Интерактивният 3D анатомичен модел</h2>
                <p class="about-3d-description">
                    Помага ви да разгледате основните мускулни групи и тяхната функция в реално движение.
                    Може да завъртите модела, за да видите как всеки мускул подпомага стойката, стабилността и контрола на движението в различни части на тялото.
                </p>
            </article>

            <main class="about-3d">
            <div id="threeDContainer"></div>
            </main>
            
            </section>`;

export function AboutUs(ctx) {
    ctx.render(DashboardTemplate());

    const container = document.getElementById("threeDContainer");

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000); // Create a perspective camera

    renderer.setClearColor(0xFAF7F4);

    container.appendChild(renderer.domElement);

    renderer.setSize(container.clientWidth, container.clientHeight);

    camera.position.set(1, 2, 4); // Set the camera position



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

            // Auto-fit model so it is always visible
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);

            if (maxDim > 0) {
                const targetSize = 3;
                const scale = targetSize / maxDim;
                model.scale.setScalar(scale);

                // const scaledCenter = center.multiplyScalar(scale);
                // model.position.sub(scaledCenter);


                camera.lookAt(0, -2, 0);
                model.position.set(0, 1, 0); // x, y, z
                orbitControls.target.set(0, 0.5, 0);
                orbitControls.update();
            }
        },
        undefined,
        (error) => {
            console.error("GLB load error:", error);
        }
    );

    window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    function animate() {

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}