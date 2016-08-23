var youtube = require("../scrapers/youtube");
module.exports = {
    main: function(bot, message){
        var content = message.content;
        var search = content.substring(content.indexOf(" video ") + 1); 
        console.log(search);
        bot.sendMessage(message, "retrieving" function(err, message){
            youtube(search, function(res){
                bot.updateMessage(message, res[0]);
            });
        });
    }

}

