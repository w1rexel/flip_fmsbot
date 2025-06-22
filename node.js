const { Telegraf } = require('telegraf');
require('dotenv').config({ path: './bot/.env' });

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Открыть приложение:', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть мини-приложение',
          web_app: { url: 'https://flip-fmsbot.vercel.app/' }
        }
      ]]
    }
  });
});

bot.launch();
// Первое включение transition и старт
track.style.transition = 'transform 0.2s linear';
animate();
window.addEventListener('DOMContentLoaded', () => {
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    Telegram.WebApp.requestFullscreen();
  }
});