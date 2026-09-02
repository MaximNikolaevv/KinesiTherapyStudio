import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = () => html`
    <section class="hero-photo">
        <div class="hero-photo-overlay"></div>
        <div class="hero-photo-fade-top"></div>
        <div class="hero-photo-fade"></div>
        <div class="hero-photo-content">
            <div class="hero-badge">Кинезитерапия • Масажи</div>
            <h1 class="hero-photo-title">
                Възстановяване на движение, сила и увереност
            </h1>
            <p class="hero-photo-subtitle">
                Професионална грижа за вашето тяло, съобразена с вашите индивидуални нужди и цели.
            </p>
            <div class="hero-actions">
                <a href="/contactUs" class="hero-photo-cta">Запази час</a>
                <a href="/kak-rabotim" class="hero-photo-link">Как работим</a>
            </div>
        </div>
    </section>

    <section class="home-feature-grid">
        <article class="home-feature-card">
            <div class="home-feature-icon">01</div>
            <h3>Индивидуална оценка</h3>
            <p>Проверяваме движението, стойката и натоварването, за да създадем точен план за възстановяване.</p>
        </article>
        <article class="home-feature-card">
            <div class="home-feature-icon">02</div>
            <h3>Терапия без стрес</h3>
            <p>Със спокойна атмосфера, ясно обяснение и грижа.</p>
        </article>
        <article class="home-feature-card">
            <div class="home-feature-icon">03</div>
            <h3>Резултат, който се усеща</h3>
            <p>Фокус върху движение, сила, намаляване на болката и връщане към по-активен начин на живот.</p>
        </article>
    </section>

    <section class="home-stats">
        <div class="home-stats__item">
            <strong>1:1</strong>
            <span>индивидуален подход</span>
        </div>
        <div class="home-stats__item">
            <strong>500+</strong>
            <span>успешни сесии</span>
        </div>
        <div class="home-stats__item">
            <strong>100%</strong>
            <span>фокус върху възстановяването</span>
        </div>
    </section>

    <section class="massage-article">
        <div class="massage-article-inner">
            <p class="massage-article-eyebrow">Защо е важно</p>
            <h2 class="massage-article-title">Защо терапията при нас е повече от просто отпускане</h2>

            <div class="massage-article-body">
                <p>
                    Тя не е само моментна почивка за тялото — тя е реален терапевтичен инструмент.
                    Редовните сесии подобряват кръвообращението, намаляват мускулното напрежение и ускоряват
                    възстановяването след натоварване, травма или дълго седене в офиса.
                </p>
                <p>
                    Освен физиологичните ползи, работата върху стойката и движението помага на тялото да се върне в
                    естествената си хармония. Чрез целенасочена работа върху проблемните зони помагаме за намаляване на болката и възпаленията.
                </p>
                <p>
                    Разбираме, че доверието се гради постепенно. Затова ви даваме възможност сами да проверите
                    текущото си състояние, преди да ни посетите.
                </p>
            </div>

            <div class="massage-article-actions">
                <a href="/kak-rabotim#proverka-stoika" class="massage-article-link">
                    Провери стойката си с камера
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
`;

export function HomePage(ctx) {
    ctx.render(DashboardTemplate());
}
