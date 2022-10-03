require('dotenv').config();

const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const { Guilds, GuildMessages } = GatewayIntentBits;

// the below constant will allow all intents for the bot, which is NOT recommended. You should only enable the intents you need.
// To enable all intents, use intents: 32767
const mustardclient = new Client({
  intents: 32767,
});

mustardclient.buttons = new Collection();
mustardclient.commands = new Collection();
mustardclient.selectMenus = new Collection();
mustardclient.modals = new Collection();
mustardclient.commandArray = [];
mustardclient.color = '#FF1F00';

const functionFolders = fs.readdirSync('./src/functions');

for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(mustardclient);
}

mustardclient.handleEvents();
mustardclient.handleCommands();
mustardclient.handleComponents();
mustardclient.login(token);
