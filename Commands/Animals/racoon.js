const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
    name: "racoon",
    category: "Animals",
    description: "Sends a random Racoon image !!",
    example: `${config.Prefix}racoon`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/racoon');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`🦝 Racoon !! 🦝`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}
