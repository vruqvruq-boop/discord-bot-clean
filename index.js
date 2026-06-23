const { Client, GatewayIntentBits } = require('discord.js');

console.log("Avvio bot...");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online: ${client.user.tag}`);
});

client.login(process.env.TOKEN);
