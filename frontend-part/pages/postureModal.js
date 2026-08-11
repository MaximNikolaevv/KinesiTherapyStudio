let modal, modalBox, modalIcon, modalTitle, modalText, closeBtn;


export function initPostureModal() {
    modal = document.getElementById("postureModal");
    modalBox = document.getElementById("postureModalBox");
    modalIcon = document.getElementById("postureModalIcon");
    modalTitle = document.getElementById("postureModalTitle");
    modalText = document.getElementById("postureModalText");
    closeBtn = document.getElementById("postureModalClose");

    closeBtn.addEventListener("click", closePostureModal);

};



export function showGoodPosture() {
    modalBox.classList.remove("is-bad");
    modalBox.classList.add("is-good");

    modalIcon.textContent = "✓";
    modalTitle.textContent = "Стойката Ви е правилна";
    modalText.innerHTML = `
        Раменете и главата Ви са добре подравнени. Продължавайте така —
        добрата стойка намалява напрежението във врата и гърба.
    `;

    openPostureModal();
}

export function showBadPosture() {
    modalBox.classList.remove("is-good");
    modalBox.classList.add("is-bad");

    modalIcon.textContent = "!";
    modalTitle.textContent = "Забелязана е неправилна стойка";
    modalText.innerHTML = `
        Раменете или главата Ви са изместени от неутрална позиция.
        Опитайте следното:
    `;

    const existingTips = modalBox.querySelector(".posture-modal-tips");
    if (existingTips) existingTips.remove();

    const tipsList = document.createElement("ul");
    tipsList.className = "posture-modal-tips";
    tipsList.innerHTML = `
        <li>Изправете гърба и издърпайте раменете леко назад</li>
        <li>Приберете брадичката, вместо да я изнасяте напред</li>
        <li>Уверете се, че раменете Ви са на едно и също ниво</li>
    `;
    modalText.insertAdjacentElement("afterend", tipsList);

    openPostureModal();
}

function openPostureModal() {
    modal.classList.add("is-open");
}

export function closePostureModal() {
    modal.classList.remove("is-open");

    // чистим tips списъка, за да не се дублира при следваща "лоша" нотификация
    const tips = modalBox.querySelector(".posture-modal-tips");
    if (tips) tips.remove();
}