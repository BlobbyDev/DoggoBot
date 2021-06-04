const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {

    name: "help",
    aliases: ["h", "assist", "cmd", "commands"],
    category: "Info",
    description: "Shows all the commands present in me !!",
    example: `${config.Prefix}help or ${config.Prefix}help botinfo`,

    run: async(client, message, args) => {

        const Fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
        const Info = message.client.commands.filter(x => x.category == 'Info').map((x) => '`' + x.name + '`').join(', ');
        const Moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(', ');
        const Utility = message.client.commands.filter(x => x.category == 'Utility').map((x) => '`' + x.name + '`').join(', ');
        const Image = message.client.commands.filter(x => x.category == 'Image').map((x) => '`' + x.name + '`').join(', ');
        const Animals = message.client.commands.filter(x => x.category == 'Animals').map((x) => '`' + x.name + '`').join(', ');
        const Others = message.client.commands.filter(x => x.category == 'Others').map((x) => '`' + x.name + '`').join(', ');
        const Misc = message.client.commands.filter(x => x.category == 'Misc').map((x) => '`' + x.name + '`').join(', ');

        if (!args[0]) {
            const intro = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 1024}))
            .setTitle(`${emoji.Wave} Introduction !!`)
            .setDescription(`Hey there I'm ${client.user.username} my prefix is **\`${config.Prefix}\`** and **ping me if you forget the prefix**, if you want to get the list of commands then react to emojis that I have already reacted so yeah lets gets started !!`)
            .addField('Command Modules', `${emoji.Fun} \`${config.Prefix}help fun\`\n${emoji.Info} \`${config.Prefix}help info\`\n${emoji.Moderation} \`${config.Prefix}help mod\`\n${emoji.Utility} \`${config.Prefix}help utility\`\n${emoji.Camera} \`${config.Prefix}help image\`\n${emoji.DoggoLul} \`${config.Prefix}help animals\`\n${emoji.Wink} \`${config.Prefix}help others\`\n${emoji.Misc} \`${config.Prefix}help misc\``)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(intro)
        }

        if(args.join(" ").toLowerCase() == 'fun') {
            const fun = new Discord.MessageEmbed()
            .setTitle(`${emoji.Fun} Fun Commands`)
            .setDescription(Fun)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(fun)
        }

        if(args.join(" ").toLowerCase() == 'info') {
            const info = new Discord.MessageEmbed()
            .setTitle(`${emoji.Info} Info Commands`)
            .setDescription(Info)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(info)
        }
        
        if(args.join(" ").toLowerCase() == 'mod') {
            const mod = new Discord.MessageEmbed()
            .setTitle(`${emoji.Moderation} Moderation Commands`)
            .setDescription(Moderation)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(mod)
        }
        
        if(args.join(" ").toLowerCase() == 'utility') {
            const utility = new Discord.MessageEmbed()
            .setTitle(`${emoji.Utility} Image Commands`)
            .setDescription(Utility)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(utility)
        }
        
        if(args.join(" ").toLowerCase() == 'image') {
            const image = new Discord.MessageEmbed()
            .setTitle(`${emoji.Camera} Commands`)
            .setDescription(Image)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(image)
        }
        
        if(args.join(" ").toLowerCase() == 'animals') {
            const animals = new Discord.MessageEmbed()
            .setTitle(`${emoji.DoggoLul} Animals Commands`)
            .setDescription(Animals)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(animals)
        }
        
        if(args.join(" ").toLowerCase() == 'Other') {
            const other = new Discord.MessageEmbed()
            .setTitle(`${emoji.Wink} Other Commands`)
            .setDescription(Others)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(other)
        }
        
        if(args.join(" ").toLowerCase() == 'misc') {
            const misc = new Discord.MessageEmbed()
            .setTitle(`${emoji.Misc} Misc Commands`)
            .setDescription(Misc)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github}) | [Vote](https://top.gg/bot/818092139496996864/vote)`)
            .setTimestamp()

            message.channel.send(misc)
        }
        

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

