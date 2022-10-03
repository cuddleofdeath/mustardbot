const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require('discord.js');

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('getAvatar')
    // if you wanted to create a translate command, you would change the setType to the message rather than the user.
    .setType(ApplicationCommandType.User),
  async execute(interaction, mustardclient) {
    await interaction.reply({
      content: `${interaction.targetUser.displayAvatarURL()}`,
    });
  },
};
