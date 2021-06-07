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
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(intro)
        }

        if(args.join(" ").toLowerCase() == 'fun') {
            const fun = new Discord.MessageEmbed()
            .setTitle(`${emoji.Fun} Help Fun`)
            .setDescription('These Commands are the fun commands which can be used by all the server members and also can play certain games')
            .addField('Commands', Fun)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(fun)
        }

        if(args.join(" ").toLowerCase() == 'info') {
            const info = new Discord.MessageEmbed()
            .setTitle(`${emoji.Info} Help Info`)
            .setDescription('These are the info commands that can gives the informations about the various things and also this can be used by all the server member too')
            .addField('Commands', Info)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(info)
        }
        
        if(args.join(" ").toLowerCase() == 'mod') {
            const mod = new Discord.MessageEmbed()
            .setTitle(`${emoji.Moderation} Help Mod`)
            .setDescription('These are the moderation command which can be used by the mods, server managers and admins only')
            .addField('Commands', Moderation)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(mod)
        }
        
        if(args.join(" ").toLowerCase() == 'utility') {
            const utility = new Discord.MessageEmbed()
            .setTitle(`${emoji.Utility} Help Utility`)
            .setDescription('These are the utility command which can used by all the server memebers and also this includes the commands that need api call so yeah enjoy these commands')
            .addField('Commands', Utility)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(utility)
        }
        
        if(args.join(" ").toLowerCase() == 'image') {
            const image = new Discord.MessageEmbed()
            .setTitle(`${emoji.Camera} Help Image`)
            .setDescription('These commands are the image manipulation commands in the bot which is used for fun mainly try these out :wink:')
            .addField('Commands', Image)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(image)
        }
        
        if(args.join(" ").toLowerCase() == 'animals') {
            const animals = new Discord.MessageEmbed()
            .setTitle(`${emoji.DoggoLul} Help Animals`)
            .setDescription('These commands are the animal related commands which includes the posting random images of the animals provided and also random animal facts and if you are animal lover try these out :wink:')
            .addField('Commands', Animals)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(animals)
        }
        
        if(args.join(" ").toLowerCase() == 'others') {
            const other = new Discord.MessageEmbed()
            .setTitle(`${emoji.Wink} Help Others`)
            .setDescription('These are the casual commands that aren\'t that is present in all the bots which like giving out the extra infos about us')
            .addField('Commands', Others)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(other)
        }
        
        if(args.join(" ").toLowerCase() == 'misc') {
            const misc = new Discord.MessageEmbed()
            .setTitle(`${emoji.Misc} Help Misc`)
            .setDescription('These commands are used to contact the us about you issues, feedbacks and stuff like that so yeah ||joining the support server is better tho to get direct support||')
            .addField('Commands', Misc)
            .addField(':notepad_spiral: Note', `For detailed help in a command type:\n\`${config.Prefix}help [Command Name]\``)
            .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
            .setTimestamp()

            message.channel.send(misc)
        }
        

        let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
    
        if(!command) return;

        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 1024}))
        .setTitle(':mag: Detailed Help')
        .addField('Command Name', `\`\`\`${command.name}\`\`\``, true)
        .addField('Description', `\`\`\`${command.description}\`\`\``)
        .addField('Category', `\`\`\`${command.category}\`\`\``, true)
        .addField('Aliases', `\`\`\`${command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}\`\`\``, true)
        .addField('Example', `\`\`\`${command.example}\`\`\``, true)
        .addField(`${emoji.Link} Useful Links`, `[Add Me](${config.Invite}) | [Join Server](${config.Server}) | [Source Code](${config.Github})`)
        .setTimestamp()

        message.channel.send(embed)
    
    }
        
}
