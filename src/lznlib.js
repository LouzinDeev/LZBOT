const lib = require("discord.js");

exports.createEmbed = (title, desc) => {
    const newEmb = new lib.EmbedBuilder()
    .setTitle(`${title}`)
    .setDescription(`${desc}`);
    return newEmb;
}