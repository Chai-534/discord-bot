const {Client, IntentsBitField} = require ('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.login("MTI1ODE5NzM2MDcxOTMwMjcxNw.G4Oc58.OMytntQ0A08TySAb8YdK9Q4yD9kwU2wtuDPPZQ");