import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const playGame = (description, getQuestionAndAnswer) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(description);

  for (let round = 0; round < rounds; round += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
