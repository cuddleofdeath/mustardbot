const { REST } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (mustardclient) => {
  mustardclient.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands');
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith('.js'));

      const { commands, commandArray } = mustardclient;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`Loaded command ${command.data.name}`);
      }
    }
    const clientId = '1022989405339779092';
    const guildId = '1022941214036742144';
    const rest = new REST({ version: '10' }).setToken(process.env.token);
    try {
      console.log('started refreshing application (/) commands.');

      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: mustardclient.commandArray }
      );

      // await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      //   body: mustardclient.commandArray,
      // });

      console.log('successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  };
};
