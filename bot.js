const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
    console.log("Bot initiated");
});

client.on('message', message => {
    message.reply('I am hearing your message here it is -> '.message.content);
});

client.login('NzEzNDQ3NjY0OTA5Mjg3NTU1.XsgQcA.67mOVIIVcollUUQou9eIE_Pt_gw');
