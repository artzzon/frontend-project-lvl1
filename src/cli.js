import readlineSync from 'readline-sync'

export const welcome = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}


