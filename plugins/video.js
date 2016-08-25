var youtube = require("../scrapers/youtube");
module.exports = {
    main: function(bot, message){
        var search = message.content; 
        console.log(search);
        bot.sendMessage(message, "retrieving", function(err, message){
            youtube(search, function(res){
                bot.updateMessage(message, res[0]);
            });
        });
    }

}

