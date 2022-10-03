const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
  async execute(interaction, mustardclient) {
    const embed = new EmbedBuilder()
      .setTitle('This is a title')
      .setDescription('This is a description')
      .addFields([
        {
          name: `Field 1`,
          value: `Field value 1`,
          inline: true,
        },
        {
          name: `Field 2`,
          value: `Field Value 2`,
          inline: true,
        },
        {
          name: `Field 3`,
          value: `Field value 3`,
          inline: true,
        },
      ])
      .setColor(mustardclient.color)
      .setFooter({
        iconURL: interaction.user.avatarURL(),
        text: mustardclient.user.tag,
      })
      .setTimestamp()
      .setURL('https://discord.js.org/')
      .setAuthor({
        url: `https://www.twitter.com/cuddleofdeath`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setThumbnail('https://i.imgur.com/wSTFkRM.png');

    await interaction.reply({ embeds: [embed] });
  },
};
