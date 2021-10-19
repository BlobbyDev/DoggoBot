const config = require('../config.json');

module.exports = async (client) => {
        
    let usersCount = 0;
    for (const guild of client.guilds.cache) {
    usersCount += (await guild[1].members.fetch()).size
    }
        
    process.on('unhandledRejection', err => console.log(err))
    client.user.setActivity(`${config.Prefix}help | ${client.guilds.cache.size} Servers`, {type: "LISTENING"}, {status: "dnd"})
    await console.log(`${client.user.tag} is now conneted to Discord !! Cached ${usersCount} Users`)
    
}
