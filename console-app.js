#!/usr/bin/env node

const commander = require('commander');
const fetch = require('node-fetch');

const baseUrl = process.env.baseUrl || 'http://localhost:3000/api';
const messageServiceUrl = `${baseUrl}/message/welcome`;

commander
	.version('1.0.0')
	.option('-w, --welcome', 'show welcome message')
	.parse(process.argv);

if (commander.welcome) {
	fetch(messageServiceUrl)
		.then(res => res.json())
		.then(json => {
			console.log(json.text);
		});
} else {
	console.log('Unknown command. Try \'-h command \' ');
}
