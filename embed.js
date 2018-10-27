  if (msg.content.startsWith(`${prefix}embed`)) {
     const embed = new Discord.RichEmbed();
    const context = msg.content.split(' ').splice(1).join(' ');
    if (context.length <= 2 || context.length >= 1200) return msg.channel.send('**Usage:** `!embed <message>`');
    embed.setTitle(' ')
      .setDescription(context)
      .setColor(0x1480C3);
		if (msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send(embed);
  }
