#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../bin/brain-games.js';

let trueAnswersCount = 0; // счетчик правильных ответов

const isEvenNumber = (num) => { // четное ли число?
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (trueAnswersCount < 3) {
  const randomNumber = Math.floor(Math.random() * 101); // генерация случайного числа
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
  if (answer === isEvenNumber(randomNumber)) {
    trueAnswersCount += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNumber)}'.\nLet's try again, ${playerName}!`);
    break;
  }
}

if (trueAnswersCount === 3) {
  console.log(`Congratulations, ${playerName}!`);
}
