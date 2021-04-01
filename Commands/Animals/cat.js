const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "cat",
    aliases: ["kitten", "kitty", "pussy"],
    category: "Animals",
    description: "Sends a random cat image !!",
    example: `${config.Prefix}cat`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/cat');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Cat} Meow !!! ${emoji.Cat}`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}