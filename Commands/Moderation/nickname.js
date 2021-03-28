const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
  name: "nickname",
  aliases: ["setnickname", "nick"],
  description: "Sets a nickname for the mentioned user or provided ID from this guild",
  example: `${config.Prefix}nickname @Dinav Cool or !!nickname @Dinav "Cool"`,
  category: "Moderation",

   run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const perms = ["MANAGE_NICKNAMES" || "ADMINSTRATOR"];
    const doggo = message.guild.members.cache.get(client.user.id);
    let nickname = args[1];

    if(!message.member.hasPermission(perms)) 
    return message.reply(`${emoji.Error} You do not have the permission to do that lol try asking a staff to give you the permission **\`MANAGE_NICKNAMES\`** or **\`ADMINISTRATOR\`**`)
    .then(msg => {
      msg.delete({ timeout: 20000 })
    });

    if(!doggo.hasPermission(perms))
    return message.reply(`${emoji.Error} I do not have permission to ban users pls enable permission **\`MANAGE_NICKNAMES\`** for me`);

    if(!user)
    return message.reply(`${emoji.Error} Please mention or provide the ID of the user from this guild !! **\`${config.Prefix}nickname [Mention or ID] [The Nickname]\`**`)

    if (!args[1]) 
    return message.reply(`${emoji.Error} Please provide a nickname !!`);

    if (nickname.startsWith('"')) {
    nickname = message.content.slice(message.content.indexOf(args[1]) + 1);

    if (!nickname.includes('"')) 
    return message.reply(`${emoji.Error} Please ensure the nickname is surrounded in quotes ""`);

    if (user.roles.highest.position > message.member.roles.highest.position)
    return message.reply(`${emoji.Error} You cannot ban someone with an equal or higher role to you !!! or if you are owner pls be yourself in a higher position`)
    
    
    if (user.roles.highest.position > doggo.roles.highest.position)
    return message.reply(`${emoji.Error} You cannot ban someone with an equal or higher role than me !!`)

    nickname = nickname.slice(0, nickname.indexOf('"'));
    if (!nickname.replace(/\s/g, '').length)
    return message.reply(`${emoji.Error} Please provide a nickname to give to someone !`);
    }

    if (nickname.length > 32) {
    return message.reply(`${emoji.Error} Provided nickname is too big pls provide a nickname which is lesser than 32 characters !!`);


    } else {

      let reason;
      if (args[1].startsWith('"'))
      reason = message.content.slice(message.content.indexOf(nickname) + nickname.length + 1);
      else reason = message.content.slice(message.content.indexOf(nickname) + nickname.length);

      if (!reason) reason = '`-`';
      if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
      
      try {
      
        const oldNickname = user.nickname || user.user.username;
        const changelog = `From \`${oldNickname}\` to \`${nickname}\``;

        await user.setNickname(nickname);

        const embed = new Discord.MessageEmbed()
          .setTitle('Nickname Changed !!')
          .setDescription(`${emoji.Approved} <@${user.id}> (\`${user.user.tag}\`) nickname has been successfully changed !!`)
          .addField('Changed By', `<@${message.member.id}>\n(\`${message.member.user.tag}\`)`, true)
          .addField('Changed User', `<@${user.id}>\n(\`${user.user.tag}\`)`, true)
          .addField('Changelog', changelog, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        await message.channel.send(embed);
      
      } catch (err) {
        message.reply(`${emoji.Error} Please check the role position !!`, err.message);
      }
    }  
  }
}
