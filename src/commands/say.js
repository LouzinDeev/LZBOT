const lib = require("discord.js");
const lzn = require("../lznlib.js");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new lib.SlashCommandBuilder()
        .setName("say")
        .setDescription("Say a message into a embed")
        .addStringOption(option => 
            option.setName("msg")
                .setDescription("The message for show")
        ),
    async execute(interaction) {
        const message = interaction.options.getString("msg");
        const embed =  lzn.createEmbed("Say", `${message}`);
        await wait(700);
        await interaction.reply({embeds: [embed]});
    }
}