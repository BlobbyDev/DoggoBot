const Discord = require('discord.js');
const config = require('./config.json');

const shards = new Discord.ShardingManager("./index.js", {

    token: config.Token,
    totalShards: 'auto'

});

shards.on("shardCreate", shard => {

    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Lanched shard #${shard.id}`);

});

shards.spawn(shards.totalShards, 10000);