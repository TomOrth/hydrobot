var fs = require("fs");
module.exports = {
    main: function(bot, message){
        bot.sendMessage(message.author, fs.readFileSync(__dirname + "/help.txt"));
        bot.sendMessage(message, "Help has been sent");
    }
}
