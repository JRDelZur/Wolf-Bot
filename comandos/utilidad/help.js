const Discord = require("discord.js");

module.exports = {
  name: "help",
  alias: ["ayuda"],
  async execute(client, message, args) {
    
    const indice = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setDescription('Reacciona para mostrarte mis comandos')
    .setFooter(`Reacciones: 
    ⚙️ = Comandos de Configuracion
    🎮 = Comandos de Diversion
    📜 = Comandos de Moderacion
    🌎 = Comandos de Utilidad
    📚 = Indice`)
    
     const help_config = new Discord.MessageEmbed()
     .setTitle(':shield: | Ayuda')
     .setDescription('Comandos de Configuracion')
     .addFields(
       {
         name: "set-prefix / setprefix", value: "Cambia mi prefijo"
       },
       {
         name: "set-sugerencia / setsugerencia", value: "Establece el canal para las sugerencias"
       }
     )
     .setFooter(`Reacciones: 
    ⚙️ = Comandos de Configuracion
    🎮 = Comandos de Diversion
    📜 = Comandos de Moderacion
    🌎 = Comandos de Utilidad
    📚 = Indice`)

    const help_fun = new Discord.MessageEmbed()
     .setTitle(':shield: | Ayuda')
     .setDescription('Comandos de Diversion')
     .addFields(
       {
         name: "love / ship", value: "Prueba la compatibilidad que tienes con un usuario❤️❤️"
       },
       {
         name: "stonks", value: "STONKS!!! 📈📈📈📈"
       }
     )
     .setFooter(`Reacciones: 
    ⚙️ = Comandos de Configuracion
    🎮 = Comandos de Diversion
    📜 = Comandos de Moderacion
    🌎 = Comandos de Utilidad
    📚 = Indice`)

    const help_mod = new Discord.MessageEmbed()
     .setTitle(':shield: | Ayuda')
     .setDescription('Comandos de Moderacion')
     .addFields(
       {
         name: "clear / purge", value: "Borra cierta cantidad de mensajes"
       }
     )
     .setFooter(`Reacciones: 
    ⚙️ = Comandos de Configuracion
    🎮 = Comandos de Diversion
    📜 = Comandos de Moderacion
    🌎 = Comandos de Utilidad
    📚 = Indice`)

    const help_util = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setDescription('Comandos de Utilidad')
    .addFields(
      {
        name: "help / ayuda", value: "Te muestro mis comandos"
      },
      {
        name: "invite / iv", value: "Te brindo mi link de invitacion"
      },
      {
        name: "sugerencia / suggest", value: "Manda tu sugerencia al canal de sugerencias"
      }
    )
    .setFooter(`Reacciones: 
    ⚙️ = Comandos de Configuracion
    🎮 = Comandos de Diversion
    📜 = Comandos de Moderacion
    🌎 = Comandos de Utilidad
    📚 = Indice`)


    message.channel.send(indice).then(m => {
      m.react('⚙️')
      m.react('🎮')
      m.react('📜')
      m.react('🌎')
      m.react('📚')
      m.awaitReactions((reaction, user) => {
        const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
        if(message.author.id !== user.id) return;

        if(reaction.emoji.name === '⚙️') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_config);
        }

        if(reaction.emoji.name === '🎮') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_fun);
        }

        if(reaction.emoji.name === '📜') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_mod);
        }

        if(reaction.emoji.name === '🌎') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_util);
        }

        if(reaction.emoji.name === '📚') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(indice);
        }
      })
    })
  }
}