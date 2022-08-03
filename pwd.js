

module.exports = function () { 
    process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    let dir = process.cwd();

    if (cmd === 'pwd') {
        process.stdout.write(dir)
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
})}