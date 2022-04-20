import 'dotenv/config'
import {Client, Intents} from 'discord.js'

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

client.once('ready', (c) => {
    console.log(`Ready ! Logged in as ${c.user.tag}`)
})

client.on('interactionCreate', interaction => {
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered and interaction`);
})

client.on('message', message => {
    console.log(message)
})

client.login(process.env.DISCORD_TOKEN)