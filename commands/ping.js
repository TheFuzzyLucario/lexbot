module.exports = {
  name: 'ping',
  execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    message.channel.send(`Ping time is ${Math.round(client.ping)} ms.`)
  }
}
