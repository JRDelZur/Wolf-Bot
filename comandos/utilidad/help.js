const Discord = require("discord.js");

module.exports = {
  name: "help",
  alias: ["ayuda"],
  async execute(client, message, args) {
    
    const indice = new Discord.MessageEmbed()
    .setTitle(':shield: | Ayuda')
    .setDescription('Reacciona para mostrarte mis comandos')
    .setFooter(`Reacciones: 
    โ๏ธ = Comandos de Configuracion
    ๐ฎ = Comandos de Diversion
    ๐ = Comandos de Moderacion
    ๐ = Comandos de Utilidad
    ๐ = Indice`)
    
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
    โ๏ธ = Comandos de Configuracion
    ๐ฎ = Comandos de Diversion
    ๐ = Comandos de Moderacion
    ๐ = Comandos de Utilidad
    ๐ = Indice`)

    const help_fun = new Discord.MessageEmbed()
     .setTitle(':shield: | Ayuda')
     .setDescription('Comandos de Diversion')
     .addFields(
       {
         name: "love / ship", value: "Prueba la compatibilidad que tienes con un usuarioโค๏ธโค๏ธ"
       },
       {
         name: "stonks", value: "STONKS!!! ๐๐๐๐"
       }
     )
     .setFooter(`Reacciones: 
    โ๏ธ = Comandos de Configuracion
    ๐ฎ = Comandos de Diversion
    ๐ = Comandos de Moderacion
    ๐ = Comandos de Utilidad
    ๐ = Indice`)

    const help_mod = new Discord.MessageEmbed()
     .setTitle(':shield: | Ayuda')
     .setDescription('Comandos de Moderacion')
     .addFields(
       {
         name: "clear / purge", value: "Borra cierta cantidad de mensajes"
       }
     )
     .setFooter(`Reacciones: 
    โ๏ธ = Comandos de Configuracion
    ๐ฎ = Comandos de Diversion
    ๐ = Comandos de Moderacion
    ๐ = Comandos de Utilidad
    ๐ = Indice`)

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
    โ๏ธ = Comandos de Configuracion
    ๐ฎ = Comandos de Diversion
    ๐ = Comandos de Moderacion
    ๐ = Comandos de Utilidad
    ๐ = Indice`)


    message.channel.send(indice).then(m => {
      m.react('โ๏ธ')
      m.react('๐ฎ')
      m.react('๐')
      m.react('๐')
      m.react('๐')
      m.awaitReactions((reaction, user) => {
        const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
        if(message.author.id !== user.id) return;

        if(reaction.emoji.name === 'โ๏ธ') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_config);
        }

        if(reaction.emoji.name === '๐ฎ') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_fun);
        }

        if(reaction.emoji.name === '๐') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_mod);
        }

        if(reaction.emoji.name === '๐') {
          try {
            for (const reaction of userReactions.values()) {
              reaction.users.remove(user.id);
            }
          } catch(error) { console.error(error) }
          m.edit(help_util);
        }

        if(reaction.emoji.name === '๐') {
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