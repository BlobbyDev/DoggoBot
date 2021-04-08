const shorten = require('isgd');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "linkshorten",
    aliases: ["shorten"],
    category: "Utility",
    description: "Shortens your URL to is.gd format !!",
    example: `${config.Prefix}linkshorten https://discord.gg/RWSEj6JrjJ blob_lab`,

    run: async (client, message, args) => {

        if (!args[0]) return message.reply(`${emoji.Error} Provide the link to shorten !! \`${config.Prefix}shortenlink <link> <name>\``)

        if (!args[0]) {
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:')) return message.reply(`${emoji.Error} Provide a valid url **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        } else {

            shorten.custom(args[0], args[1], function(res) {
                if(res.startsWith('Error:')) return message.reply(`${emoji.Error} **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        }

    }
}
