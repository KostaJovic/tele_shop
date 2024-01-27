const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

//token = "6724277597:AAGVODrxB0knWmJJtCKOmnGGxE7iKl_glKU"
//const bot = new Telegraf(process.env.BOT_TOKEN)

const token = "6724277597:AAGVODrxB0knWmJJtCKOmnGGxE7iKl_glKU";
const bot = new Telegraf(token);
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    initialiseBot();
}).listen(8080);
 
function initialiseBot() {
    bot.start((ctx) => ctx.reply('Hi, ready to buy some products?'));
    bot.help((ctx) => ctx.reply('Send me a sticker'));
    //bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

    bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.launch();

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
