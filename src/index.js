import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameLogic = (description, getQuestionAndTrueAnswer) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(description);

  for (let round = 0; round < rounds; round += 1) {
    const [question, trueAnswer] = getQuestionAndTrueAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
