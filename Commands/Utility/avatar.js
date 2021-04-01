const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: "avatar",
    category: "Utility",
    aliases: ["av", "pfp"],
    description: "Gets the avatar of the mentioned user",
    example: `${config.Prefix}avatar @Dinav`,

    run: async (client, message, args) => {
      const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      
      const embed = new Discord.MessageEmbed()
      .setTitle(`${member.displayName}'s Avatar`)
      .setImage(member.user.displayAvatarURL({ dynamic: true, size:  1024 }))
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
    message.channel.send(embed);
  }
}
