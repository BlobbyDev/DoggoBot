const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "poll",
    aliases: ["yesno", "vote"],
    category: "Utility",
    example: `${config.Prefix}poll Is Dinav hot ?`,

    run: async (client, message, args) => {

        if (args.length <= 0)
        return message.reply(`${emoji.Error} Oh come on man say something so that I can poll something !!`)
        .then(msg => {
            msg.delete({ timeout: 10000 })
        });

        if (message.content.includes("discord.gg"))
        return message.reply(`${emoji.Error} Yo don't try to post server link using me !!!`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        });

        const embed = new Discord.MessageEmbed()
        .setTitle('New Poll !!')
        .setDescription(args.join(" "))
        .setFooter(`Poll made by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let msgEmbed = await message.channel.send(embed );
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')

    }
}