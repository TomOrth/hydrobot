var googleSearch = require("../scrapers/google");
module.exports = {
    main: function(bot, message){
        var search = message.content;
        console.log(search);
        bot.sendMessage(message, "googling", function(err, message){
            googleSearch(search, function(res){
                bot.updateMessage(message, res[0]);
            });
        });
    }

}
