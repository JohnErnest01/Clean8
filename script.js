// ===== UTILITIES =====
const openModal = (el) => {
  el.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

const closeModal = (el) => {
  el.classList.add('hidden');
  document.body.style.overflow = '';
};

// ===== ELEMENTS =====
const authModal = document.getElementById('auth-modal');
const bookingModal = document.getElementById('booking-modal');
const btnBookNow = document.getElementById('btn-book-now');
const btnHeroBook = document.getElementById('hero-book');
const btnSeeServices = document.querySelector('.btn-secondary');
const authForm = document.getElementById('auth-form');
const bookingForm = document.getElementById('booking-form');
const authTitle = document.getElementById('auth-title');
const authSubmit = document.getElementById('auth-submit');
const switchToSignup = document.getElementById('switch-to-signup');
const bookingSuccess = document.getElementById('booking-success');
const navbar = document.getElementById('navbar');
const fadeElems = document.querySelectorAll('section, .service-card, .dashboard-card');

// ===== STATE =====
let loggedIn = false;
let lastScrollY = window.scrollY;

// ===== NAVBAR SCROLL EFFECT + HIDE =====
window.addEventListener('scroll', () => {
  // color change
  if (window.scrollY > 50) navbar.classList.add('nav-scrolled');
  else navbar.classList.remove('nav-scrolled');

  // hide/show navbar
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    navbar.style.top = '-80px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollY = window.scrollY;

  // reveal fade-in elements
  revealOnScroll();
});

// ===== FADE-IN ON SCROLL =====
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  fadeElems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
revealOnScroll(); // trigger on load

// ===== BUTTON INTERACTIONS =====
btnBookNow.addEventListener('click', () => {
  loggedIn ? openModal(bookingModal) : openModal(authModal);
});

btnHeroBook.addEventListener('click', () => {
  loggedIn ? openModal(bookingModal) : openModal(authModal);
});

btnSeeServices.addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

// ===== AUTH FORM =====
authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loggedIn = true;
  closeModal(authModal);
  openModal(bookingModal);
});

// SWITCH LOGIN / SIGNUP
switchToSignup.addEventListener('click', () => {
  const isLogin = authTitle.textContent === 'Log in';
  authTitle.textContent = isLogin ? 'Sign up' : 'Log in';
  authSubmit.textContent = isLogin ? 'Sign up' : 'Log in';
  switchToSignup.textContent = isLogin ? 'Back to login' : 'Create account';
});

// ===== BOOKING FORM =====
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  bookingSuccess.classList.remove('hidden');
  bookingForm.reset();
  setTimeout(() => {
    bookingSuccess.classList.add('hidden');
    closeModal(bookingModal);
  }, 2000);
});

// ===== CLOSE MODALS =====
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

// ===== HERO TEXT FADE-IN =====
window.addEventListener('load', () => {
  const heroElems = document.querySelectorAll('.hero h1, .hero p, .hero-buttons');
  heroElems.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 300 * (i + 1));
  });
});
// ===== Auto-active nav link =====
const navLinks = document.querySelectorAll(".nav-links a");
const path = window.location.pathname;
const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";

navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === page) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const page = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
document.getElementById("dashboard-book").addEventListener("click", () => {
  window.location.href = "booking.html"; 
});

document.getElementById("dashboard-appointments").addEventListener("click", () => {
  window.location.href = "appointments.html"; 
});

document.getElementById("dashboard-team").addEventListener("click", () => {
  window.location.href = "team.html"; 
});
// ===== UNIVERSAL FADE-IN ON SCROLL =====
function revealFade() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealFade);
window.addEventListener('load', revealFade);




