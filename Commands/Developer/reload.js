const config = require('../../config.json');
const emoji = require('../../Utils/emoji.json');

module.exports = {
    name: "reload",
    aliases: ["load"],
    category: "Developer",
    description: "Reloades the provided command !!",
    example: `${config.Prefix}reload Fun pp`,

    run: async (client, message, args) => {
        
        if (message.author.id !== config.Owner) {
            return;
        }

        if(!args[0]) return message.reply(`${emoji.Error} Provide the category & commands to reload !! \`${config.Prefix}reload [Category] [Command]\``)
        if(!args[1]) return message.reply(`${emoji.Error} Provide a command to reload !! \`${config.Prefix}reload [Category] [Command]\``)

        let category = args[0].toLowerCase()
        let command = args[1].toLowerCase()

        try {
            delete require.cache[require.resolve(`../../Commands/${category}/${command}.js`)];
            client.commands.delete(command);

            const pull = require(`../../Commands/${category}/${command}.js`)
            client.commands.set(command, pull)

            return message.channel.send(`${emoji.Approved} Reloaded Command: **\`${command}\`**`)

        } catch (error) {
            return message.reply(`${emoji.Error} Cannot reload **\`${command}\`**\`\`\`${error}\`\`\``)
        }

    }
}
