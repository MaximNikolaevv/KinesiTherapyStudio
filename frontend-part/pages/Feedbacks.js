import { html } from "../../node_modules/lit-html/lit-html.js";

let DashboardTemplate = () => html`
<section class="testimonials-section" id="otzivi">
  <div class="testimonials-inner">

    <p class="testimonials-eyebrow">Отзиви</p>
    <h2 class="testimonials-title">Какво споделят нашите пациенти</h2>
    <h3 class="testimonials-mini-title">Научете какво мислят клиентите ни за преживяването си с нас.</h3>

    <!-- Search + dropdown -->
    <div class="testimonials-search">
      <div class="search-input-wrap">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
          <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input
          type="text"
          id="massageSearch"
          class="search-input"
          placeholder="Търси по вид масаж..."
          autocomplete="off"
        />
        <button type="button" class="search-clear" id="searchClear" hidden>&times;</button>
      </div>

      <ul class="search-suggestions" id="searchSuggestions"></ul>
    </div>

    <!-- Динамично заглавие -->
    <h3 class="testimonials-results-title" id="resultsTitle" hidden></h3>

    <!-- Резултати -->
    <div class="testimonials-grid" id="testimonialsGrid">
      <!-- картите се генерират динамично от JS -->
    </div>

    <p class="testimonials-empty" id="testimonialsEmpty" hidden>
      Няма намерени отзиви за този вид масаж.
    </p>

  </div>
</section>`;


const MASSAGE_TYPES = [
  "Класически масаж",
  "Дълбокотъканен масаж",
  "Лечебен масаж",
  "Масаж на корем (ABS SCULPTING)",
  "Антицелулитен масаж"
];


export function Feedbacks(ctx) {

  ctx.render(DashboardTemplate());

  const searchInput = document.getElementById("massageSearch");
  const clearBtn = document.getElementById("searchClear");
  const suggestionsList = document.getElementById("searchSuggestions");
  const resultsTitle = document.getElementById("resultsTitle");
  const grid = document.getElementById("testimonialsGrid");
  const emptyMsg = document.getElementById("testimonialsEmpty");

  function renderSuggestions(query) {
    const normalizedQuery = query.trim().toLowerCase();

    const matches = MASSAGE_TYPES.filter(type =>
      type.toLowerCase().includes(normalizedQuery)
    );

    suggestionsList.innerHTML = "";


    if (matches.length === 0) {
      suggestionsList.innerHTML = `<li class="search-suggestions-empty">Няма съвпадения</li>`;
      return;
    }

    matches.forEach(type => {
      const li = document.createElement("li");
      li.dataset.value = type;

      if (normalizedQuery) {
        // escape-ваме query-то, за да не гръмне regex-ът при спец. символи като "("
        const escaped = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${escaped})`, "gi");
        li.innerHTML = type.replace(regex, "<mark>$1</mark>");
      } else {
        li.textContent = type;
      }

      li.addEventListener("click", () => selectMassageType(type));
      suggestionsList.appendChild(li);
    });
  }

  function openSuggestions() {
    suggestionsList.classList.add("is-open");
  }

  function closeSuggestions() {
    suggestionsList.classList.remove("is-open");
  }

  function selectMassageType(type) {
    searchInput.value = type;
    clearBtn.hidden = false;
    closeSuggestions();
    fetchTestimonials(type);
  }

  // ---------------------------------------------
  // Динамично заглавие "Нашите отзиви за ..."
  // ---------------------------------------------
  function updateResultsTitle(type) {
    if (!type) {
      resultsTitle.hidden = true;
      return;
    }

    resultsTitle.innerHTML = `Нашите отзиви за "<strong>${type}</strong>"`;
    resultsTitle.hidden = false;
  }

  // ---------------------------------------------
  // Fetch + render на самите карти
  // ---------------------------------------------
  async function fetchTestimonials(type) {
    const response = await fetch(`/api/testimonials?type=${encodeURIComponent(type)}`);
    const feedbacks = await response.json();

    updateResultsTitle(type);
    renderTestimonials(feedbacks);
  }

  function renderTestimonials(feedbacks) {
    grid.innerHTML = "";

    if (feedbacks.length === 0) {
      emptyMsg.hidden = false;
      return;
    }

    emptyMsg.hidden = true;

    feedbacks.forEach(f => {
      const card = document.createElement("article");
      card.className = "testimonial-card";
      card.innerHTML = `<img src="${f.imageUrl}" alt="Отзив за ${f.massageType}" loading="lazy" />`;
      grid.appendChild(card);
    });
  }

  // ---------------------------------------------
  // Event listeners
  // ---------------------------------------------
  searchInput.addEventListener("focus", () => { // focus Сработва, когато даден елемент получи фокус.
    renderSuggestions(searchInput.value);
    openSuggestions();
  });

  searchInput.addEventListener("input", () => { // Сработва, когато стойността на input-а се промени от потребителя.  
    const value = searchInput.value;
    clearBtn.hidden = value.length === 0;

    renderSuggestions(value);
    openSuggestions();

    const exactMatch = MASSAGE_TYPES.find(
      t => t.toLowerCase() === value.trim().toLowerCase()
    );

    if (exactMatch) {
      fetchTestimonials(exactMatch);
    } else {
      updateResultsTitle(null);
      grid.innerHTML = "";
      emptyMsg.hidden = true;
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.hidden = true;
    closeSuggestions();
    updateResultsTitle(null);
    grid.innerHTML = "";
    emptyMsg.hidden = true;
    searchInput.focus();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".testimonials-search")) {
      closeSuggestions();
    }
  });
}