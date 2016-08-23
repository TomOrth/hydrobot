var request = require("request"),
    cheerio = require("cheerio");
var base = "https://www.youtube.com";
var url = base + "/results?search_query=";
function youtube(search, callback){
    request(url+search.split(" ").join("+"), function(err, response, html){
        $ = cheerio.load(html);
        var res = new Array();
        $(".yt-lockup-title").each(function(i, elm){
            if(i !== 0){
            var link = $(this).children().first();
            res.push(base + link.attr("href"));
            }
        });
       callback(res);
    });
}

module.exports = youtube;
