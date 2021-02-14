const Discord = require('discord.js');
const Gamedig = require('gamedig');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODA5MDY2MzE0MTEwMDc0OTYw.YCPruQ.G8qY0AHJCiYPFItk5DZ1fIjn75Q');


client.on('ready', () => {
  console.log(`${client.user.tag} est bien connecté`)

  const statuses = [
      () => Gamedig.query({
        type: 'garrysmod',
        host: 'gmod2.g-perf.fr',
        port: '27031'
      }).then((state) => `${state.players.length}/64 Joueurs 🎮`).catch((error) => "Le serveur qui est OFF"),
      () => Gamedig.query({
        type: 'garrysmod',
        host: 'gmod2.g-perf.fr',
        port: '27031'
      }).then((state) => `${state.players.length}/64 Joueurs 🎮`).catch((error) => "Le serveur qui est OFF"),
  ]

  let i = 0
  setInterval(async() => {
      client.user.setActivity(await statuses[i](), {
          type: 'WATCHING'
      })
      i = ++i % statuses.length
  }, 1e4)
})