import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { initPoseDetector, detectPose } from "./postureDetector.js";
import { analyzePosture } from "./AnalyzaPosture.js";
import { showBadPosture, showGoodPosture, initPostureModal } from "../pages/postureModal.js";

let DashboardTemplate = () => html`<main>

  <section class="process-section" id="kak-rabotim">
    <div class="process-inner">
 
      <p class="process-eyebrow">Как работим</p>
      <h2 class="process-title">Пътят към вашето възстановяване</h2>
      <p class="process-intro">
        Всеки пациент е различен, затова следваме ясен, структуриран процес,
        който гарантира, че терапията е съобразена точно с вашето състояние
        и цели.
      </p>
 
      <ol class="process-steps">
 
        <li class="process-step">
          <div class="process-step-content">
            <h3>Първоначален преглед</h3>
            <p>Опознаваме вашата история, оплаквания и текущо състояние.</p>
          </div>
        </li>
 
        <li class="process-step">
          <div class="process-step-content">
            <h3>Анализ на проблема</h3>
            <p>Определяме първопричината за болката или ограничението в движението.</p>
          </div>
        </li>
 
        <li class="process-step">
          <div class="process-step-content">
            <h3>Изготвяне на индивидуален план</h3>
            <p>Съставяме терапевтична програма, съобразена конкретно с вас.</p>
          </div>
        </li>
 
        <li class="process-step">
          <div class="process-step-content">
            <h3>Провеждане на терапия</h3>
            <p>Прилагаме плана чрез контролирани и проследени сесии.</p>
          </div>
        </li>
 
        <li class="process-step">
          <div class="process-step-content">
            <h3>Проследяване на резултатите</h3>
            <p>Следим напредъка и коригираме плана при нужда.</p>
          </div>
        </li>
 
      </ol>
 
    </div>
  </section>
 
  <!-- ============================================
       Проверка на стойката — camera-based demo
       ============================================ -->
  <section class="posture-section" id="proverka-stoika">
    <div class="posture-inner">
 
      <p class="posture-eyebrow">Илюстрация на правилната стойка</p>
      <h2 class="posture-title">Проверете стойката си на живо</h2>
      <p class="posture-intro">
        Включете камерата си, за да получите ориентировъчна обратна връзка за
        стойката на раменете и врата. Обработката се случва изцяло във
        вашия браузър — нищо не се записва или изпраща никъде.
        За постигане на по-точни резултати застанете
        странично спрямо камерата, като се уверите, че тялото
        ви е видимо в кадър от колената до главата. По време на 
        анализа се старайте да запазите неподвижна позиция.
      </p>
 
      <div class="posture-demo">
 
        <div class="posture-video-frame">
          <video id="postureVideo" autoplay playsinline muted></video>
        </div>
 
        <div class="posture-panel">
 
          <div class="posture-status" id="postureStatus">
            <span class="posture-status-dot"></span>
            <span id="postureStatusText">Изчаква стартиране</span>
          </div>
 
  
 
          <button type="button" class="button button--primary posture-start-btn" id="startCameraBtn">
            Стартирай камерата
          </button>
 
          <p class="posture-disclaimer">
            Тази функция дава обща ориентировъчна информация и не замества
            преглед от специалист. За точна оценка на стойката,
            <a href="/contactUs" id="contactAppointmentLink">запазете час за преглед</a>. 
          </p>
 
        </div>
 
      </div>
 
    </div>
  </section>

  <!-- Нотификация за стойката — центрирана модална кутия -->
  <div class="posture-modal" id="postureModal">
    <div class="posture-modal-box" id="postureModalBox">

      <button type="button" class="posture-modal-close" id="postureModalClose" aria-label="Затвори">
        &times;
      </button>

      <div class="posture-modal-icon" id="postureModalIcon"></div>

      <h3 class="posture-modal-title" id="postureModalTitle"></h3>
      <p class="posture-modal-text" id="postureModalText"></p>

    </div>
  </div>
 
</main>

`


export async function HowWeWork(ctx) {
  ctx.render(DashboardTemplate());

  initPostureModal();

  document.getElementById("contactAppointmentLink").addEventListener("click", (event) => {
    event.preventDefault();
    page.show("/contactUs");
  });

  await initPoseDetector(); // Целта е да се зареди MediaPipe моделът за откриване на поза.

  const videoElement = document.getElementById("postureVideo");
  const startButton = document.getElementById("startCameraBtn");
  const status = document.getElementById("postureStatus");
  const postureText = document.getElementById("postureStatusText")

  let stream = null;
  let loopActive = false;
  let animationFrameId = null;
  let badPostureTimer = null;
  let goodPostureTimer = null;
  const POSTURE_TIME = 4000;


  startButton.addEventListener("click", async () => {

    if (stream) {
      stream.getTracks().forEach(track => track.stop());

      postureText.textContent = "Изчаква стартиране";
      startButton.textContent = "Стартирай камерата";
      status.classList.remove("is-live");

      stream = null;
      videoElement.srcObject = null;
      loopActive = false;

      clearTimeout(badPostureTimer);
      clearTimeout(goodPostureTimer);

      return;
    }

    postureText.textContent = "Камерата е стартирана"
    startButton.textContent = "Изключи камерата"
    status.classList.add("is-live");

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Камерата не е поддържана в този браузър.");
      }

      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: "user"
        },
        audio: false
      });

      videoElement.srcObject = stream;
      videoElement.muted = true;
      videoElement.playsInline = true;
      await videoElement.play();


      loopActive = true;   // само сменяме споделената променлива
      renderLoop();          // извикваме БЕЗ аргумент

    } catch (error) {
      console.error(error);
      startButton.textContent = "Камерата не е достъпна";
    }
  });

  // renderLoop вече НЕ приема параметър — чете loopActive от външния scope
  function renderLoop() {

    if (!loopActive) return;

    if (videoElement.readyState >= 2) {

      const result = detectPose(videoElement);

      if (result?.landmarks && result.landmarks.length > 0) {

        const landmarks = result.landmarks[0];
        const angle = analyzePosture(landmarks);

        if (angle > 1.50) {

          clearTimeout(goodPostureTimer);
          goodPostureTimer = null;

          if (!badPostureTimer) {
            badPostureTimer = setTimeout(() => {
              stopPostureLoop();
              showBadPosture();
              badPostureTimer = null;
            }, POSTURE_TIME);
          }

        } else if (angle < 1.50) {

          clearTimeout(badPostureTimer);
          badPostureTimer = null;

          if (!goodPostureTimer) {
            goodPostureTimer = setTimeout(() => {
              stopPostureLoop();
              showGoodPosture();
              goodPostureTimer = null;
            }, POSTURE_TIME);
          }
        }

        console.log(angle)

      }
    }

    animationFrameId = requestAnimationFrame(renderLoop);
  }

  // stopPostureLoop е дефинирана ВЕДНЪЖ, извън renderLoop —
  // затова реално "помни" и може да отмени правилния animationFrameId
  function stopPostureLoop() {
    loopActive = false;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    clearTimeout(badPostureTimer);
    clearTimeout(goodPostureTimer);
    badPostureTimer = null;
    goodPostureTimer = null;

    if (stream) {
      stream.getTracks().forEach(track => track.stop());

      postureText.textContent = "Изчаква стартиране";
      startButton.textContent = "Стартирай камерата";
      status.classList.remove("is-live");

      stream = null;
      videoElement.srcObject = null;
      loopActive = false;

      clearTimeout(badPostureTimer);
      clearTimeout(goodPostureTimer);

      return;
    }

  }

}

