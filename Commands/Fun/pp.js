const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

const pp = [
    '8D',
    '8=D',
    '8==D',
    '8===D',
    '8====D',
    '8=====D',
    '8======D',
    '8=======D',
    '8========D',
    '8=========D',
    '8==========D',
    '8===========D',
    '8============D',
    '8=============D',
    '8==============D',
    '8===============D',
    '8================D',
    '8=================D',
    '8==================D',
    '8===================D',
    '8====================D',
    '8=====================D',
    '8======================D',
    '8=======================D',
    '8========================D',
    '8=========================D'
];

module.exports = {
    name: 'pp',
    aliases: ['ppsize', 'penis'],
    category: 'Fun',
    description: 'gives the pp size of the mentioned user or provided ID',
    example: `${config.Prefix}pp @Dinav`,
    
    run: async (client, message, args) => {

      const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

      if(!member)
      return message.reply(`${emoji.Error} Mention someone or provide their user ID to get their PP Size`)

      const embed = new Discord.MessageEmbed()
      .setTitle('PP Size Detector')
      .setDescription(`${member.displayName}'s PP is this big\n\`\`\`${pp[Math.floor(Math.random() * pp.length)]}\`\`\``)
      .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);

      await message.channel.send(embed)
    }
}