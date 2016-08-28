module.exports = {
	main: function(bot, message) {
		var kickee = message.mentions[0];
		if (bot.memberHasRole(message.author, message.server.roles.get('name', 'Bot Commander'))) {
			try {
				bot.kickMember(kickee.id, message.server);
				bot.reply(message, ': ' + kickee + ' has been kicked.');
			} catch (e) {
				console.log(e);
			}
		} else {
			bot.reply(message, ': you do not have the proper requirements for this action');
		}
	}
};