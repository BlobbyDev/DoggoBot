const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const log = require('../../Utils/channels.json');

module.exports = {
    name: "suggest",
    aliases: ["suggestion"],
    description: "To give us a suggestion !!",
    category: "Misc",
    example: `${config.Prefix}suggest Add more commands`,

    run: async(client, message, args) => {

        const Channel = client.channels.cache.get(log.Suggestion);
        
        if(!args[0])
        return message.reply(`${emoji.Error} Please provide you suggestion so that we can look through **\`${config.Prefix}suggest [Your Suggestion]\`**`)

        let suggestion = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        const embed = new Discord.MessageEmbed()
        .setTitle('__Suggestion__')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(suggestion)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);

        Channel.send(embed)  
        
        await message.channel.send(`${emoji.Approved} You suggestion has been sent to my developer !!`)
    }
}