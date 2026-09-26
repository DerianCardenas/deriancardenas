// =========================================
// THEME TOGGLE
// =========================================
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const savedTheme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
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
  themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
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


}

langBtn.addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es';
  setLanguage(next);
});

// Apply translations after initialization.

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
  const open = navLinksContainer.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

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
  btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.setAttribute('aria-pressed', 'true');
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
// Agrega aquí las rutas de las imágenes de cada proyecto.
// Coloca los archivos en assets/projects/<slug>/ y lista los nombres aquí.
// Si una lista está vacía [], el carrusel NO se mostrará en esa card.
// Formatos soportados: .png, .jpg, .jpeg, .webp
// =========================================
const PROJECT_IMAGES = {
  'dsignr':              [],
  'sicrop':              [],
  'cod':                 [],
  'u3m':                 [],
  'semov':               [],
  'sicsse':              [],
  'control-escolar-sej': [],
  'ganado':              [],
  'mifinanza':           [],
  'ai-agents':           [],
  'solitario':           [],
  'mangareader':         [],
  'gamesir':             [],
  'citasdigitales':      [],
  'comexcompras':        [],
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

// Full project cases progressively enhance the native HTML disclosures.
const projectDialog = document.getElementById('project-dialog');
const caseContent = document.getElementById('case-content');
let caseTrigger = null;

function initProjectCases() {
  if (typeof projectDialog.showModal !== 'function') return;
  projectCards.forEach(card => {
    const details = card.querySelector('.project-details');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'case-open';
    button.setAttribute('aria-haspopup', 'dialog');
    button.innerHTML = '<span data-i18n="project-details">Leer el caso completo</span><span class="material-symbols-outlined" aria-hidden="true">open_in_full</span>';
    details.after(button);
    details.hidden = true;
    button.addEventListener('click', () => openProjectCase(card, button));
  });
}

function openProjectCase(card, trigger) {
  caseTrigger = trigger;
  caseContent.replaceChildren();
  const title = document.createElement('h2');
  title.id = 'case-title';
  title.textContent = card.querySelector('.project-title').textContent;
  caseContent.append(title, card.querySelector('.project-summary-box').cloneNode(true), card.querySelector('.project-context').cloneNode(true));

  // Convert the original complete contributions into readable headings and lists.
  const source = card.querySelector('.project-desc').innerHTML;
  source.split(/<br\s*\/?>(?:\s*<br\s*\/?>)+/i).forEach(block => {
    const template = document.createElement('template');
    template.innerHTML = block.trim();
    const heading = template.content.firstElementChild;
    if (heading?.tagName === 'STRONG') {
      const h3 = document.createElement('h3');
      h3.innerHTML = heading.innerHTML;
      caseContent.append(h3);
      heading.remove();
    }
    const remainder = document.createElement('div');
    remainder.append(template.content);
    const lines = remainder.innerHTML.split(/<br\s*\/?>/i).map(line => line.trim()).filter(Boolean);
    let list = null;
    lines.forEach(line => {
      if (line.startsWith('•')) {
        if (!list) { list = document.createElement('ul'); caseContent.append(list); }
        const item = document.createElement('li');
        item.innerHTML = line.replace(/^•\s*/, '');
        list.append(item);
      } else {
        list = null;
        const paragraph = document.createElement('p');
        paragraph.innerHTML = line;
        caseContent.append(paragraph);
      }
    });
  });
  const stackHeading = document.createElement('h3');
  stackHeading.textContent = i18nData[currentLang]['case-tech'];
  caseContent.append(stackHeading, card.querySelector('.project-tech').cloneNode(true), card.querySelector('.project-footer').cloneNode(true));
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  document.getElementById('case-close').focus({ preventScroll: true });
}

document.getElementById('case-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('close', () => caseTrigger?.focus({ preventScroll: true }));
projectDialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...projectDialog.querySelectorAll('a[href], button, input, select, textarea, [tabindex]')]
    .filter(element => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length);
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
projectDialog.addEventListener('click', event => {
  const rect = projectDialog.getBoundingClientRect();
  if (event.target === projectDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) projectDialog.close();
});

// =========================================
// INITIALIZATION
// =========================================
function init() {
  initProjectCases();
  // Initialize language preference
  setLanguage(currentLang);
  
  // Initialize carousels
  initCarousels();
  

}

// Run init when everything is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =========================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinksContainer.classList.contains('open')) {
    navLinksContainer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
});
