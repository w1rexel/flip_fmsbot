const { Telegraf } = require('telegraf');
const bot = new Telegraf('7810652179:AAGJyyA6I6FA2IgY1aTJy8SF2BnIENj6XKI');

bot.command('start', (ctx) => {
  ctx.reply('Открой мини-приложение:', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Flip MiniApp', web_app: { url: 'https://flip-miniapp-yourname.vercel.app' } }
      ]]
    }
  });
});

bot.launch();
