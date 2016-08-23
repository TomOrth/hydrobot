var requests = require("requests"),
    cheerio = require("cheerio");
var url = "https://www.google.com/search?q=";    
module.export = function(search, callback){
    requests(url+search.split(" ").join("+"), function(err, response, html){
        $ = cheerio.load(html);
        var res = new Array();
        $(".r").each(function(i, elem) {
            var data = $(this);
            var link = data.children().first();
            var map = new Map();
            res.push(link.attr("href"));
        });
        callback(res);
    });
}
