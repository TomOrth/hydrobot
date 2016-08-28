//libs needed
var request = require('request'),
	cheerio = require('cheerio');
var url = 'https://www.google.com/search?q=';
//main function
function googleSearch(search, callback) {
	//make a GET request to google with a q set to the search criteria
	request(url + search.split(' ').join('+'), function(err, response, html) {
		//Load requested html
		$ = cheerio.load(html);
		var res = [];
		//for each search item
		$('.r').each(function(i, elem) {
			//retrieve link
			var data = $(this);
			var link = data.children().first();
			var href = link.attr('href');
			//push link to array
			if (!href.startsWith('/search'))
				res.push(href.substring(href.indexOf('=') + 1, href.indexOf('&sa')));

		});
		//perform callback function
		callback(res);
	});
}
//expose function for other files to use
module.exports = googleSearch;