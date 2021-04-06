const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const { parse } = require("twemoji-parser");

module.exports = {
    name: "enlarge",
    category: "Utility",
    description: "Enlarges the provided emoji !!",
    example: `${config.Prefix}enlarge [emoji]`,

    run: async (client, message, args) => {
        const Emoji = args[0];
        if (!Emoji) return message.reply(`${emoji.Error} Provide an emoji to enlarge !!`);

        let custom = Discord.Util.parseEmoji(Emoji);

        try {
            if (custom.id) {
                return message.channel.send(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
            }
            else {
                let parsed = parse(Emoji, { assetType: "png" });
                if (!parsed[0]) return message.reply(`${emoji.Error} Failed to enlarge ${Emoji}`);

                return message.channel.send(parsed[0].url);
            }
        } catch (err) {
            message.reply(`${emoji.Error} Failed to enlarge ${Emoji}`);
        }
    }
} 


