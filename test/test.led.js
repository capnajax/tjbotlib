
const TJBot = require('../lib/tjbot');
const config = require('./config');

var credentials = config.credentials;
var hardware = ['led'];

// turn on debug logging to the console
var tjConfig = {
    log: {
        level: 'silly'
    }
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

// play a sound file

console.log("shining");
setTimeout(() => {
	tj.shine('orange');
}, 100);
setTimeout(() => {
	tj.shine('blue');
}, 200);
setTimeout(() => {
	tj.shine('red');
}, 300);
setTimeout(() => {
	tj.shine('#000000');
}, 400);

