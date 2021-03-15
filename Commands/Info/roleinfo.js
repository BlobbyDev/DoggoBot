const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const moment = require('moment');

module.exports = {
    name: "roleinfo",
    aliases: ['roleinformation', "role"],
    category: "Info",
    description: 'Gives the info of the provided role !!',
    example: "!!roleinfo @Mod",

    run: async (client, message, args) => {

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        if(!role)
        return message.reply(`${emoji.Error} Provide a role!! \`${config.Prefix}roleinfo [Role]\``)

        const embed = new Discord.MessageEmbed()
        
        .setTitle(`Role Info !!`)
        .addField('Name', role, true)
        .addField('ID', `\`${role.id}\``, true)
        .addField('Color', `\`${role.hexColor.toUpperCase()}\``, true)
        .addField('Users with this Role', `\`${role.members.size}\` Users`, true)
        .addField('Creation Date', `\`${moment(role.createdAt).format('DD/MMM/YYYY')}\``, true)

        message.channel.send(embed)

        
    }
}