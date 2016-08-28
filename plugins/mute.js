module.exports = {
	main: function(bot, message) {
		var mutee = message.mentions[0];
		if (bot.memberHasRole(message.author, message.server.roles.get('name', 'Bot Commander'))) {
			try {
				bot.addMemberToRole(mutee, message.server.roles.get('name', 'muted'));
				bot.reply(message, mutee + ' has been muted.');
			} catch (e) {
				bot.sendMessage(message, 'Muted Role does not exist');
			}
		} else {
			bot.reply(message, 'you do not have the proper requirements for this action');
		}
	}
};