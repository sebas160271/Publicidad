// script.js - Interactividad ligera: menú, animaciones, galería modal, formulario simulado
document.addEventListener('DOMContentLoaded', () => {
  // Año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menú toggle (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // IntersectionObserver para animaciones
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-up, .animate-scale, .animate-fade').forEach(el => io.observe(el));

  // Galería modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.setAttribute('aria-hidden', 'false');
    });
  });
  modalClose.addEventListener('click', () => { modal.setAttribute('aria-hidden', 'true'); modalImg.src = ''; });
  modal.addEventListener('click', (e) => { if (e.target === modal) { modal.setAttribute('aria-hidden', 'true'); modalImg.src = ''; } });

  // Formulario (simulación)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Enviando...';
    setTimeout(() => {
      status.textContent = 'Gracias — su solicitud ha sido recibida. Nos contactaremos pronto.';
      form.reset();
    }, 900);
  });

  // Botón llamar (ejemplo)
  const callBtn = document.getElementById('callBtn');
  if (callBtn) callBtn.addEventListener('click', () => { window.location.href = 'tel:+573000000000'; });
});
