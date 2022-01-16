const { Client, Message, MessageEmbed } = require("discord.js");
const config = require('../../config.json');
module.exports = {
  name: "modnick",
  aliases: ["moderate-nick"],
  category:'Moderation',
  description: "Change unmentionable name to something mentionable!",
  usage: `${config.Prefix}modnick [@User]`,
  timeout: 2000,
  userPermissions: ["MANAGE_NICKNAMES"],
  botPermissions: ["MANAGE_NICKNAMES"],

  run: async (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member)
      return message.noMentionReply("Please mention a user to moderate nickname!");
    const random = (length = 20);
    const randomText = "sdfsfedawsterftfdsrawer234df12345678900987654321";
    var randomNick =
      Math.floor(Math.random() * randomText.length) +
      Math.floor(Math.random() * 72323);
      member.setNickname(`Moderated Nickname ${randomNick}`);
           const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "Mod Nick")
            .addField("**Moderated User**", member.user.username)
            .addField("**Moderated By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

           message.channel.send(sembed)
    }
  }
