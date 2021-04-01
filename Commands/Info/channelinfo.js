const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const moment = require('moment');

const channelType = {
    dm: 'DM',
    text: `${emoji.TextChannnel} \`Text\``,
    voice: `${emoji.VoiceChannel} \`Voice\``,
    category: `${emoji.Category} \`Category\``,
    news: `${emoji.AnnouncementChannel} \`Announcement\``,
    store: `${emoji.StoreChannel} \`Store\``
};



module.exports = {
    name: "channelinfo",
    aliases: ["channel"],
    description: "Gives the info of a channel !!",
    category: "Info",
    example: `${config.Prefix}channelinfo #general`,

    run: async (client, message, args) => {

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;

        if(!channel)
        return message.reply(`${emoji.Error} Provide a valid channel or channel from this server not from other server !! **\`${config.Prefix}channelinfo [Channel Form this server]\`**`)

        const totalUsers = channel.members.size;
        const bots = channel.members.array().filter(b => b.user.bot).length;
        const humans = channel.members.size - bots;
        const NFSW = {
            true: 'Yes',
            false: 'No'
        }
        
        const embed = new Discord.MessageEmbed()
        .setTitle('Channel Info !!')
        .addField('Name', channel, true)
        .addField('ID', `\`${channel.id}\``, true)
        .addField('Type', channelType[channel.type], true)
        .addField('Users', `\`${totalUsers}\` Users`, true)
        .addField('Humans', `\`${humans}\` Users`, true)
        .addField('Bots', `\`${bots}\` Users`, true)
        .addField('Creation Date', `\`${moment(channel.createdAt).format('DD/MMM/YYYY')}\``, true)
        .addField('NSFW ', `\`${NFSW[channel.nsfw]}\``, true)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()

        message.channel.send(embed)

    }

}