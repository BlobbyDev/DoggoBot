const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    category: "Developer",
    example: `${config.Prefix}shutdown`,

    run: async(client, message, args) => {
        
        if (message.author.id !== config.Owner) {
            return;
        }
        
        await message.channel.send(`${emoji.Approved} Bot is now turned off !!`)
        process.exit()
    }
}