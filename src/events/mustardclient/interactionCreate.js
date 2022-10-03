const { InteractionType } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, mustardclient) {
    if (interaction.isChatInputCommand()) {
      const { commands } = mustardclient;
      const { commandName } = interaction;
      const command = commands.get(commandName);

      if (!command) return;
      try {
        await command.execute(interaction, mustardclient);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: 'There was an error while executing this command!',
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = mustardclient;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error('There is no code for this button.');

      try {
        await button.execute(interaction, mustardclient);
      } catch (error) {
        console.err(error);
      }
    } else if (interaction.isSelectMenu()) {
      const { selectMenus } = mustardclient;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error('There is no code for this menu.');

      try {
        await menu.execute(interaction, mustardclient);
      } catch (error) {
        console.err(error);
      }
    } else if (interaction.type == InteractionType.ModalSubmit) {
      const { modals } = mustardclient;
      const { customId } = interaction;
      const modal = modals.get(customId);
      if (!modal) return new Error('There is no code for this modal.');

      try {
        await modal.execute(interaction, mustardclient);
      } catch (error) {
        console.err(error);
      }
    } else if (interaction.isContextMenuCommand()) {
      const { commands } = mustardclient;
      const { commandName } = interaction;
      const contextCommand = commands.get(commandName);
      if (!contextCommand) return;

      try {
        await contextCommand.execute(interaction, mustardclient);
      } catch (error) {
        console.err(error);
      }
    }
  },
};
