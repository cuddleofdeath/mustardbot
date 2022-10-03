const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('twitter')
    .setDescription('Returns the link to my Twitter account'),
  async execute(interaction, mustardclient) {
    const button = new ButtonBuilder()
      .setCustomId('twitter')
      .setLabel('Check me out on Twitter!')
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
