require('dotenv').config(); // ← Сначала подключай dotenv!

console.log('TOKEN:', process.env.BOT_TOKEN); // ← Теперь токен должен быть не undefined

const { Telegraf } = require('telegraf');

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
