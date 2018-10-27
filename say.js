  if (msg.content.startsWith(`${prefix}say`)) {

 const embed = new Discord.RichEmbed()
                .setDescription(`${msg.author} used the command **!say**`)
                .setColor(0x1480C3);
    client.channels.get('505560920819499019').send({
      embed
    });


    const context = msg.content.split(' ').splice(1).join(' ');
    if (context.length <= 2 || context.length >= 1200) return msg.channel.send('**Usage:** `!say <message>`');
    if (msg.member.permissions.has("MANAGE_MESSAGES")) return msg.channel.send(context);
		msg.delete()
  }
