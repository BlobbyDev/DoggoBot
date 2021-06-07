const config = require('../config.json');

module.exports = async (client) => {
        
    let usersCount = 0;
    for (const guild of client.guilds.cache) {
    usersCount += (await guild[1].members.fetch()).size
    }
        
    const channel = client.channels.cache.get('841516179876478997')
    process.on('unhandledRejection', err => console.log(err))
    client.user.setActivity(`${config.Prefix}help | ${client.guilds.cache.size} Servers`, {type: "LISTENING"}, {status: "dnd"})
    await console.log(`${client.user.tag} is now conneted to Discord !! Cached ${usersCount} Users`)
    await channel.send(`<a:online:814401275587592222> | **${client.user.username}** is ready`)
    
}
