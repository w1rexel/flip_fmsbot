// Подключаем dotenv для работы с .env-файлом
require('dotenv').config({ path: './bot/.env' });

// Подключаем Telegraf
const { Telegraf } = require('telegraf');

// Получаем токен из .env-файла
const bot = new Telegraf(process.env.BOT_TOKEN);

// Пример простой команды
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

