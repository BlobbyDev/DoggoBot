const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "birdfact",
    category: "Animals",
    aliases: ["bf"],
    description: "Sends a random bird fact !!",
    example: `${config.Prefix}birdfact`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/facts/bird');
    const fact = (await res.json()).fact;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.Bird} Bird Fact ${emoji.Bird}`)
    .setDescription(`\`\`\`${fact}\`\`\``)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}