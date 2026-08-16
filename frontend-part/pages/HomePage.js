import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = () => html`<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>КинезиЦентър — Кинезитерапия и рехабилитация</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="home-preview.css" />
</head>
<body>

<main>

    <!-- ============================================
         Hero — снимков фон, преливащ в фона на страницата
         ============================================ -->
    <section class="hero-photo">
        <div class="hero-photo-overlay"></div>
        <div class="hero-photo-fade-top"></div>
        <div class="hero-photo-fade"></div>
        <div class="hero-photo-content">
            <h1 class="hero-photo-title">
                Добре дошли в света на кинезитерапията
            </h1>
            <p class="hero-photo-subtitle">
                Професионална грижа за вашето тяло и възстановяване
            </p>
            <a href="/zapazi-chas" class="hero-photo-cta">Запази час за преглед</a>
        </div>
    </section>

    <!-- ============================================
         Motivation box
         ============================================ -->
    <section class="motivation-box">
        <div class="motivation-box-inner">
            <h2 class="motivation-eyebrow">Готови за промяна?</h2>
            <p class="motivation-title">
                Всяко тяло заслужава шанс да се движи без болка
            </p>
            <p class="motivation-text">
                Независимо дали се възстановявате от травма, борите се с хронична болка
                или просто искате да се чувствате по-добре в тялото си — ние сме тук,
                за да вървим заедно с вас към възстановяването.
            </p>
            <a href="/zapazi-chas" class="button button--primary motivation-cta">Запази час</a>
        </div>
    </section>

    <!-- ============================================
         Защо масажът е важен — статия
         ============================================ -->
    <section class="massage-article">
        <div class="massage-article-inner">

            <p class="massage-article-eyebrow">Защо е важно</p>
            <h2 class="massage-article-title">Защо масажът е повече от просто отпускане</h2>

            <div class="massage-article-body">
                <p>
                    Масажът не е само моментна почивка за тялото — той е реален
                    терапевтичен инструмент. Редовните масажни сесии подобряват
                    кръвообращението, намаляват мускулното напрежение и ускоряват
                    възстановяването след физическо натоварване или травма.
                </p>
                <p>
                    Освен физическите ползи, масажът играе ключова роля и за
                    правилната стойка — напрегнатите мускули често са причината
                    за изкривявания в раменете и врата, които с времето водят до
                    хронична болка. Чрез целенасочена работа върху проблемните
                    зони, помагаме на тялото да се върне в естествения си баланс.
                </p>
                <p>
                    Разбираме, че доверието се гради постепенно. Затова ви даваме
                    възможност сами да проверите текущото си състояние, преди дори
                    да сте стъпили в кабинета ни.
                </p>
            </div>

            <div class="massage-article-actions">

                <a href="/kak-rabotim#kalkulator" class="button button--primary massage-article-btn">
                    Провери своята мобилност
                </a>

                <a href="/kak-rabotim#proverka-stoika" class="massage-article-link">
                    Провери стойката си с камера
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>

            </div>

        </div>
    </section>

</main>

</body>
</html>`;




export function HomePage(ctx) {

    ctx.render(DashboardTemplate())
}