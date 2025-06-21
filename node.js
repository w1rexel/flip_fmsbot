// Подключаем dotenv для работы с .env-файлом
require('dotenv').config({ path: './bot/.env' });

// Подключаем Telegraf
const { Telegraf } = require('telegraf');

// Получаем токен из .env-файла
const bot = new Telegraf(process.env.BOT_TOKEN);

// Пример простой команды
bot.command('start', (ctx) => {
  ctx.reply('Привет! Это тестовый бот для мини-приложения. Кнопка для запуска mini app появится скоро!');
});

// Запуск бота
bot.launch();

console.log('Бот запущен!');
