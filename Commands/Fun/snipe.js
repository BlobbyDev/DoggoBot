const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "snipe",
    category: "Fun",
    description: "Retrives the latest deleted text message !!",
    example: `${config.Prefix}snipe`,

    run: async (client, message, args) => {

        try {

            const msg = client.snipes.get(message.channel.id)

            const embed = new Discord.MessageEmbed()
    
            .setTitle('Sike you got sniped !!')
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
            .addField('Content', msg.content)
            .addField('Author', `<@${msg.author.id}> (\`${msg.author.tag}\`)`)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
    
            message.channel.send(embed)

        } catch (err) {
            message.reply(`${emoji.Error} I coudn't snipe that message !!`)
        }
    } 
    
}