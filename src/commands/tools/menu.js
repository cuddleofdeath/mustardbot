const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('See everything Mustardbot can do!'),
  async execute(interaction, mustardclient) {
    const menu = new SelectMenuBuilder()
      .setCustomId('sub-menu')
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `GitHub`,
          value: `https://www.github.com/cuddleofdeath`,
          description: `View my GitHub!`,
          emoji: `🐙`,
        }),
        new SelectMenuOptionBuilder({
          label: `Twitter`,
          value: `https://www.twitter.com/cuddleofdeath`,
          description: `Check out my Twitter!`,
          emoji: `🐦`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
