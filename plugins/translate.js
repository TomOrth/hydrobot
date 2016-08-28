var unirest = require('unirest');
module.exports = {
	main: function(bot, message) {
		bot.sendMessage(message, 'Translating...', function(error, msg) {
			var Request = unirest.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + process.env.YANDEX_TRANSLATE + '&text=' + message.content + '&lang=en');

			Request.header('Accept', 'application/json').end(function(response) {
				var data = JSON.parse(response.raw_body);
				bot.updateMessage(msg, data.text[0]);
			});
		});
	}
};