module.exports = async (client) => {
        
    process.on('unhandledRejection', err => console.log(err))
    console.log(`${client.user.tag} is now conneted to Discord !!`)
    client.user.setActivity(`@${client.user.username}`, {type: "LISTENING"})
    
}
