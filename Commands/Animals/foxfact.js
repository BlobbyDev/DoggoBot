const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "foxfact",
    category: "Animals",
    aliases: ["ff"],
    description: "Sends a random fox fact !!",
    example: `${config.Prefix}foxfact`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/facts/fox');
    const fact = (await res.json()).fact;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Fox} Fox Fact ${emoji.Fox}`)
    .setDescription(`\`\`\`${fact}\`\`\``)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}