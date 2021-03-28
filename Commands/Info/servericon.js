const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    
    name: "servericon",
    aliases: ["guildicon", "icon"],
    description: "Gives the icon of the server that you executed this command !!",
    category: "Info",
    example: `${config.Prefix}servericon`,

    run: async (client, message, args) => {
        
        const embed = new Discord.MessageEmbed()

        .setTitle(`${message.guild.name}'s Icon !!`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor)

        message.channel.send(embed)
    }
}