import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = () => html`
    <main>
 
    <!-- ============================================
             Hero — заглавие на страницата
             ============================================ -->
        <section class="contact-hero">
            <div class="contact-hero-inner">
            <p class="contact-eyebrow">Свържете се с нас</p>
                <h1 class="contact-title">Тук сме, за да помогнем</h1>
                <p class="contact-subtitle">
                    Имате въпрос за терапия, искате да запазите час, или просто
                    искате да научите повече — пишете ни или ни се обадете.
                    </p>
            </div>
            </section>
            
            <!-- ============================================
            Основно съдържание — форма + информация
            ============================================ -->
        <section class="contact-main">
        <div class="contact-main-inner">
 
                <!-- Форма за контакт -->
                <div class="contact-form-card">
                    <h2 class="contact-form-title">Изпратете съобщение</h2>
                    <p class="contact-form-intro">
                        Попълнете формата и ще се свържем с вас възможно най-скоро.
                        </p>
 
                    <form class="contact-form" id="contactForm">
                    
                    <div class="contact-field">
                            <label for="name">Име</label>
                            <input type="text" id="name" name="name" placeholder="Вашето име" required />
                        </div>
                        
                        <div class="contact-field">
                            <label for="phone">Телефон</label>
                            <input type="tel" id="phone" name="phone" placeholder="+359 XX XXX XXXX" required />
                            </div>
 
                            <div class="contact-field">
                            <label for="email">Имейл</label>
                            <input type="email" id="email" name="email" placeholder="you@example.com" required />
                            </div>
 
                            <div class="contact-field">
                            <label for="massageType">Вид масаж / Пакет от масажи </label>
                            <select id="massageType" name="massageType" required>
                                <option value="" disabled selected>Изберете вид масаж или пакет от масажи</option>
                            </select>
                            </div>
 
                            <div class="contact-field">
                            <label for="date">Предпочитана дата</label>
                            <input type="date" id="date" name="date" required />
                            </div>
                            
                            <div class="contact-field">
                            <label for="message">Съобщение</label>
                            <textarea id="message" name="message" rows="5" placeholder="Опишете накратко въпроса или проблема си..." required></textarea>
                            </div>
 
                        <button type="submit" class="button button--primary contact-submit">
                        Изпрати съобщение
                        </button>
                        
                    </form>
                </div>
                
                <!-- Контактна информация -->
                <div class="contact-info-card">
 
                <div class="contact-info-block">
                        <div class="contact-info-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                        <div>
                            <h3 class="contact-info-heading">Телефон</h3>
                            <a href="tel:+359899942522" class="contact-info-link">+359 899 942 522</a>
                            <a href="tel:+359878886816" class="contact-info-link">+359 878 886 816</a>
                            </div>
                    </div>
                    
                    <div class="contact-info-block">
                        <div class="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6.5h18v11H3v-11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                            <path d="M3.5 7 12 13l8.5-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="contact-info-heading">Имейл</h3>
                            <a href="alexxnikolaevv@abv.bg" class="contact-info-link">alexxnikolaevv@abv.bg</a>
                        </div>
                    </div>
 
                    <div class="contact-info-block">
                        <div class="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                                <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.6"/>
                            </svg>
                            </div>
                        <div>
                            <h3 class="contact-info-heading">Адрес</h3>
                            <a href="https://maps.app.goo.gl/Xi6UMKKXbUQ9y9Uq6" target="_blank" rel="noopener noreferrer" class="contact-info-link">
                                Монте Карло, ул. „8-ми март“ 231
                                </a>
                        </div>
                        </div>
                        
                        <div class="contact-info-block">
                        <div class="contact-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
                                <path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </div>
                                <div>
                                <h3 class="contact-info-heading">Работно време</h3>
                                <p class="contact-info-text">Понеделник – Неделя<br>10:00 – 20:00</p>
                                </div>
                                </div>
 
                                </div>
 
                                </div>
                                </section>
                                
                                <!-- ============================================
             Карта
             ============================================ -->
             
             <section class="contact-map"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2936.553214520186!2d23.030256000000005!3d42.60722200000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aacac3b9817041%3A0xed10c30cdb0642df!2z0JzQvtC90YLQtSDQmtCw0YDQu9C-LCDRg9C7LiDigJ44LdC80Lgg0LzQsNGA0YLigJwgMjMxLCAyMzA2INCf0LXRgNC90LjQug!5e0!3m2!1sbg!2sbg!4v1784825979626!5m2!1sbg!2sbg" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        
    </main>
    
    `;

export function ContactUs(ctx) {
    ctx.render(DashboardTemplate());

    populateMassageOptions();

    document.getElementById("contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        sendEmail();
    });

    // ============================================
    // Динамично зареждане на видовете масажи в select-а
    // ============================================
    async function populateMassageOptions() {
        const select = document.getElementById("massageType");

        const response = await fetch(`/api/services`);
        const services = await response.json();

        services.forEach(service => {
            const option = document.createElement("option");
            option.value = service.title;
            option.textContent = `${service.title} — ${service.price}`;
            select.appendChild(option);
        });
    }

    function sendEmail() {
        let params = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            massageType: document.getElementById("massageType").value,
            date: document.getElementById("date").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_lfwqigc", "template_4b82nol", params)
            .then(() => {
                // 2. Auto-reply към клиента (нов Template ID тук)
                emailjs.send("service_lfwqigc", "template_8ffxqvd", params);
            })
            .then(() => {
                alert("Съобщението е изпратено успешно!");
                document.getElementById("contactForm").reset();
            })
            .catch((error) => {
                console.error("Грешка при изпращане:", error);
                alert("Възникна грешка при изпращането. Моля, опитайте отново.");
            });
    }
}