import readlineSync from 'readline-sync';
import getUserNameAndGreeting from './cli.js';

const gameLogic = (description, getQuestionAndTrueAnswer) => {
  let trueAnswersCount = 0; // счетчик правильных ответов
  console.log('Welcome to the Brain Games!');

  const userName = getUserNameAndGreeting();

  console.log(description);

  while (trueAnswersCount < 3) {
    const [question, trueAnswer] = getQuestionAndTrueAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (answer === trueAnswer) {
      trueAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
