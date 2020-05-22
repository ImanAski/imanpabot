const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
    console.log("Bot initiated");
});

client.on('message', message => {
    message.reply('I am hearing your message here it is -> '.message.content);
});

client.login(process.env.BOT_TOKEN);
