module.exports = {
  data: {
    name: `sub-menu`,
  },
  async execute(interaction, mustardclient) {
    await interaction.reply({
      content: `You select: ${interaction.values[0]}`,
    });
  },
};
