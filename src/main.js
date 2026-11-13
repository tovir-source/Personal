import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { animate, stagger } from 'animejs';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

gsap.registerPlugin(ScrollTrigger);

const favorites = [
  ['01', 'Food & drinks', 'I like hamburgers, empanadas, and hot chocolate with cheese.', 'food'],
  ['02', 'Music', 'I like heavy metal and epic metal from Europe.', 'music'],
  ['03', 'Movies & TV', 'I like fantasy and science fiction stories.', 'fantasy'],
  ['04', 'Sports', 'I walk in the morning and listen to music or the news.', 'sports'],
  ['05', 'Activities', 'I like video games, computer design, and programming.', 'activities'],
  ['06', 'Favorite places', 'I like Bucaramanga, Santander, parks, cafés, and sport places.', 'places'],
  ['07', 'Dream destinations', 'I want to visit Norway, Sweden, Finland, New Zealand, and the UK.', 'travel'],
];

const favoriteDetails = {
  food: 'I like hamburgers and empanadas. My favorite drink is hot chocolate with fresh cheese.',
  music: 'I like Metallica, Iron Maiden, Slipknot, Sonata Arctica, and Rhapsody. My favorite song is “Dawn of Victory”.',
  fantasy: 'I like The Lord of the Rings, The Hobbit, Harry Potter, Marvel movies, and Futurama.',
  sports: 'I like walking in the morning at about 5:00 a.m. I listen to music or the news.',
  activities: 'I like video games, computer-aided design, and programming.',
  places: 'I like Bucaramanga and beautiful places in Santander: Chicamocha, La Mesa de los Santos, Barichara, Girón, and San Gil.',
  travel: 'I want to visit the Nordic countries, New Zealand, and the United Kingdom.',
};

const favoriteImageData = {
  food: { src: '/images/favorite-food.png', width: 768, height: 768, alt: 'Hamburger, empanadas, and hot chocolate' },
  music: { src: '/images/favorite-music.png', width: 768, height: 768, alt: 'Victor’s music collection' },
  fantasy: { src: '/images/favorite-fantasy.png', width: 768, height: 768, alt: 'Books, movies, and series collection' },
  sports: { src: '/images/favorite-sports.png', width: 1024, height: 768, alt: 'Victor at a sports field' },
  activities: { src: '/images/favorite-activities.png', width: 1024, height: 768, alt: 'Computer and design workspace' },
  places: { src: '/images/favorite-places.png', width: 768, height: 768, alt: 'Travel photos from Santander' },
  travel: { src: '/images/favorite-travel.png', width: 768, height: 768, alt: 'Travel plans for dream destinations' },
};
const favoriteKeys = Object.keys(favoriteImageData);

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="scroll-progress" aria-hidden="true"></div>
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Victor Alfonso home"><span>V.A.D.B.</span><small>PERSONAL WEBSITE</small></a>
    <div class="header-actions">
      <button class="language-toggle" type="button" aria-label="Switch to Spanish">ES</button>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu <span>+</span></button>
    </div>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      <a href="#about">About me <span>01</span></a>
      <a href="#favorites">My favorites <span>02</span></a>
      <a href="#goals">My goals <span>03</span></a>
      <a href="#video">My video <span>04</span></a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">PERSONAL WEBSITE / SENA / 2026</p>
        <h1><span class="hero-line">Hello,</span><span class="hero-line"><em>I'm Victor.</em></span></h1>
        <p class="hero-role">I am a software development student.</p>
        <p class="hero-intro">I live in Ipiales, Colombia.<br />I like technology, design, and web pages.</p>
        <a class="text-link" href="#about">Learn more about me <span>↓</span></a>
      </div>
      <div class="hero-visual reveal">
        <div class="portrait-frame">
          <img src="/images/profile.jpg" alt="Victor Alfonso Delgado Bolaños" onerror="this.style.display='none'; this.parentElement.classList.add('is-placeholder')" />
          <span class="image-fallback">YOUR<br />PHOTO</span>
        </div>
        <div class="hero-meta">
          <img src="/images/sena-logo.png" alt="SENA logo" onerror="this.style.display='none'; this.nextElementSibling.hidden=false" />
          <span hidden>SENA<br />LOGO</span>
          <p>SENA<br />ADSO / CSCLI</p>
        </div>
      </div>
      <div class="hero-foot"><span>Scroll to explore</span><span>Ipiales, Nariño — Colombia</span><span>↓</span></div>
    </section>

    <section id="about" class="content-section section-shell">
      <div class="section-heading reveal"><span class="section-number">01 /</span><h2>About<br /><em>me.</em></h2></div>
      <div class="about-grid">
        <aside class="fact-list reveal">
          <div><span>Full name</span><strong>Victor Alfonso<br />Delgado Bolaños</strong></div>
          <div><span>Age</span><strong>I am 33</strong></div>
          <div><span>From / based in</span><strong>Ipiales, Nariño<br />Colombia</strong></div>
          <div><span>Studies</span><strong>Software Analysis<br />&amp; Development (ADSO)</strong></div>
          <div><span>Institution</span><strong>SENA — CSCLI</strong></div>
        </aside>
        <div class="prose reveal">
          <p class="lead">Hello! My name is Victor Alfonso Delgado Bolaños. I am 33 and I am from Ipiales, Colombia.</p>
          <p>I live with my mother, my grandparents, my uncles, my aunt, my cousin, and our two dogs.</p>
          <p>I study Software Analysis and Development at SENA, at the CSCLI center.</p>
          <p>I chose this program because I like technology. I enjoy web development and digital tools.</p>
          <p>I am responsible, curious, and hardworking. I like to learn, solve problems, and work with other people.</p>
        </div>
      </div>
    </section>

    <section id="favorites" class="content-section favorites-section section-shell">
      <div class="section-heading reveal"><span class="section-number">02 /</span><h2>Things I<br /><em>like.</em></h2></div>
      <div class="favorites-layout">
        <div class="favorite-list" role="list">
          ${favorites.map(([number, title, summary, key]) => `<button class="favorite-row reveal" data-favorite="${key}" role="listitem"><span class="row-number">${number}</span><span class="row-title">${title}</span><span class="row-summary">${summary}</span><span class="row-arrow">↗</span></button>`).join('')}
        </div>
        <div class="favorite-detail" aria-live="polite">
          <span class="detail-label">Selected interest</span>
          <div class="detail-visual" data-detail-image="food"><span>FOOD<br />&amp; DRINKS</span></div>
          <p>${favoriteDetails.food}</p>
        </div>
      </div>
    </section>

    <section id="goals" class="content-section goals-section section-shell">
      <div class="section-heading reveal"><span class="section-number">03 /</span><h2>My<br /><em>future.</em></h2></div>
      <div class="goal-list">
        <article class="goal reveal"><span class="goal-number">01</span><div><h3>Personal</h3><p>I want to keep learning and become a better person. I want to stay healthy with sports, especially swimming.</p><p>I also want to travel, see new places, and go to concerts.</p></div></article>
        <article class="goal reveal"><span class="goal-number">02</span><div><h3>Academic</h3><p>I want to finish my ADSO program at SENA. I want to improve my English and learn more about web development, databases, and software.</p><p>Later, I want to take more courses or study at university.</p></div></article>
        <article class="goal reveal"><span class="goal-number">03</span><div><h3>Professional</h3><p>I want to become a good software developer. I want to work on websites, apps, and digital projects.</p><p>I want to use programming and design to create useful solutions.</p></div></article>
      </div>
      <div class="vision reveal"><span class="section-number">MY FIVE-YEAR VISION</span><p>In five years, I want to work in technology, create good projects, speak better English, and grow as a person.</p><span class="vision-mark">→</span></div>
    </section>

    <section id="video" class="content-section video-section section-shell">
      <div class="section-heading reveal"><span class="section-number">04 /</span><h2>My<br /><em>video.</em></h2><p>Here I talk about my life and my goals.</p></div>
      <div class="video-frame reveal">
        <video controls preload="metadata" poster="/images/video-poster.jpg"><source src="/videos/my-introduction.mp4" type="video/mp4" /></video>
        <div class="video-fallback"><span class="play-mark">▶</span><p>My introduction video<br /><small>Add /videos/my-introduction.mp4 to play it.</small></p></div>
      </div>
      <p class="video-caption">In this video, I talk about me, my interests, my studies, and my goals.</p>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <div><span class="section-number">THANK YOU FOR VISITING</span><p class="footer-name">Victor Alfonso<br /><em>Delgado Bolaños</em></p></div>
    <div class="footer-meta"><p>PERSONAL WEBSITE / SENA / 2026</p><p>IPIALES, NARIÑO — COLOMBIA</p><a href="#home">Back to top ↑</a></div>
  </footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const languageToggle = document.querySelector('.language-toggle');
const favoriteVisual = document.querySelector('.detail-visual');
const favoriteTitles = Object.fromEntries(favorites.map(([, title, , key]) => [key, title]));
const photoSwipeLightbox = new PhotoSwipeLightbox({
  dataSource: favoriteKeys.map((key) => favoriteImageData[key]),
  pswpModule: () => import('photoswipe'),
});
photoSwipeLightbox.on('uiRegister', () => {
  const pswp = photoSwipeLightbox.pswp;
  pswp.ui.registerElement({
    name: 'favorite-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    onInit: (element) => {
      const title = document.createElement('strong');
      const copy = document.createElement('span');
      element.append(title, copy);

      const updateCaption = () => {
        const key = favoriteKeys[pswp.currIndex];
        title.textContent = favoriteTitles[key];
        copy.textContent = favoriteDetailsByLanguage[currentLanguage][key];
      };

      pswp.on('change', updateCaption);
      updateCaption();
    },
  });
});
photoSwipeLightbox.init();
favoriteVisual.setAttribute('role', 'button');
favoriteVisual.setAttribute('tabindex', '0');
favoriteVisual.setAttribute('aria-label', 'Open favorite image gallery');
const openFavoriteGallery = () => photoSwipeLightbox.loadAndOpen(favoriteKeys.indexOf(activeFavoriteKey));
favoriteVisual.addEventListener('click', openFavoriteGallery);
favoriteVisual.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openFavoriteGallery();
  }
});
let currentLanguage = 'en';
let activeFavoriteKey = 'food';

const spanishTranslations = new Map([
  ['.wordmark small', ['SITIO PERSONAL']],
  ['.language-toggle', ['EN']],
  ['.menu-toggle', ['Menú <span>+</span>']],
  ['.site-nav a', ['Sobre mí <span>01</span>', 'Mis favoritos <span>02</span>', 'Mis metas <span>03</span>', 'Mi video <span>04</span>']],
  ['.eyebrow', ['SITIO PERSONAL / SENA / 2026']],
  ['.hero h1', ['Hola,<br /><em>soy Víctor.</em>']],
  ['.hero-role', ['Estudiante de desarrollo de software.']],
  ['.hero-intro', ['Desde Ipiales, Colombia.<br />Explorando la tecnología, la creatividad y las experiencias digitales.']],
  ['.text-link', ['Descubre más <span>↓</span>']],
  ['.hero-foot', ['<span>Desplázate para explorar</span><span>Ipiales, Nariño — Colombia</span><span>↓</span>']],
  ['#about .section-number', ['01 /']],
  ['#about h2', ['Un poco sobre<br /><em>mí.</em>']],
  ['.fact-list div span', ['Nombre completo', 'Edad', 'De / vivo en', 'Estudios', 'Institución']],
  ['.fact-list div strong', ['Víctor Alfonso<br />Delgado Bolaños', '33 años', 'Ipiales, Nariño<br />Colombia', 'Análisis y Desarrollo<br />de Software (ADSO)', 'SENA — CSCLI']],
  ['.prose p', [
    '¡Hola! Mi nombre es Víctor Alfonso Delgado Bolaños. Tengo 33 años y soy de Ipiales, Nariño, Colombia.',
    'Vivo con mi madre, mis abuelos, dos tíos, una tía, un primo y nuestros dos perros.',
    'Soy estudiante del SENA y estudio Análisis y Desarrollo de Software (ADSO) en el Centro Sur Colombiano de Logística Internacional (CSCLI).',
    'Elegí este programa porque me interesa cómo la tecnología puede mejorar procesos y resolver problemas del mundo real. Disfruto especialmente el desarrollo web y las herramientas digitales.',
    'Me considero analítico, responsable, perseverante y curioso. Me gusta planificar mi trabajo, resolver problemas y seguir aprendiendo. También valoro el respeto, la comunicación clara y el trabajo en equipo.',
  ]],
  ['#favorites .section-number', ['02 /']],
  ['#favorites h2', ['Cosas que<br /><em>me inspiran.</em>']],
  ['.favorite-row .row-title', ['Comida y bebidas', 'Música', 'Películas y TV', 'Deportes', 'Actividades', 'Lugares favoritos', 'Destinos soñados']],
  ['.favorite-row .row-summary', [
    'Hamburguesas, empanadas y chocolate caliente con queso de hoja.',
    'Metal pesado, metal épico y sonidos inspirados en los países nórdicos.',
    'Mundos de fantasía y ciencia ficción, desde la Tierra Media hasta Futurama.',
    'Salir a caminar escuchando música o las noticias temprano en la mañana.',
    'Videojuegos, diseño asistido por computadora y programación.',
    'Bucaramanga, Santander, parques naturales, cafés y escenarios deportivos.',
    'Noruega, Suecia, Finlandia, Nueva Zelanda y el Reino Unido.',
  ]],
  ['.detail-label', ['Interés seleccionado']],
  ['#goals .section-number', ['03 /']],
  ['#goals h2', ['Construyendo<br /><em>mi futuro.</em>']],
  ['.goal h3', ['Personal', 'Académico', 'Profesional']],
  ['.goal p', [
    'Quiero seguir aprendiendo, mejorar mis habilidades y ser una mejor persona. Quiero mantener un estilo de vida saludable mediante el deporte, especialmente la natación, mientras equilibro mis proyectos y mi tiempo libre.',
    'También sueño con viajar, conocer nuevos lugares y asistir a conciertos de mis bandas favoritas.',
    'Mi principal meta académica es completar con éxito mi programa ADSO en el SENA. Quiero mejorar mi inglés y seguir aprendiendo sobre desarrollo web, tecnologías emergentes, bases de datos y arquitectura de software.',
    'En el futuro, me gustaría continuar mi formación mediante cursos avanzados o estudios superiores.',
    'Mi meta profesional es convertirme en un desarrollador de software competente. Me gustaría trabajar en sitios web, aplicaciones y experiencias digitales interactivas e innovadoras.',
    'Quiero combinar la programación, la resolución de problemas y el diseño visual para crear soluciones tecnológicas útiles y creativas.',
  ]],
  ['.vision .section-number', ['MI VISIÓN A CINCO AÑOS']],
  ['.vision p', ['En cinco años, me veo trabajando en la industria tecnológica, desarrollando proyectos interesantes, mejorando mi inglés y creciendo continuamente tanto profesional como personalmente.']],
  ['#video .section-number', ['04 /']],
  ['#video h2', ['Conóceme<br /><em>a mí.</em>']],
  ['#video .section-heading > p', ['Una breve introducción a mi mundo.']],
  ['.video-fallback p', ['Mi video de presentación<br /><small>Agrega /videos/my-introduction.mp4 para activar este reproductor.</small>']],
  ['.video-caption', ['Conóceme, mis intereses, mis estudios y mis metas futuras a través de esta breve presentación.']],
  ['.site-footer .section-number', ['GRACIAS POR VISITAR']],
  ['.footer-meta p', ['SITIO PERSONAL / SENA / 2026', 'IPIALES, NARIÑO — COLOMBIA']],
  ['.footer-meta a', ['Volver arriba ↑']],
]);

const englishMarkup = new Map([...spanishTranslations.keys()].map((selector) => [
  selector,
  [...document.querySelectorAll(selector)].map((element) => element.innerHTML),
]));

const favoriteDetailsByLanguage = {
  en: favoriteDetails,
  es: {
    food: 'Me gustan mucho las hamburguesas y los diferentes tipos de empanadas. Mi bebida favorita es el chocolate caliente con queso de hoja.',
    music: 'Disfruto Metallica, Iron Maiden, Slipknot, Sonata Arctica y Rhapsody. Una de mis canciones favoritas es “Dawn of Victory” de Rhapsody.',
    fantasy: 'Me encantan El Señor de los Anillos, El Hobbit, Harry Potter, las películas de Marvel y Futurama por sus mundos imaginativos y personajes memorables.',
    sports: 'Me gusta salir a caminar escuchando música o las noticias en las mañanas, aproximadamente a las 5:00 a. m.',
    activities: 'Me gustan los videojuegos, el diseño asistido por computadora y la programación.',
    places: 'Me gustan Bucaramanga y los hermosos destinos de Santander: Chicamocha, La Mesa de los Santos, Cerro del Santísimo, Barichara, Girón y San Gil.',
    travel: 'Me gustaría visitar los países nórdicos por sus paisajes y cultura musical, Nueva Zelanda por sus escenarios cinematográficos y el Reino Unido.',
  },
};

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  spanishTranslations.forEach((spanishMarkup, selector) => {
    const values = language === 'es' ? spanishMarkup : englishMarkup.get(selector);
    document.querySelectorAll(selector).forEach((element, index) => {
      element.innerHTML = values[index] ?? values[0];
    });
  });
  languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
  const activeFavorite = document.querySelector(`.favorite-row[data-favorite="${activeFavoriteKey}"]`);
  if (activeFavorite) {
    const detailVisual = document.querySelector('.detail-visual');
    detailVisual.querySelector('span').textContent = activeFavorite.querySelector('.row-title').textContent.toUpperCase();
    detailVisual.dataset.detailImage = activeFavoriteKey;
    document.querySelector('.favorite-detail p').textContent = favoriteDetailsByLanguage[language][activeFavoriteKey];
  }
}

languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'es' : 'en'));
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('span').textContent = isOpen ? '×' : '+';
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('span').textContent = '+';
}));

const detail = document.querySelector('.favorite-detail');
document.querySelectorAll('.favorite-row').forEach((row) => {
  row.addEventListener('mouseenter', () => updateFavorite(row));
  row.addEventListener('focus', () => updateFavorite(row));
  row.addEventListener('click', () => updateFavorite(row));
});
function updateFavorite(row) {
  const key = row.dataset.favorite;
  activeFavoriteKey = key;
  document.querySelectorAll('.favorite-row').forEach((item) => item.classList.toggle('is-active', item === row));
  const visual = detail.querySelector('.detail-visual');
  const visualLabel = visual.querySelector('span');
  const detailCopy = detail.querySelector('p');
  const nextLabel = row.querySelector('.row-title').textContent.toUpperCase();
  const nextCopy = favoriteDetailsByLanguage[currentLanguage][key];
  if (prefersReducedMotion) {
    visual.dataset.detailImage = key;
    visualLabel.textContent = nextLabel;
    detailCopy.textContent = nextCopy;
    return;
  }
  animate([visual, detailCopy], {
    opacity: [1, 0],
    scale: [1, 0.97],
    duration: 180,
    ease: 'in(2)',
    onComplete: () => {
      visual.dataset.detailImage = key;
      visualLabel.textContent = nextLabel;
      detailCopy.textContent = nextCopy;
      animate([visual, detailCopy], {
        opacity: [0, 1],
        scale: [0.97, 1],
        duration: 420,
        delay: stagger(45),
        ease: 'out(4)',
      });
    },
  });
}

const videoFrame = document.querySelector('.video-frame');
const video = videoFrame.querySelector('video');
video.addEventListener('loadeddata', () => videoFrame.classList.add('video-ready'));

const progress = document.querySelector('.scroll-progress');
const navLinks = document.querySelectorAll('.site-nav a');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  document.querySelectorAll('.favorite-row').forEach((row) => {
    const arrow = row.querySelector('.row-arrow');
    row.addEventListener('mouseenter', () => animate(arrow, { translateX: 7, rotate: -12, duration: 360, ease: 'out(3)' }));
    row.addEventListener('mouseleave', () => animate(arrow, { translateX: 0, rotate: 0, duration: 420, ease: 'out(3)' }));
  });
  document.querySelectorAll('.text-link, .footer-meta a').forEach((link) => {
    link.addEventListener('mouseenter', () => animate(link, { letterSpacing: '0.16em', duration: 280, ease: 'out(2)' }));
    link.addEventListener('mouseleave', () => animate(link, { letterSpacing: '0.08em', duration: 320, ease: 'out(2)' }));
  });
  animate('.hero-foot span:last-child', {
    translateY: [0, 8],
    opacity: [1, 0.35],
    duration: 850,
    direction: 'alternate',
    loop: true,
    ease: 'inOutSine',
  });
}

if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  document.querySelectorAll('.content-section .section-heading h2').forEach((heading) => {
    gsap.fromTo(heading, { opacity: 1 }, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: heading.closest('.content-section'),
        start: 'top 80%',
        end: 'top 35%',
        scrub: true,
      },
    });
  });
  gsap.fromTo('.vision, .video-frame', { opacity: 1 }, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.video-section', start: 'top 85%', end: 'top 45%', scrub: true },
  });
} else {
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTimeline
    .from('.site-header', { yPercent: -100, opacity: 0, duration: 0.8 })
    .from('.hero-line', { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1, ease: 'power4.out' }, '-=0.3')
    .from('.hero-role, .hero-intro, .hero-copy .text-link', { y: 22, stagger: 0.1, duration: 0.65 }, '-=0.45')
    .from('.hero-visual', { y: 30, duration: 0.7 }, '-=0.55')
    .from('.hero-foot', { y: 10, duration: 0.4 }, '-=0.25');

  gsap.to('.portrait-frame', {
    yPercent: -7,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero-copy', {
    yPercent: -10,
    opacity: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  document.querySelectorAll('.content-section').forEach((section) => {
    const heading = section.querySelector('.section-heading');
    const revealItems = section.querySelectorAll('.reveal');
    gsap.fromTo(revealItems, { y: 42, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: { trigger: section, start: 'top 78%', once: true },
    });
    if (heading) {
      gsap.from(heading.querySelector('.section-number'), {
        x: -18,
        opacity: 0,
        duration: 0.7,
        immediateRender: false,
        scrollTrigger: { trigger: section, start: 'top 82%', once: true },
      });
      gsap.fromTo(heading.querySelector('h2'),
        { y: 80, opacity: 1 },
        {
          y: -35,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
    }
  });

  gsap.fromTo('.fact-list', { y: 70 }, {
    y: -35,
    ease: 'none',
    scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1 },
  });
  gsap.fromTo('.prose', { y: 35 }, {
    y: -45,
    ease: 'none',
    scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1 },
  });
  gsap.fromTo('.favorite-list', { y: 55 }, {
    y: -25,
    ease: 'none',
    scrollTrigger: { trigger: '#favorites', start: 'top bottom', end: 'bottom top', scrub: 1 },
  });
  gsap.fromTo('.goal-list', { y: 45 }, {
    y: -30,
    ease: 'none',
    scrollTrigger: { trigger: '#goals', start: 'top bottom', end: 'bottom top', scrub: 1 },
  });

  const responsiveAnimations = gsap.matchMedia();
  responsiveAnimations.add('(min-width: 761px)', () => {
    ScrollTrigger.create({
      trigger: '.favorites-layout',
      start: 'top 18%',
      end: 'bottom 78%',
      pin: '.favorite-detail',
      pinSpacing: false,
    });
  });

  gsap.from('.vision', {
    scale: 0.97,
    opacity: 0,
    duration: 1,
    immediateRender: false,
    scrollTrigger: { trigger: '.vision', start: 'top 80%', once: true },
  });
  gsap.to('.detail-visual', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: '.favorites-layout', start: 'top bottom', end: 'bottom top', scrub: true },
  });
  gsap.from('.video-frame', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.1,
    ease: 'power3.inOut',
    scrollTrigger: { trigger: '.video-frame', start: 'top 78%', once: true },
  });
  gsap.from('.footer-name', {
    y: 35,
    opacity: 0,
    duration: 0.9,
    immediateRender: false,
    scrollTrigger: { trigger: '.site-footer', start: 'top 85%', once: true },
  });

  document.querySelectorAll('main section').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 45%',
      end: 'bottom 45%',
      onToggle: ({ isActive }) => {
        if (isActive) navLinks.forEach((link) => link.classList.toggle('is-active', link.hash === `#${section.id}`));
      },
    });
  });

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: ({ progress: scrollProgress }) => { progress.style.transform = `scaleX(${scrollProgress})`; },
  });
}

const updateScrollUi = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) progress.style.transform = `scaleX(${window.scrollY / maxScroll})`;
};
window.addEventListener('scroll', updateScrollUi, { passive: true });
navLinks[0]?.classList.add('is-active');
updateScrollUi();

const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
document.querySelectorAll('main section').forEach((section) => activeSectionObserver.observe(section));
