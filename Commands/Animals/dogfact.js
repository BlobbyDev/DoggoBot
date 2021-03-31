const Discord = require('discord.js');
const fetch = require('node-fetch');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "dogfact",
    category: "Animals",
    aliases: ["df"],
    description: "Sends a random dog fact !!",
    example: `${config.Prefix}dogfact`,

    run: async (client, message, args) => {

    const res = await fetch('https://some-random-api.ml/facts/dog');
    const fact = (await res.json()).fact;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${emoji.DoggoLul} Dog Fact ${emoji.DoggoLul}`)
    .setDescription(`\`\`\`${fact}\`\`\``)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}