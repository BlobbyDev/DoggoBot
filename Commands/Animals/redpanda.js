const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "redpanda",
    aliases: ["rp"],
    category: "Animals",
    description: "Sends a random Red Panda image !!",
    example: `${config.Prefix}redpanda`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/red_panda');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.RedPanda} Red Panda !!! ${emoji.RedPanda}`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}