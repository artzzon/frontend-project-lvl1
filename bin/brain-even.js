import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

let trueAnswersCount = 0; // счетчик правильных ответов

const isEvenNumber = (num) => { // четное ли число?
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

while (trueAnswersCount < 3) {
  const randomNumber = Math.floor(Math.random() * 101); // генерация случайного числа
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".', { defaultInput: 'Empty' });
  if (answer === isEvenNumber(randomNumber)) {
    trueAnswersCount += 1;
    console.log(`Your answer: ${answer}\nCorrect!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNumber)}'.\nLet's try again, Test!`);
    break;
  }
}

if (trueAnswersCount === 3) {
  console.log('Congratulations, Test');
}