const lib = require("discord.js");
const channelId = require("../channel.json");
module.exports = {
    name:lib.Events.GuildMemberAdd,
    async execute(member) {
        const channel = bot.channels.cache.get(channelId.Welcome);
        channel.send(`Welcome ${member}`);
    }
}