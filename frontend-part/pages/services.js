import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = (services) => html`
<section class="uslugi-section">
    <div class="uslugi-header">
        <p class="uslugi-eyebrow">УСЛУГИ</p>
        <h2 class="uslugi-title">Терапии, съобразени с вашето тяло</h2>
        <p class="uslugi-subtitle">Всяка процедура е подбрана според вашите нужди — с грижа, опит и внимание към всеки детайл.</p>
    </div>

    <div class="uslugi-grid">
        ${services.map(service => html`
            <article class="uslugi-card">
                <div class="uslugi-card-image">
                    <img src="${service.image}" alt="${service.title}">
                </div>
                <div class="uslugi-card-body">
                    <h3 class="uslugi-card-title">${service.title}</h3>
                    <p class="uslugi-card-info">${service.info}</p>
                    <div class="uslugi-card-footer">
                        <span class="uslugi-card-price">${service.price}</span>
                        <a href="/contactUs" class="uslugi-card-link">
                            Запази час
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        `)}
    </div>
</section>
`;

export async function Services(ctx) {
    ctx.render(DashboardTemplate());

}