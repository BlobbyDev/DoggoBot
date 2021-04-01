const config = require('../../config.json');
const Discord = require("discord.js");


module.exports = {
    name: "policy",
    category: "Info",
    example: `${config.Prefix}policy`,
    aliases: ["privacypolicy"],

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setTitle('__Our Policy__')
        .setDescription(`\`\`\`We do not store or share any kind of personal detaials of any server and user. The snipe command only retrieves the text message and no images and embed will be sniped !!\`\`\`\n\`\`\`We follow all the term of Service of both Discord, Youtube & IMDb.\`\`\`\n\`\`\`In case you need to contact with us regarding the bot join our support server to get the support from us and also all the the workings of the bot is been posted on github too\`\`\`\n\n[Add It](${config.Invite}) | [Join Server](${config.Server})`)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        
        message.channel.send(embed) 
    }
}
