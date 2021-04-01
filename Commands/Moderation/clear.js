const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "clear",
    aliases: ["purge", "nuke", "clean"],
    category: "Moderation",
    description: "Clears the chat",
    example: `${config.Prefix}clear 69`,
    
    run: async (client, message, args) => {

        const perms = ["MANAGE_MESSAGES" || "ADMINSTRATOR"]

        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission(perms)) {
            return message.reply(`${emoji.Error} You can't delete messages.. since you don't have permission to do it ask admin or owner to give you permission **\`MANAGE_MESSAGES\`** !!`)
            .then(msg => {
                msg.delete({ timeout: 15000 })
              })
        }

        if (!message.guild.me.hasPermission(perms)) {
            return message.reply(`${emoji.Error} Sorryy... I can't delete messages I don't have permission to do that pls enable permission **\`MANAGE_MESSAGES\`**`)
            .then(msg => {
                msg.delete({ timeout: 15000 })
              })
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply(`${emoji.Error} Please provide a number between 1 & 100 rather than an alphabet, blank space or 0`)
            .then(msg => {
                msg.delete({ timeout: 15000 })
              })
        }

        if (parseInt(args[0]) > 100) 
        return message.reply(`${emoji.Error} Welp I can only clear \`100\` messages maximum`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
        })

        let deleteAmount = parseInt(args[0]);  

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`${emoji.Approved} I deleted \`${deleted.size}\` messages.`))
            .then(msg => {
                msg.delete({ timeout: 3000 })
              })
            
    }
}