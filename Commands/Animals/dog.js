const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "dog",
    aliases: ["doggy", "doggo", "puppy"],
    category: "Animals",
    description: "Sends a random dog pic",
    example: `${config.Prefix}dog`,

    run: async (client, message, args) => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const img = (await res.json()).message;
        const embed = new Discord.MessageEmbed()
          .setTitle(`${emoji.DoggoLul} Ayy our gang ${emoji.DoggoLul}`)
          .setImage(img)
          .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}