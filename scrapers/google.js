var request = require("request"),
    cheerio = require("cheerio");
var url = "https://www.google.com/search?q=";    
function googleSearch(search, callback){
    request(url+search.split(" ").join("+"), function(err, response, html){
        $ = cheerio.load(html);
        var res = new Array();
        $(".r").each(function(i, elem) {
            var data = $(this);
            var link = data.children().first();
            var href = link.attr("href");
            res.push(href.substring(href.indexOf("=") + 1, href.indexOf("&sa")));
        });
        callback(res);
    });
}
module.exports = googleSearch;

