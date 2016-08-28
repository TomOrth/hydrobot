'use strict';

const Discord = require('discord.js');
const fse = require('fs-extra');
const PREFIX = 'hey hydro, '
let bot = new Discord.Client();

bot.loginWithToken(process.env.HYDRO_TOKEN || '');
let plugins = new Map();

function loadPlugins() {
	console.log(__dirname + '/plugins');
	let files = fse.readdirSync(__dirname + '/plugins', 'utf8');
	for (let plugin of files) {
		if (plugin.endsWith('.js')) {
			console.log(plugin.slice(0, -3));
			plugins.set(plugin.slice(0, -3), require(__dirname + '/plugins/' + plugin));
			console.log('Map: ' + plugins.has(plugin.slice(0, -3)));
		} else {
			console.log(plugin);
		}
	}
    console.log('Plugins loaded.');
}

bot.on('ready', function() {
	console.log('Hydro is ready, loading plugins');
	loadPlugins();
});

bot.on('message', function(msg) {
	if (msg.content.startsWith(PREFIX)) {
		let content = msg.content.split(PREFIX)[1];
		let cmd = content.substring(0, content.indexOf(' ')),
			args = content.substring(content.indexOf(' ') + 1, content.length);
		if (plugins.get(cmd) !== undefined && content.indexOf(' ') !== -1) {
			msg.content = args;
			plugins.get(cmd).main(bot, msg);
		} else if (plugins.get(content) !== undefined && content.indexOf(' ') < 0) {
			plugins.get(content).main(bot, msg);
		} else {
			console.log('broke:' + content);
		}
	}
});