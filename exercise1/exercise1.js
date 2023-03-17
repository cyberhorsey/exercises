const prompt = require('prompt-promise');
mathQuestion();
async function mathQuestion(){
    let i=1;
    while (i<=3){
        let answer = await prompt('What is 3+4?');
        if (answer == 7){
            console.log('You are correct, good job!')
            process.exit()
        } else {
            console.log('You are incorrect. You have ' + (3-i) + ' chances remaining');
            i = i+1;
        }
        if (i >= 4){
            console.log('You have failed 3 times! You lose!')
            process.exit()
        }

    }
}

