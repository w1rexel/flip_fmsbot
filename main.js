if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.request_fullscreen();
}

const track = document.querySelector('.carousel-images');
const cards = Array.from(track.children);

const gap = 15;
const cardWidth = 140;
const originalCount = cards.length;

// Клонируем все карточки для плавной бесшовности
cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

const slideStep = cardWidth + gap;
// Длина цикла — длина оригинальных карточек
const cycleWidth = originalCount * slideStep;

let position = 0;

function animate() {
  position += 1; // скорость (можешь менять)
  if (position >= cycleWidth) {
    // Сброс к началу — абсолютно бесшовно
    track.style.transition = 'none';
    position = 0;
    track.style.transform = `translateX(0px)`;
    // На следующий кадр возвращаем transition и продолжаем анимацию
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.2s linear';
      requestAnimationFrame(animate);
    });
    return;
  }
  track.style.transform = `translateX(${-position}px)`;
  requestAnimationFrame(animate);
}

// Первое включение transition и старт
track.style.transition = 'transform 0.2s linear';
animate();
window.addEventListener('DOMContentLoaded', () => {
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    Telegram.WebApp.requestFullscreen();
  }
});

