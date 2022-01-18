const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
    name: "otter",
    aliases: ["otters", "loutre"],
    category: "Animals",
    description: "Sends a random otter image !!",
    example: `${config.Prefix}otter`,

    run: async (client, message, args) => {

    const res = await fetch('https://otters.bananonz.dev/otterimg');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`🦦 Otters !!🦦`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}