var token = process.env.token
const fs = require('fs');
const Discord = require('discord.js');
const {prefix, ver} = require("./variables.json")
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(filename => filename.endsWith('.js'));

for (const filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('Up and running!');
});

client.login(token);

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(`Huh? That didn't work for some reason. Blame the developer. (Error: ${error})`);
  }
});
