module.exports = {
  data: {
    name: 'twitter',
  },
  async execute(interaction, mustardclient) {
    await interaction.reply({
      content: 'https://www.twitter.com/cuddleofdeath',
    });
  },
};
