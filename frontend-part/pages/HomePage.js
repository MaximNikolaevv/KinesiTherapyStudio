import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = () => html`

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

        </div>
    </section>

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

            <!-- Бутон, който показва калкулатора -->
            <button type="button" class="button button--primary" id="showCalculatorBtn">
                Провери моята мобилност
            </button>

            <!-- Калкулатор за мобилност, вграден в секция "Как работим" -->
            <div class="calculator-box" id="kalkulator" hidden>
                <p class="calculator-eyebrow">Тест за мобилност</p>
                <h3 class="calculator-title">Провери нивото си на мобилност</h3>
                <p class="calculator-intro">
                    Отговори на няколко кратки въпроса и получи ориентировъчна оценка
                    на твоята подвижност, както и препоръка дали е добре да запазиш час
                    за преглед.
                </p>

                <form class="calculator-form" id="mobilityCalculator">

                    <div class="calculator-field">
                        <label for="age">Възраст</label>
                        <input type="number" id="age" name="age" min="1" max="120" placeholder="напр. 34" required />
                    </div>

                    <div class="calculator-field">
                        <label for="painLevel">Ниво на болка (0 – без болка, 10 – силна болка)</label>
                        <input type="range" id="painLevel" name="painLevel" min="0" max="10" value="0" />
                    </div>

                    <div class="calculator-field">
                        <label for="activityLevel">Ниво на физическа активност</label>
                        <select id="activityLevel" name="activityLevel">
                            <option value="low">Ниско (заседнал начин на живот)</option>
                            <option value="medium">Средно (леки тренировки 1–2 пъти седмично)</option>
                            <option value="high">Високо (редовни тренировки, спорт)</option>
                        </select>
                    </div>

                    <div class="calculator-field">
                        <label for="limitation">Има ли движение, което ти е трудно да извършиш?</label>
                        <select id="limitation" name="limitation">
                            <option value="none">Не</option>
                            <option value="bending">Навеждане</option>
                            <option value="lifting">Повдигане на тежести</option>
                            <option value="walking">Продължително ходене</option>
                            <option value="sitting">Продължително седене</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary calculator-btn">Изчисли моята мобилност</button>

                </form>

                <div class="calculator-result" id="calculatorResult" hidden>
                    <!-- Резултатът от изчислението ще се показва тук -->
                </div>
            </div>

        </div>

    </section>





`;




export function HomePage(ctx) {

    ctx.render(DashboardTemplate())
}