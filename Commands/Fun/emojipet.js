const Discord = require("discord.js");
const pet = require("pet-pet-gif");
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
name: "petemoji",
aliases: ["emojipet"],
description: "Pets the given emoji",
example: `${config.Prefix}petpet 😂`,
category: "Fun",

run: async(client, message, args) => {

if(!args[0]) return message.channel.send(`${emoji.Error} Mention emoji to get the pet version of that emoji`)

  try {
    const emoji =
      message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

      let petpetemoji = await pet(emoji);

      const petpet = new Discord.MessageAttachment(petpetemoji, "petpet.gif");
      await message.channel.send(petpet);
    } catch (e) {
      return message.reply(`${emoji.Error} Couldn't pet that emoji :(`)
    }
  }
};