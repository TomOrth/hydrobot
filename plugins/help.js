var fse = require('fs-extra');
module.exports = {
	main: function(bot, message) {
		bot.sendMessage(message.author, fse.readFileSync(__dirname + '/help.txt'));
		bot.sendMessage(message, 'Help has been sent');
	}
};