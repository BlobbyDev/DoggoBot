const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const rps = ['scissors', 'rock', 'paper'];
const res = [`Scissors ${emoji.Scissors}`, `Rock ${emoji.Rock}`, `Paper ${emoji.Paper}`];
const config = require('../../config.json');

module.exports = {
    name: "rps",
    category: "Fun",
    description: "Plays rock paper scissor with the doggo !!",
    example: `${config.Prefix}!!rps rock`,

    run: async (client, message, args) => {
        let userChoice;
    if (args.length) userChoice = args[0].toLowerCase();
    if (!rps.includes(userChoice)) 
      return message.channel.send('Please enter rock, paper, or scissors');
    userChoice = rps.indexOf(userChoice);

    const botChoice = Math.floor(Math.random()*3);
    let result;

    if (userChoice === botChoice) result = 'It\'s a draw no one wins';

    else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = `**${client.user.username}** Wins`;
    else result = `**${message.member.displayName}** Wins nice my dude !!`;

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.member.displayName} vs ${client.user.username} **RPS**`)
      .addField(`${message.member   .displayName}`, res[userChoice], true)
      .addField(`${client.user.username}`, res[botChoice], true)
      .addField('Results', result)
      .setFooter(`Challenged by ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}

