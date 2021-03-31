const Discord = require('discord.js');
const config = require('../../config.json');
const answers = [
    'Oh hell yeah',
    'Hello no',
    'Yes I guess ?',
    'Probably wrong', 
    'You never know',
    'I guess ?',
    'Well tbh I don\'t know',
    'Umm maybe ?',
    'Nah',
    'Yup',
    'I have a doubt',
    'Cannot predict now',
    'I can see it'
]

module.exports = {
    name: "8ball",
    category: "Fun",
    description: "Ask a question to bot the will answer",
    example: `${config.Prefix}8ball Is doggo a cool bot ?`,

    run: async (client, message, args) => {
        const question = args.join(' ');
        if (!question) 
        return message.reply('Please provide a question to ask');

        const embed = new Discord.MessageEmbed()
          .setTitle('8-Ball')
          .addField('Question', `\`\`\`${question}\`\`\``)
          .addField('Answer', `\`\`\`${answers[Math.floor(Math.random() * answers.length)]}\`\`\``)
          .setFooter(`Asked by ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
        message.channel.send(embed);
    }
}
