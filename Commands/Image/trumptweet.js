const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
    name: "trumptweet",
    aliases: ["trump", "tt"],
    example: `${config.Prefix}trumptweet Hi`,
    description: "Converts your text to trump's tweet lol",
    category: "Image",

    run: async (client, message, args) => {
        if (!args.join(" ")) 
        return message.reply(`${emoji.Error} Please provide a message to tweet for example **\`${config.Prefix}trumptweet Hi\`**`);

        let tweet = message.content.slice(message.content.indexOf(args.join(" ")), message.content.length);

        if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

        try{

        const res = await fetch('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + tweet);
        const img = (await res.json()).message;

        const embed = new Discord.MessageEmbed()
        .setTitle('Trump has just tweeted something !!')
        .setImage(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp() 
        .setColor(message.guild.me.displayHexColor);
        await message.channel.send(embed);

        } catch (err) {
            message.channel.send(`${emoji.Error} Couldn't tweet **${args.join(" ")}**`);
        }
    }
}

