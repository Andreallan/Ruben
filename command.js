client.on('message', (msg) => {
	if(msg.content.startsWith(`${prefix}command`)) {
		const embed = new Discord.RichEmbed()
		.addField(`<a:DTchest:504926277061443594> General Commands`, `**support <message>**` + `\n` + `**request <new nick>**` + `\n` + `**staff**` + `\n` + `**ping**`, true)
		.addField(`<a:DTbanned:504926276767842314> Staff`, `**say <message>**` + `\n` + `**tools**`, true)
		.setColor(0x1480C3);
		msg.channel.send(embed);
	}
}
