const { stdout } = require('process');
let request = require('request');

process.stdout.write('Enter site: ')
process.stdin.on('data', 'utf8', (input) => {
    console.log(input);
}) 



// request('https://www.google.com', function (err, response, body) {
//     console.log(err);
//     console.log(response && response.statusCode);
//     console.log('body: ', body);
// })