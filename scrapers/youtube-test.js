var youtube = require('./youtube');

youtube('hello world', function(res) {
	console.log(res.join('\n'));
});