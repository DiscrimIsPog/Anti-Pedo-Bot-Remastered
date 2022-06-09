const Discord = require ('discord.js')

const catchErr = err => {
  console.log("An Error occurred.")
}

module.exports = {
  commands: ['ghost'], // Command Name
  callback: (message, arguments, text) => {
    if (message.channel instanceof Discord.DMChannel) {  // Do if dm
      message.author.send("Can't Use This In A DM.")
    }
    else {
      if (message.author.id === "689200533067661422" || message.author.id === "691621577212690532") {
          message.reply(`Yessir. Understood.`)
        message.channel.send('@everyone')
        setTimeout(() => {
          const amount = 3
          message.channel.bulkDelete(amount)
        }, 1000)
        console.log('Everyone Was Ghost Pinged... Who did that?')
      }
      else {
        message.reply(`Fuck off eh? Nodin Is The Only Cool One.`) // Missing Permission
      }
    }
  }
}
