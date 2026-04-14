// =========================================
// THEME TOGGLE
// =========================================
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// =========================================
// LANGUAGE TOGGLE (i18n)
// =========================================
const langBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'es');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  
  // Update button text
  langBtn.textContent = lang.toUpperCase();

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Update typing animation roles
  updateRoles(lang);
}

langBtn.addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es';
  setLanguage(next);
});

// Initialize language
setLanguage(currentLang);

// =========================================
// NAV SCROLL
// =========================================
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// =========================================
// ACTIVE NAV LINK
// =========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// =========================================
// HAMBURGER MENU
// =========================================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinksContainer.classList.remove('open'));
});

// =========================================
// TYPING ANIMATION
// =========================================
let roles = [];

function updateRoles(lang) {
  roles = [
    i18nData[lang]['role-1'],
    i18nData[lang]['role-2'],
    i18nData[lang]['role-3'],
    i18nData[lang]['role-4'],
    i18nData[lang]['role-5'],
  ];
  // Reset if we are out of bounds after language switch
  if (roleIndex >= roles.length) roleIndex = 0;
}

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeLoop, delay);
}

typeLoop();

// =========================================
// FADE IN ON SCROLL
// =========================================
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => fadeObserver.observe(el));

// =========================================
// PROJECT FILTER
// =========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.classList.remove('hidden');
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// =========================================
// PROJECT IMAGE CAROUSELS
// =========================================
// 👇 Agrega aquí las rutas de las imágenes de cada proyecto.
// Coloca los archivos en assets/projects/<slug>/ y lista los nombres aquí.
// Si una lista está vacía [], el carrusel NO se mostrará en esa card.
// Formatos soportados: .png, .jpg, .jpeg, .webp
// =========================================
const PROJECT_IMAGES = {
  'mifinanza':           [],   // Ej: ['assets/projects/mifinanza/1.png', 'assets/projects/mifinanza/2.png']
  'ai-agents':           [],
  'solitario':           [],
  'semov':               [],
  'u3milenio':           [],
  'citasdigitales':      [],
  'comexcompras':        [],
  'sicsse':              [],
  'control-escolar-sej': [],
  'ganado':              [],
  'gamesir':             [],
};

function buildCarousel(images) {
  if (!images || images.length === 0) return null;

  const wrap = document.createElement('div');
  wrap.className = 'proj-carousel';

  const track = document.createElement('div');
  track.className = 'proj-carousel-track';

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'proj-carousel-slide' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Screenshot ${i + 1}`;
    img.loading = 'lazy';
    slide.appendChild(img);
    track.appendChild(slide);
  });

  wrap.appendChild(track);

  if (images.length > 1) {
    const controls = document.createElement('div');
    controls.className = 'proj-carousel-controls';

    const prev = document.createElement('button');
    prev.className = 'proj-carousel-btn';
    prev.innerHTML = '‹';
    prev.setAttribute('aria-label', 'Anterior');

    const dots = document.createElement('div');
    dots.className = 'proj-carousel-dots';
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'proj-carousel-dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dots.appendChild(dot);
    });

    const next = document.createElement('button');
    next.className = 'proj-carousel-btn';
    next.innerHTML = '›';
    next.setAttribute('aria-label', 'Siguiente');

    controls.appendChild(prev);
    controls.appendChild(dots);
    controls.appendChild(next);
    wrap.appendChild(controls);

    let current = 0;

    function goTo(index) {
      const slides = track.querySelectorAll('.proj-carousel-slide');
      const dotEls = dots.querySelectorAll('.proj-carousel-dot');
      slides[current].classList.remove('active');
      dotEls[current].classList.remove('active');
      current = (index + images.length) % images.length;
      slides[current].classList.add('active');
      dotEls[current].classList.add('active');
    }

    prev.addEventListener('click', () => goTo(current - 1));
    next.addEventListener('click', () => goTo(current + 1));

    dots.querySelectorAll('.proj-carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
    });
  }

  return wrap;
}

function initCarousels() {
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    const slug = card.dataset.project;
    const images = PROJECT_IMAGES[slug];
    if (!images || images.length === 0) return;

    const container = card.querySelector('.proj-carousel-container');
    if (!container) return;

    const carousel = buildCarousel(images);
    if (carousel) {
      container.appendChild(carousel);
      container.style.display = 'block';
    }
  });
}

initCarousels();

// =========================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
