const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith("/pachekhari")) {
    msg.reply("بسیار زیبا بود جناب/سرکارخانم "+message.author);
  }
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
try {
  console.log(process.env.BOT_TOKEN);
  client.login(process.env.BOT_TOKEN);
} catch(e) {
  console.log("This is the error -> ".e);
}
