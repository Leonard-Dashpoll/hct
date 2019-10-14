const yargs = require('yargs').argv

let server = {};

if (yargs._.length > 1) return;

if (!yargs.name) return console.log("Name is missing");
server.name = yargs.name;

if (!yargs.os) return console.log("OS is missing");

let availableOS = ["ubuntu", "debian", "fedora", "centos"];

if (!availableOS.includes(yargs.os.toLowerCase())) return console.log("unavailable os");
server.os = yargs.os.toLowerCase();

if (yargs.sshKey) server.sshKey = yargs.sshKey;

console.log(server);
