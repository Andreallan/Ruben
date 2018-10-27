if(msg.content.startsWith(`${prefix}ping`)) {
 const embed = new Discord.RichEmbed()
                .addField(`** **`, `Please use the command **!commands**` + `\n` + `**Pong!** Bot is connected and online!` + `\n` + `** **`)
                .setThumbnail(`${client.user.avatarURL}`)
                .setFooter(`${msg.author.tag}`, msg.author.avatarURL)
                .setTimestamp()
                .setColor(0x61bb46);
            msg.channel.send(embed);
  }
