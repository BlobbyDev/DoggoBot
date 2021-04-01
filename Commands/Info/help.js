const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const pagination = require('discord.js-pagination');

module.exports = {

    name: "help",
    aliases: ["h", "assist", "cmd", "commands"],
    category: "Info",
    description: "Shows all the commands present in me !!",
    example: `${config.Prefix}help or ${config.Prefix}help botinfo`,

    run: async(client, message, args) => {

        const Fun = `\`\`\`${client.commands.filter(cmd => cmd.category === "Fun").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Info = `\`\`\`${client.commands.filter(cmd => cmd.category === "Info").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Moderation = `\`\`\`${client.commands.filter(cmd => cmd.category === "Moderation").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Utility = `\`\`\`${client.commands.filter(cmd => cmd.category === "Utility").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Image = `\`\`\`${client.commands.filter(cmd => cmd.category === "Image").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Animals = `\`\`\`${client.commands.filter(cmd => cmd.category === "Animals").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Others = `\`\`\`${client.commands.filter(cmd => cmd.category === "Others").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;
        const Misc = `\`\`\`${client.commands.filter(cmd => cmd.category === "Misc").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}\`\`\``;

        const intro = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setTitle(`${emoji.Wave} Introduction !!`)
        .setDescription(`Hey there I'm ${client.user.username} my prefix is **\`${config.Prefix}\`** and **ping me if you forget the prefix**, if you want to get the list of commands then react to emojis that I have already reacted so yeah lets gets started !!`)
        .addField(`${emoji.Search} For The Detailed Help For a Command`, `\`${config.Prefix}help [command name]\``)
        .addField('We Have Commands For:', `${emoji.Fun} \`Fun\`\n${emoji.Info} \`Info\`\n${emoji.Moderation} \`Moderation\`\n${emoji.Utility} \`Utility\`\n${emoji.Camera} \`Image\`\n${emoji.Wink} \`Others\`\n${emoji.Misc} \`Misc\``)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle(`${emoji.Fun} Fun Commands`)
        .setDescription(Fun)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const info = new Discord.MessageEmbed()
        .setTitle(`${emoji.Info} Info Commands`)
        .setDescription(Info)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const mod = new Discord.MessageEmbed()
        .setTitle(`${emoji.Moderation} Moderation Commands`)
        .setDescription(Moderation)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle(`${emoji.Utility} Utility Commands`)
        .setDescription(Utility)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const image = new Discord.MessageEmbed()
        .setTitle(`${emoji.Camera} Image`)
        .setDescription(Image)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const animals = new Discord.MessageEmbed()
        .setTitle(`${emoji.DoggoLul} Animals`)
        .setDescription(Animals)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const others = new Discord.MessageEmbed()
        .setTitle(`${emoji.Wink} Others`)
        .setDescription(Others)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const misc = new Discord.MessageEmbed()
        .setTitle(`${emoji.Misc} Misc`)
        .setDescription(Misc)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        const pages = [
            intro,
            fun,
            mod,
            utility,
            image,
            animals,
            others,
            misc
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '7200000 '

        if(!args[0]) return pagination(message, pages, emojiList, timeout)

        let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
    
        if(!command) return;

        const embed = new Discord.MessageEmbed()

        .setTitle('Command Info')
        .addField('Name', `\`\`\`${command.name}\`\`\``, true)
        .addField('Category', `\`\`\`${command.category}\`\`\``, true)
        .addField('Aliases', `\`\`\`${command.aliases ? command.aliases.join(", ") : "-"}\`\`\``, true)
        .addField('Example', `\`\`\`${command.example}\`\`\``, true)
        .addField('Description', `\`\`\`${command.description}\`\`\``)
        .setTimestamp()

        message.channel.send(embed)
    
    }
        
}
