import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const generationProgression = (progressionStart, progressionStep, progressionLength) => {
  const progression = [progressionStart];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = generationProgression(
    getRandomNumber(1, 10),
    getRandomNumber(1, 3),
    getRandomNumber(5, 10),
  );
  const deleteRandomElement = getRandomNumber(0, progression.length - 1);
  const answer = progression.splice(deleteRandomElement, 1, '..');
  return [progression.join(' '), String(answer)];
};

export default () => playGame(description, getQuestionAndAnswer);
