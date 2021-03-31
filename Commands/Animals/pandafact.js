const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "pandafact",
    category: "Animals",
    aliases: ["pf"],
    description: "Sends a random panda fact !!",
    example: `${config.Prefix}pandafact`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/facts/panda');
    const fact = (await res.json()).fact;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Panda} Panda Fact ${emoji.Panda}`)
    .setDescription(`\`\`\`${fact}\`\`\``)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}