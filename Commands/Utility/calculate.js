const Discord = require('discord.js');
const { re } = require('mathjs');
const math = require('mathjs');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "calculate",
    aliases: ["calc"],
    description: "A Discord calculator lol nothing much !!",
    category: "Utility",
    example: `${config.Prefix}calculate 1 + 1`,

    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send(`${emoji.Error} Please provide a question`);

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send(`${emoji.Error} Please provide a **valid** question`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
            .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(embed);
    },
}
