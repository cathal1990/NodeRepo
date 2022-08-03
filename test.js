debugger;
const cool = () => {
    console.log('1')
    setTimeout(() => {
        console.log('2');
    }, 3000)
};

setTimeout(() => {
    console.log('3');
}, 3000)

cool();
console.log('end of file')