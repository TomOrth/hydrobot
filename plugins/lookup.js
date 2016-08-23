var googleSearch = require("../scrapers/google");
module.exports = {
    main: function(bot, message){
        var content = message.content;
        var search = content.substring(content.indexOf(" lookup ") + 1);
        console.log(search);
        bot.sendMessage(message, "googling" function(err, message){
            googleSearch(search, function(res){
                bot.updateMessage(message, res[0]);
            });
        });
    }

}
