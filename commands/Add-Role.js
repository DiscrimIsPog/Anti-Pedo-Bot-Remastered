const Discord = require('discord.js')

module.exports = {
  commands: 'giverole',
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  callback: (message, arguments) => {
    if (message.channel instanceof Discord.DMChannel) {  // Do if dm
      message.author.send("Can't Use This In A DM.")
    }
    else {
      if (message.author.id === "689200533067661422" || message.author.id === "691621577212690532") { //Do Shit
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
          message.reply('Please specify someone to give a role to.'); setTimeout(() => {
            const amount = 2
            message.channel.bulkDelete(amount)
          }, 1000)
          return
        }

        arguments.shift()

        const roleName = arguments.join(' ')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
          return role.name === roleName
        })
        if (!role) {
          message.reply(`There is no role with the name "${roleName}"`); setTimeout(() => {
            const amount = 2
            message.channel.bulkDelete(amount)
          }, 1000)
          return
        }

        const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role).catch((error) => {
          console.log('An error occured.')
          message.reply(`An error occured. Permission Issue?`)
        }); setTimeout(() => {
          const amount = 2
          message.channel.bulkDelete(amount)
        }, 1000)
      }
      else {
        message.reply(`Fuck off eh? Nodin Is The Only Cool One.`)
      }
    }

  }
}
