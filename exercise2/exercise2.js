//Write a function that takes a minimum number and a maximum number,
// and using a for loop, log out all odd numbers between the min and the max, NOT including the min or max themselves.
const prompt = require('prompt-promise');
minMaxOdd()
async function minMaxOdd(){
    let numberArray = [];
    let lowerBound = await prompt('What are your lower bound?');
    let upperBound = await prompt('What is your upper bound?');
    lowerBound = parseInt(lowerBound);
    upperBound = parseInt(upperBound);
    if (isNaN(lowerBound) || isNaN(upperBound)) {
        console.log('the lower and upperbounds need to be numbers!')
        process.exit();
    }
    if (lowerBound >= upperBound){
        console.log('the lower bound cannot be greater or equal to the upper bound');
        process.exit();
    }
    for (let i = lowerBound; i <= upperBound; i++){
        if (i % 2 != 0){
            numberArray.push(i);
        }
    }
    console.log('Here are the odd numbers between your lower and upper bounds: '+ numberArray);
    process.exit()
}


