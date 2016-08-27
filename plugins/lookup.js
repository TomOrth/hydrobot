var google = require("google-search-scraper");
module.exports = {
    main: function(bot, message){
       google.resultsPerPage = 25;
        var search = message.content;
        console.log(search);
        var options = {
          query: search,
          limit: 1
        };
        bot.sendMessage(message, "Googling....", function(err, message){
            google.search(options, function(err, res){
                if(err) console.log(err);
                bot.updateMessage(message, res);
            });
        });
    }

}
