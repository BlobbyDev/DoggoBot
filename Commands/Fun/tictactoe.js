  
const { tictactoe } = require('reconlx');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "tictactoe",
    aliases: ["ttt"],
    category: "Fun",
    description: "Plays tic tac toe with the mentioned user !!",
    example: `${config.Prefix}tictactoe @Dinav`,

    run: async (client, message, args) => {
        
        const user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if (!user) 
        return message.reply(`${emoji.Error} Please mention a user to play with **\`${config.Prefix}ttt [User]\`**`)

        new tictactoe({
            player_two: user,
            message: message
        })
    }
}