const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
  name: "bird",
  category: "Animals",
  aliases: ["birdy", "chirp"],
  description: "Sends a random bird image to pleasure your mind !!",
  example: `${config.Prefix}bird`,

  run: async (client, message, args) => {

    const res = await fetch('http://shibe.online/api/birds');
    const img = (await res.json())[0];
    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Bird} A Birdy !! ${emoji.Bird}`)
    .setImage(img)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  } 
}
