var googleSearch = require('./google.js');

googleSearch('microsoft', function(res) {
	console.log(res.join('\n'));
});