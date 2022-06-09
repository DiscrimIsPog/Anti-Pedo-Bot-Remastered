module.exports = {
  commands: ['deletechannel', 'delchannel', 'deletethis'], // Command Name
  permissions: 'CHANGE_NICKNAME', // Anti DM
  callback: (message, arguments, text) => {
    try {
      if (message.author.id === "689200533067661422" || message.author.id === "691621577212690532") { //Do Shit
        message.channel.delete()
        console.log('Channel Was Deleted... Who did that?') // Event Handler
      }
      else {
          message.reply(`Fuck off eh? Nodin Is The Only Cool One.`) // Missing Permission
      }
      } catch(err) {
      console.log('Fuck, Somthing Bad Happened.') // Code Broke
      }
  },
}
