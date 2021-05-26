# Doggo

A cool multi purpose discord bot with commands for Fun, Moderation, Utility, Image and Animals also with owner only commands !! and also make sure you `Star` the repo too :D

[Add It](https://discord.com/api/oauth2/authorize?client_id=818092139496996864&permissions=8&scope=bot) | [Join Our Discord](https://discord.gg/RWSEj6JrjJ) | [Vote](https://top.gg/bot/818092139496996864/vote)

[![DiscordBanner](https://invidget.switchblade.xyz/RWSEj6JrjJ)](https://discord.gg/RWSEj6JrjJ)

[![Discord Bots](https://top.gg/api/widget/status/818092139496996864.svg?noavatar=true)](https://top.gg/bot/818092139496996864)
![LOC](https://tokei.rs/b1/github/Dinav69/DoggoBot?category=code)
[![dependencies](https://img.shields.io/david/Dinav69/DoggoBot)](https://david-dm.org/Dinav69/DoggoBot)

## How to setup 

### Creating a Bot and adding to your server

◙ Go to `Discord Developer Portal` by [clicking here](https://discord.com/developers/applications)

◙ Click on to `New Application` and then name your application

◙ Selct the application you will see bot just under `OAuth2` select that

◙ Press `Add Bot`

◙  Then go to `OAuth2` to get the bot's invite link

◙ Under scopes you'll see bot click that and under you see `Bot Permissions` select the permissions

◙ Copy the invite link which is generated on the `Scopes`

◙ Go to bot tab then you'll see `TOKEN` click copy 

◙ Make sure you turn on both the intends in your you'll find that in that bot category !!

And now you got the token !!!

## Configuring

Make a `.env` file and then:
```
TOKEN=Replace with your bot's token that I just explained how to obtain
YT_KEY=YouTube API Key for Youtube Command
IMBD_KEY=IMBD api key for the Movie Command
GOOGLE_KEY=The Goole api search engine key for Google Command
ENGINE_ID=The search engine ID for Google Command
```
Search `GOOGLE_KEY` & `ENGINE_ID` can be obtained from [here](https://cse.google.com/cse/), `YT_KEY` from [here](https://console.cloud.google.com/apis/library/youtube.googleapis.com?q=you&id=125bab65-cfb6-4f25-9826-4dcc309bc508&project=ninth-psyche-296311) and `IMDB_KEY` from [here](https://developer.imdb.com/)

**Do not put any commas or anything on `.env` file's value !!**

Go to `config.json` and then:
```js
{
    "Prefix": "The prefix that you need for your bot",
    "Owner": "You ID",
    "Invite": "You bot's invite link that we just explained how to obtain",
    "Server": "Your bot's support server"
}
```

**Channel Setup**

go to `channels.json`

```js
{
    "ServerLogs": "ID of channel that you wann receive the bot's server logs",
    "Feeback": "ID of the channel that you wanna get the feedback of the bot",
    "Report": "Id of the channel that you wanna get the reports of the bot",
    "Suggestion": "ID of the channel that you wanna get the suggestions of the bot"
}
```

If you need to change the emojis go to `emoji.json` and change it I recommend the value to be same as it is

## Starting the Bot

**Things that are required**

[Node.js](https://nodejs.org/en/)

[Git](https://git-scm.com/)

[Discord](https://discord.com/)

[Visual Studio Code](https://code.visualstudio.com/download)

◙ Then first to install the packages open a terminal in visual studio code type `npm install`

![terminal](https://user-images.githubusercontent.com/45940386/111021871-b22ee080-83e8-11eb-92cb-c2ff2ccc7b3f.png)

◙ Then after the packages and intalled and things are been configured in the `config.json`

◙ Go to the terminal type `node index.js`

![terminal2](https://user-images.githubusercontent.com/45940386/111021908-e1dde880-83e8-11eb-8799-5a1b95b9998a.png)

◙ After a few seconds (well maybe more all according to you network) you'll see `<your bot's user> is now connected to Discord`

![terminal3](https://user-images.githubusercontent.com/45940386/111021941-236e9380-83e9-11eb-9a5c-b66e96f16ade.png)

**And that's for the self hosting**

## Commands

## Moderation

| Name | Description | Usgae | Example | Aliases
|----|----|----|----|----|
| Ban | Bans a user from the server | !!ban [Mention or ID] [Reason] | !!ban @Dinav Being too cool | -
| Kick | Kicks a user from the server | !!kick [Mention or ID] [Reason] | !!kick @Dinav Rude | -
| Forceban | Bans a user outside the guild and prevent from joining | !!forceban [User ID] [Reason] | !!forceban 484892489332430 nothing | hackban, ipban
| Slowmode | Sets the slowmode to your own wish | !!slowmode [number] | !!slowmode 69 | slow
| Unban | Unbans the user from the banned list | !!unban [User ID] [Reason] | !!unban 43894434893849 Nothing | -
| Clear | Clear the provided amount of messages but the amount should not go above 100 | !!clear [Anount] | !!clear 69 | -
| Addrole | Adds role to a user with the provided role mention or ID | !!addrole [User] [Role] | !!addrole @Dinav @Mod | giverole, ar
| Removerole | Removes role from a user with the provided role mention or ID | !!removerole [User] [Role] | !!removerole @Dinav @Mod | takerole
| Nickname | Changes the nickname of the user with the prvided nickname | !!nickname [User] [nickname but if the nickname has space in between use ""] | !!nickname @Dinav Blob | nick 

## Fun

| Name | Description | Usage | Example | Aliases
|----|----|----|----|----|
| 8ball | Bot answers the question you ask for | !!8ball [Question] | !!8ball Is Doggo cool ? | -
| Ascii | Converts texts to ascii format | !!ascii [word] | !!ascii HI | -
| PP | Welp you know that command no need to explain | !!pp [Mention or ID] | !!pp @Dinav | -
| Rps | Plays Rock paper scissor with the bot | !!rps [Rock / Paper / Scissor] | !!rps rock | -
| Coinflip | Flips a coin for you | !!coinflip | !!coinflip | toss
| Roll | Rolls die for you | !!roll | !!roll | dice 
| Trumptweet | Converts you text to trump's tweet lol | !!trumptweet [message] | !!trumptweet Hi | tt
| Tictactoe | To play tic tac toe with the mentioned user | !!tictactoe [user] | !!tictactoe @Dinav | ttt
| Gayrate | Gets in the gayrate of the provided user | !!gayrate [user] | !!gayrate @Dinav | -
| Lesbianrate | Gets the lesbianrate of the provided user | !!lesbianrate [user] | !!lesbianrate @Dinav | lr
| Simprate | Gets the simprate of the provided user | !!simprate [user] | !!simprate @Dinav | simp
| Emojify | Emojifies you text | !!emojify [text] | !!emojify hi | emoji
| Petemoji | Pets an emoji that you need (it only pets custom emojis) | !!petemoji [emoji] | !!pet emoji :lol: | emojipet

## Utility 

| Name | Description | Usage | Example | Aliases 
|----|----|----|----|----|
| Avatar | Give the avatar of the mentioned user or the ID provided | !!avatar [Mention or ID] | !!avatar @Dinav | av, pfp
| Covid | Gives the covid 19 status of a country | !!covid [country name] | !!covid Canada | corona, rona
| Say | Bot repeats whatever you say | !!say [Something] | !!say HI | tell 
| Urban | Give the meaning of a word or a phrase using urban dictionary | !!urban [Word] | !!urban cool | -
| Weather | Gives the weather info of the provided location | !!weather [Location] | !!weather Alberta | -
| Youtube | Searches youtube for you | !!youtube [query] | !!youtube closer | yt
| Embed | Echos your message in embed | !!embed [text] | !!embed Hi | -
| Translate | Translates your word to the provided language | !!translate [language that you need the meaning] [Word] | !!translate spanish Hi | t
| Movie | Gived the info of the provided movie | !!movie [movie name] | !!movie avengers endgame | -
| Google | Google anything | !!google [query] | !!google YouTube | -
| Poll | Starts a poll | !!poll [text] | !!poll Am I great ? | -
| Linkshorten | Shorten the  given link to is.gd formate | !!linkshorten [link] [name of the title] | !!linkshorten https://youtube.com/ yt | shorten
| Enlarge | Enlarges the given emoji | !!enlarge [Emoji] | !!enlarge 😂 | -


## Image
| Name | Description | Usage | Example | Aliases
|----|----|----|----|----|
| Meme | Sends a random meme from reddit | !!meme | !!meme | -
| Waifu | Send a random waifu pic | !!waifu | !!waify | -
| Gay | Send the provided user's avatar in gay theme | !!gay [user] | !!gay @Dinav | -
| Invert | Send the provided user's avatar in inverted filter | !!invert [user] | !!invert @Dinav | -
| Blur | Send the provided user's avatar in blur filter | !!blur [user] | !!blur @Dinav | -
| Criminal | Send the provided user's avatar in news headlines lol | !!criminal [user] | !!criminal @Dinav | -
| Affect | Send the user's avatar in affect my baby meme | !!affect [user] | !!affect @Dinav | -
| Stonk | Send the user's avatar in stonks meme | !!stonk [user] | !!stonk @Dinav | -
| Nostonk | Send the user's avatar in no stonks meme | !!nostonk [user] | !!nostonk @Dinav | notstonk
| Trigger | Send the user's avatar in triggered !! | !!trigger [user] | !!trigger @Dinav | triggered 
| Jail | Send the user's avatar in jail | !!jail [user] | !!jail @Dinav | -
| Bonk | Bonks the user | !!bonk [user] | !!bonk @Dinav | -
| Slap | Slaps the user | !!slap [user] | !!slap @Dinav | -
| Spank | Spanks the user | !!spank [user] | !!spank @Dinav | -
| Kiss | Kisses the user | !!kiss [user] | !!kiss @Dinav | -
| Wanted | Put the user in the wanted meme | !!wanted [user] | !!wanted @Dinav | -
| Pet | Pets the avatar of the user | !!pet [user] | !!pet @Dinav | -

## Animals
| Name | Description | Usage | Example | Aliases
|----|----|----|----|----|
| Dog | Sends a random doggo pic | !!dog | !!dog | doggy, doggo
| Fox | Sends a random fox pic | !!fox | !!fox | -
| Bird | Sends a random bird pic | !!bird | !!bird | -
| Cat | Sends a random cat pic | !!cat | !!cat | -
| Panda | Sends a random panda pic | !!panda | !!panda | -
| Koala | Sends a random koala pic | !!koala | !!koala | -
| Shibe | Sends a random shibe pic | !!shibe | !!shibe | -
| Redpanda | Sends a ransom red panda pic | !!redpanda | !!redpanda | -
| Kangaroo | Sends a random kangaroo pic | !!kangaroo | !!kangaroo | -
| Racoon | Sends a random rancoon pic | !!racoon | !!racoon | -
| Catfact | Gives a random cat fact | !!catfact | !!catfact | cf
| Dogfact | Gives a random dog fact | !!dogfact | !!dogfact | df
| Foxfact | Gives a random fox fact | !!foxfact | !!foxfact | ff
| Pandafact | Gives a random panda fact | !!pandafact | !!pandafact | pf
| Birdfact | Gives a random bird fact | !!birdfact | !!birdfact | bf

## Info 
| Name | Description | Usage | Example | Aliases 
|----|----|----|----|----|
| Help | Gives all the commands I have also the detailed explanation of a command | !!help or !!help [command name] | !!help meme | h, assist 
| Serverinfo | Gives the server information of the messaged server | !!serverinfo | !!serverinfo | si, server
| Botinfo | Gives the information of the bot | !!botinfo | !!botinfo | bot, info, stats
| Whois | Gives the information of the user which is mentioned or provided ID | !!userinfo [Mention or ID] | !!userinfo @Dinav | ui, userinfo 
| Ping | Gives the latency and API latency of the bot | !!ping | !!ping | ms, latency
| Uptime | Gives the uptime of the bot | !!uptime | !!uptime | ut
| Channelinfo | Gives the info of the provided channel | !!channel info [channel] | !!channelinfo #general | channel
| Roleinfo | Gives the info of the provided role or role id | !!roleinfo [role] | !!roleinfo @Mod | role
| Systeminfo | Gives the system information like ram and stuff like that | !!systeminfo | !!systeminfo | system
| Policy | To see our privacy policy | !!policy | !!policy | privacy policy 

## Others 
| Name | Description | Usage | Exampe | Aliases
|----|----|----|----|----|
| Invite | Gets the bot's invite link | !!invite | !!invite | -
| Support | Gets the bot's support servr | !!support | !!support | server

