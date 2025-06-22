window.addEventListener('DOMContentLoaded', () => {
  // Splash-анимация
  const fill = document.querySelector('.progress-bar-fill');
  if (fill) {
    setTimeout(() => {
      fill.style.width = '100%';
    }, 200);

    setTimeout(() => {
      document.getElementById('splash').style.opacity = '0';
      setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('main-app').style.display = '';
      }, 500);
    }, 1400);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.Telegram && Telegram.WebApp && typeof Telegram.WebApp.requestFullscreen === 'function') {
    Telegram.WebApp.requestFullscreen();
  }
});
if (window.Telegram && Telegram.WebApp && typeof Telegram.WebApp.exitFullscreen === 'function') {
  Telegram.WebApp.exitFullscreen();
}
