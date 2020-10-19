var token = process.env.token
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Up and running!');
});

client.login(token);
