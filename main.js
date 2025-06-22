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
