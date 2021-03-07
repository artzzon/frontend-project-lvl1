import readlineSync from 'readline-sync';

const welcome = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

export default welcome;