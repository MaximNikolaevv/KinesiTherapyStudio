import { html } from "../../node_modules/lit-html/lit-html.js";



let DashboardTemplate = () => html`<section class="about-section" id="za-nas">
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

        </div>
    </section>`;

export function AboutUs(ctx) {

    ctx.render(DashboardTemplate())
}