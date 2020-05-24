const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  if(msg.content.startsWith("hitmewithapoem")) {
    msg.author.send("this is it.");
  }
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
try {
  client.login(process.env.BOT_TOKEN);
} catch(e) {
  console.log("This is the error -> ".e);
}
