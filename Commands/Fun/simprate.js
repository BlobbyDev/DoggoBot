const Discord = require('discord.js');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "simprate",
    aliases: ["simp", "howsimp"],
    category: "Fun",
    description: "Gives the simprate of the user !!",
    example: `${config.Prefix}simprate @Dinav`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const simprate = Math.floor(Math.random() * 101)

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user from this guild !!`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`${emoji.Simp} Simprate !!`)
        .setDescription(`${user} (\`${user.user.tag}\`) is ${simprate} % Simp !! ${emoji.Simp}`)
        .setTimestamp()

        message.channel.send(embed)
    }
}