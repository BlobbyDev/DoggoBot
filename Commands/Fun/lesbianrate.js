const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {

    name: "lesbianrate",
    description: "Gives the lesbianrate of the user !!",
    example: `${config.Prefix}lesbianrate @Dinav`,
    aliases: ["howlesbian", "lesbian", "lr"],
    category: "Fun",

    run: async (client, message, args) => {

        const user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const lesbianrate = Math.floor(Math.random() * 101)

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user from this guild !!`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`${emoji.Lesbian} Lesbian rate !!`)
        .setDescription(`${user} (\`${user.user.tag}\`) is ${lesbianrate} % lesbian !! ${emoji.Lesbian}`)
        .setTimestamp()

        message.channel.send(embed)
    }
}