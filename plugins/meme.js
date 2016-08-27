var fse = require("fs-extra");
var memeMaker = require("meme-maker");

module.exports = {
    main: function(bot, message){
        var content = message.content,
            text = content.split("-");
        var options = {
            image: __dirname + "/templates/" + text[0] + ".jpg",
            outfile: __dirname + "/" + message.author.name + "-" + message.server + ".jpg",
            topText: text[1],
            bottomText: text[2]
        };
        memeMaker(options, function(err) {
            if(err) console.log(err);
            bot.sendFile(message, options.outfile);
            fse.remove(options.outfile, function(err){
                if(err) console.log(err);
            });
        });

    }
}
