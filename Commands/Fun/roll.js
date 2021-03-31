const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "roll",
    aliases: ["dice"],
    category: "Fun",
    description: "Roll a die for you !!",
    example: `${config.Prefix}roll`,

    run: async (client, message, args) => {
    let limit = args[0];
    if (!limit) limit = 6;

    const result = Math.floor(Math.random() * limit + 1);

    const embed = new Discord.MessageEmbed()
      .setTitle(`${emoji.Dice} Dice Roll ${emoji.Dice}`)
      .setDescription(`${message.member} (\`${message.member.user.tag}\`) You rolled a die and you got **${result}** !!`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
     message.channel.send(embed);
    }
}
