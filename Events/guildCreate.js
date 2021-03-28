const Discord = require('discord.js');
const emoji = require('../Utils/emoji.json');
const log = require('../Utils/channels.json');
const moment = require('moment');

module.exports =  async (client, guild) => {

    const channel = client.channels.cache.get(log.ServerLogs);
      
    const embed = new Discord.MessageEmbed()
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024}))
    .setTitle(`${emoji.Joined} Joined a Guild !!`)
    .addField('Name', `\`${guild.name}\``)
    .addField('ID', `\`${guild.id}\``)
    .addField('Member Count', `\`${guild.memberCount}\` Members`)
    .addField('Owner', `\`${guild.owner.user.tag}\` | \`${guild.owner.id}\``)
    .addField('Creation Date', `\`${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}\``)
    .addField('Region', `\`${guild.region}\``)
    .addField(`${client.user.username}'s Server Count`, `\`${client.guilds.cache.size}\` Severs`)
    .setTimestamp()
      
    channel.send(embed)
}