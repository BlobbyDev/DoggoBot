const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "help",
    aliases: ["h", "assist"],
    category: "Info",
    description: "Shows all the commands present in me !!",
    example: `${config.Prefix}help or ${config.Prefix}help botinfo`,

    run: async (client, message, args) => {
        const Fun = "```8ball, Ascii, PP, Rps, Coinflip, Roll, Tictactoe, Simprate, Gayrate, Trumptweet```";
        const Info = "```Help, Ping, Serverinfo, Uptime, Whois, Channelinfo, Roleinfo, Servericon, Policy```";
        const Moderation = "```Ban, Kick, Unban, Forceban, Slowmode, Clear, Addrole, Removerole, Nickname```";
        const Utility = "```Avatar, Covid, Embed, Say, Urban, Weather, Translate, Youtube, Calculate, Spotify, ```";
        const Image = "```Meme, Dog, Fox, Bird, Cat, Panda, RedPanda, Koala, Shibe```";
        const Fact = "```Catfact, Dogfact, Pandafact, Birdfact, Foxfact, Koalafact```";
        const Others = "```Invite, Support, Github```";
        const Misc = "```Report, Feedback, Suggest```";

        const embed = new Discord.MessageEmbed()

        .setTitle(`${client.user.username}'s Commands`)
        .setDescription(`These are the commands of ${client.user.username} if you want to get more details of a command type \`!!help [command name]\``)
        .addField(`${emoji.Fun} Fun`, Fun, true)
        .addField(`${emoji.Info} Info`, Info, true)
        .addField(`${emoji.Moderation} Moderation`, Moderation, true)
        .addField(`${emoji.Utility} Utility`, Utility, true)
        .addField(`${emoji.DoggoLul} Image`, Image, true)
        .addField(`${emoji.Facts} Fact`, Fact, true)
        .addField(`${emoji.Wink} Others`, Others, true)
        .addField(`${emoji.Misc} Misc`, Misc, true)
        .addField(`${emoji.Link} Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server})`)
        .setTimestamp()

        
        if(!args[0]) return message.channel.send(embed)

        let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));

        const Embed = new Discord.MessageEmbed()

        .setTitle('Command Info')
        .addField('Name', `\`\`\`${command.name}\`\`\``, true)
        .addField('Category', `\`\`\`${command.category}\`\`\``, true)
        .addField('Aliases', `\`\`\`${command.aliases ? command.aliases.join(", ") : "`None`"}\`\`\``, true)
        .addField('Example', `\`\`\`${command.example}\`\`\``, true)
        .addField('Description', `\`\`\`${command.description}\`\`\``)
        .setTimestamp()

        return message.channel.send(Embed)
    }
}
