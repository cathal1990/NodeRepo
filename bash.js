
// process.stdout.write('prompt > ');

// let pwd = require("./pwd.js");
// let ls = require("./ls.js");
// pwd();
// ls();

process.stdout.write('prompt > ');

let catFunc = require('./cat.js')

let input = process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    return catFunc(`/${input}`);
})