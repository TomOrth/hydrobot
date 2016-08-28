//libs
var request = require('request'),
	cheerio = require('cheerio');
//base url for youtube
var base = 'https://www.youtube.com';
//query route
var url = base + '/results?search_query=';
//main function
function youtube(search, callback) {
	//make a GET request to search for youtube vids
	request(url + search.split(' ').join('+'), function(err, response, html) {
		//loads requested html
		$ = cheerio.load(html);
		var res = new Array();
		//for each search item
		$('.yt-lockup-title').each(function(i, elm) {
			//ignore the first one
			if (i !== 0) {
				//save the link
				var link = $(this).children().first();
				res.push(base + link.attr('href'));
			}
		});
		//perform callback
		callback(res);
	});
}
//expose method so others can use it
module.exports = youtube;