/* =============================================
   PORTFOLIO - MAIN JAVASCRIPT
   Andrian Junior Karloy's Ng
   ============================================= */

// ==========================================
// TRANSLATIONS (BILINGUAL EN / ID)
// ==========================================
const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hello, I'm",
    'hero.iAm': "I'm a ",
    'hero.description': 'Building scalable, high-performance web applications with modern technologies. Passionate about clean code and exceptional user experiences.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.scroll': 'Scroll Down',

    // About
    'about.tag': 'Get to know me',
    'about.title': 'About Me',
    'about.subtitle': 'Full Stack Developer with a Passion for Innovation',
    'about.text1': "I'm a dedicated Full Stack Developer with expertise in building robust, scalable web applications. My journey in software development has equipped me with a deep understanding of both frontend and backend technologies.",
    'about.text2': 'I specialize in crafting seamless user experiences with React and Next.js on the frontend, while building powerful backend services with Golang. My experience with cloud technologies like GCP and containerization with Docker allows me to deliver production-ready solutions.',
    'about.stat1': 'Projects Completed',
    'about.stat2': 'Years Experience',
    'about.stat4': 'Technologies',
    'about.cta': "Let's Work Together",

    // Skills
    'skills.tag': 'What I work with',
    'skills.title': 'Skills & Technologies',
    'skills.react': 'Building interactive, component-based user interfaces with modern React patterns and hooks.',
    'skills.nextjs': 'Server-side rendering, static generation, and full-stack React applications with optimized performance.',
    'skills.golang': 'High-performance backend services, RESTful APIs, and concurrent programming with Go.',
    'skills.mysql': 'Relational database design, query optimization, and scalable data management solutions.',
    'skills.sqlserver': 'Enterprise-level database solutions with advanced stored procedures and performance tuning.',
    'skills.gcp': 'Cloud infrastructure, serverless computing, and scalable deployment on Google Cloud Platform.',
    'skills.docker': 'Containerized applications, microservices architecture, and streamlined deployment pipelines.',
    'skills.elasticsearch': 'Full-text search engines, real-time data analytics, and log aggregation solutions.',

    // Projects
    'projects.tag': 'My recent work',
    'projects.title': 'Featured Projects',
    'projects.logistics': 'End-to-end logistics management system covering shipment tracking, fleet management, and delivery optimization.',
    'projects.stocktake': 'Inventory stock-taking application with barcode scanning, real-time variance reporting, and audit trail management.',
    'projects.sales': 'Comprehensive sales management platform with order processing, customer management, and performance analytics dashboard.',
    'projects.partner': 'Partner relationship management system for onboarding, contract management, and collaboration between business entities.',
    'projects.pos': 'Modern POS system with multi-cashier support, inventory integration, receipt printing, and real-time sales reporting.',
    'projects.bcm': 'BCM platform for risk assessment, disaster recovery planning, incident response workflows, and compliance reporting.',
    'projects.banking': 'High-performance banking middleware for seamless API integration between core banking systems, third-party services, and payment networks.',
    'projects.tracking': 'End-to-end product lifecycle tracking with QR/barcode scanning, supply chain visibility, and real-time location monitoring.',

    // Contact
    'contact.tag': 'Get in touch',
    'contact.title': 'Contact Me',
    'contact.heading': "Let's build something amazing together",
    'contact.text': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!",
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.availableStatus': 'Available for Freelance',
    'contact.nameLabel': 'Your Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.emailLabel': 'Your Email',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'Project Inquiry',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',

    // Footer
    'footer.text': 'Crafted with passion and clean code.',
    'footer.rights': 'All rights reserved.',
  },

  id: {
    // Nav
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',

    // Hero
    'hero.greeting': 'Halo, Saya',
    'hero.iAm': 'Saya seorang ',
    'hero.description': 'Membangun aplikasi web yang skalabel dan berperforma tinggi dengan teknologi modern. Bersemangat tentang kode bersih dan pengalaman pengguna yang luar biasa.',
    'hero.viewProjects': 'Lihat Proyek',
    'hero.contactMe': 'Hubungi Saya',
    'hero.scroll': 'Gulir ke Bawah',

    // About
    'about.tag': 'Kenali saya lebih dekat',
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Full Stack Developer dengan Semangat Inovasi',
    'about.text1': 'Saya adalah Full Stack Developer yang berdedikasi dengan keahlian dalam membangun aplikasi web yang kuat dan skalabel. Perjalanan saya dalam pengembangan perangkat lunak telah membekali saya dengan pemahaman mendalam tentang teknologi frontend dan backend.',
    'about.text2': 'Saya mengkhususkan diri dalam menciptakan pengalaman pengguna yang mulus dengan React dan Next.js di frontend, sambil membangun layanan backend yang powerful dengan Golang. Pengalaman saya dengan teknologi cloud seperti GCP dan containerization dengan Docker memungkinkan saya memberikan solusi siap produksi.',
    'about.stat1': 'Proyek Selesai',
    'about.stat2': 'Tahun Pengalaman',
    'about.stat4': 'Teknologi',
    'about.cta': 'Mari Bekerja Sama',

    // Skills
    'skills.tag': 'Yang saya gunakan',
    'skills.title': 'Keahlian & Teknologi',
    'skills.react': 'Membangun antarmuka pengguna interaktif berbasis komponen dengan pola React modern dan hooks.',
    'skills.nextjs': 'Server-side rendering, static generation, dan aplikasi React full-stack dengan performa optimal.',
    'skills.golang': 'Layanan backend berperforma tinggi, RESTful API, dan pemrograman concurrent dengan Go.',
    'skills.mysql': 'Desain database relasional, optimasi query, dan solusi manajemen data yang skalabel.',
    'skills.sqlserver': 'Solusi database level enterprise dengan stored procedure lanjutan dan tuning performa.',
    'skills.gcp': 'Infrastruktur cloud, serverless computing, dan deployment skalabel di Google Cloud Platform.',
    'skills.docker': 'Aplikasi terkontainerisasi, arsitektur microservices, dan pipeline deployment yang efisien.',
    'skills.elasticsearch': 'Mesin pencarian full-text, analitik data real-time, dan solusi agregasi log.',

    // Projects
    'projects.tag': 'Karya terbaru saya',
    'projects.title': 'Proyek Unggulan',
    'projects.logistics': 'Sistem manajemen logistik end-to-end mencakup pelacakan pengiriman, manajemen armada, dan optimasi pengantaran.',
    'projects.stocktake': 'Aplikasi stock opname inventaris dengan pemindaian barcode, laporan selisih real-time, dan manajemen jejak audit.',
    'projects.sales': 'Platform manajemen penjualan komprehensif dengan pemrosesan pesanan, manajemen pelanggan, dan dashboard analitik performa.',
    'projects.partner': 'Sistem manajemen hubungan mitra untuk onboarding, manajemen kontrak, dan kolaborasi antar entitas bisnis.',
    'projects.pos': 'Sistem POS modern dengan dukungan multi-kasir, integrasi inventaris, cetak struk, dan laporan penjualan real-time.',
    'projects.bcm': 'Platform BCM untuk penilaian risiko, perencanaan pemulihan bencana, alur kerja respons insiden, dan pelaporan kepatuhan.',
    'projects.banking': 'Middleware perbankan berperforma tinggi untuk integrasi API antara sistem core banking, layanan pihak ketiga, dan jaringan pembayaran.',
    'projects.tracking': 'Pelacakan siklus hidup produk end-to-end dengan pemindaian QR/barcode, visibilitas rantai pasok, dan pemantauan lokasi real-time.',

    // Contact
    'contact.tag': 'Hubungi saya',
    'contact.title': 'Kontak Saya',
    'contact.heading': 'Mari bangun sesuatu yang luar biasa bersama',
    'contact.text': 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda. Mari terhubung!',
    'contact.location': 'Lokasi',
    'contact.availability': 'Ketersediaan',
    'contact.availableStatus': 'Tersedia untuk Freelance',
    'contact.nameLabel': 'Nama Anda',
    'contact.namePlaceholder': 'Nama lengkap',
    'contact.emailLabel': 'Email Anda',
    'contact.emailPlaceholder': 'email@contoh.com',
    'contact.subjectLabel': 'Subjek',
    'contact.subjectPlaceholder': 'Pertanyaan Proyek',
    'contact.messageLabel': 'Pesan',
    'contact.messagePlaceholder': 'Ceritakan tentang proyek Anda...',
    'contact.send': 'Kirim Pesan',
    'contact.success': 'Pesan berhasil terkirim!',

    // Footer
    'footer.text': 'Dibuat dengan semangat dan kode bersih.',
    'footer.rights': 'Hak cipta dilindungi.',
  }
};

// Typing effect words per language
const typingWords = {
  en: ['Full Stack Developer', 'React Specialist', 'Golang Engineer'],
  id: ['Full Stack Developer', 'Spesialis React', 'Engineer Golang']
};

// ==========================================
// GLOBAL STATE
// ==========================================
let currentLang = localStorage.getItem('portfolioLang') || 'en';
let typingInterval = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initParticles();
  initTypingEffect();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initScrollTop();
  initStats();
  initContactForm();
  initLanguage();
});

// ==========================================
// PRELOADER
// ==========================================
function initPreloader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 800);
  });

  // Fallback: hide preloader after 3s regardless
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 3000);
}

// ==========================================
// PARTICLE CANVAS
// ==========================================
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const opacity = (1 - dist / 150) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawLines();
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

// ==========================================
// TYPING EFFECT
// ==========================================
function initTypingEffect() {
  const element = document.getElementById('typingText');
  if (!element) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let words = typingWords[currentLang];

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    typingInterval = setTimeout(type, delay);
  }

  type();
}

function restartTypingEffect() {
  clearTimeout(typingInterval);
  const element = document.getElementById('typingText');
  if (element) element.textContent = '';
  initTypingEffect();
}

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Glass effect on scroll
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section tracking
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu
      const navLinksEl = document.getElementById('navLinks');
      const menuToggle = document.getElementById('menuToggle');
      navLinksEl.classList.remove('open');
      menuToggle.classList.remove('active');
    });
  });
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
}

// ==========================================
// SCROLL REVEAL (Intersection Observer)
// ==========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ==========================================
// SCROLL TO TOP
// ==========================================
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function initStats() {
  const stats = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Mengirim...';
    submitBtn.disabled = true;

    setTimeout(() => {
      success.classList.add('show');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();

      setTimeout(() => {
        success.classList.remove('show');
      }, 4000);
    }, 1500);
  });
}

// ==========================================
// LANGUAGE SWITCHER
// ==========================================
function initLanguage() {
  const langToggle = document.getElementById('langToggle');

  // Set initial language
  setLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    setLanguage(currentLang);
    localStorage.setItem('portfolioLang', currentLang);

    // Update typing effect words
    restartTypingEffect();
  });
}

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update lang toggle UI
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.remove('active');
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    }
  });

  // Update HTML lang
  document.documentElement.lang = lang;
}
