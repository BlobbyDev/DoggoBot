const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const log = require('../../Utils/channels.json');

module.exports = {
    name: "report",
    category: "Misc",
    description: "To report us any bugs or anything !!",
    example: `${config.Prefix}report Bot is not working`,

    run: async (client, message, args) => {
        
        const Channel = client.channels.cache.get(log.Report);

        if(!args[0])
        return message.reply(`${emoji.Error} Please provide a report so that we can look through !! **\`${config.Prefix}report [Your report]\`**`)

        let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        const embed = new Discord.MessageEmbed()
        .setTitle('__Report__')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(report)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);

        Channel.send(embed)

        await message.channel.send(`${emoji.Approved} Your report has been sent to my developer !!`)
    }
}