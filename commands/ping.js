module.exports = {
  name: 'ping',
  execute(message, args) {
    message.channel.send(`Ping time is ${Math.round(client.ping)} ms.`)
  }
}
