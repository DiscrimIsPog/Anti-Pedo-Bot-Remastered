module.exports = {
  commands: ['help'], // Command Name
  callback: (message, arguments, text) => {
    try {
      if (message.author.id === "689200533067661422" || message.author.id === "691621577212690532") { //Do Shit
        message.author.send("Shhhh, you need some help? :eyes:")
        message.author.send("You can use ```>ghost to ghost ping the server\n>giverole <user> <role> to give yourself a role\n>deletechannel to delete the channel you send the message in.```")
        console.log('Someone Requested Help.') // Event Handler
      }
      else {
        message.reply(`Fuck off eh? Nodin Is The Only Cool One.`) // Missing Permission
      }
    } catch (err) {
      console.log(err) // Code Broke
    }
  },
}
