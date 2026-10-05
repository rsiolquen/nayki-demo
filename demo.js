"use strict";
document.querySelector("#edad-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  location.href = Number(document.querySelector("#edad").value) >= 18 ? "mayores.html" : "menores.html";
});
document.querySelectorAll(".demo-form").forEach(form => form.addEventListener("submit", event => {
  event.preventDefault();
  const result = document.querySelector("#resultado");
  result.textContent = "¡Simulación completada! No se envió ninguna solicitud y tus datos no se guardaron.";
  form.reset(); result.focus();
}));
document.querySelectorAll(".carousel").forEach(carousel => {
  const images = [...carousel.querySelectorAll("img")];
  let current = 0;
  const controls = document.createElement("div"); controls.className = "gallery-controls";
  const counter = document.createElement("span"); counter.setAttribute("aria-live", "polite");
  const show = () => { images.forEach((img, i) => {img.hidden = i !== current;}); counter.textContent = `${current + 1} / ${images.length}`; };
  for (const [label, delta] of [["Anterior", -1], ["Siguiente", 1]]) {
    const button = document.createElement("button"); button.type = "button"; button.textContent = label;
    button.addEventListener("click", () => { current = (current + delta + images.length) % images.length; show(); });
    controls.append(button);
  }
  controls.append(counter); carousel.append(controls); show();
});
// Ruleta: un cuadro a la vez, con controles y pausa accesible.
document.querySelectorAll('[data-rotator]').forEach(section => {
 const cards = [...section.querySelectorAll('.about-card')];
 const counter = section.querySelector('[data-counter]');
 const pause = section.querySelector('[data-pause]');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 let current = 0, paused = reduced.matches, timer;
 function show(index) {
  current = (index + cards.length) % cards.length;
  cards.forEach((card, i) => { card.hidden = i !== current; });
  counter.textContent = `${current + 1} / ${cards.length}`;
 }
 function stop() { clearInterval(timer); }
 function play() {
  stop(); pause.textContent = paused ? 'Reanudar' : 'Pausar';
  if (!paused && !document.hidden && !section.matches(':hover') && !section.contains(document.activeElement)) timer = setInterval(() => show(current + 1), 6500);
 }
 function manual(delta) { paused = true; counter.setAttribute('aria-live', 'polite'); show(current + delta); play(); }
 section.querySelector('[data-prev]').addEventListener('click', () => manual(-1));
 section.querySelector('[data-next]').addEventListener('click', () => manual(1));
 pause.addEventListener('click', () => { paused = !paused; counter.setAttribute('aria-live', paused ? 'polite' : 'off'); play(); });
 section.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); manual(event.key === 'ArrowRight' ? 1 : -1); }
 });
 section.addEventListener('mouseenter', stop);
 section.addEventListener('mouseleave', play);
 section.addEventListener('focusin', stop);
 section.addEventListener('focusout', () => setTimeout(play, 0));
 document.addEventListener('visibilitychange', play);
 reduced.addEventListener('change', () => { paused = reduced.matches; play(); });
 show(0); play();
});
