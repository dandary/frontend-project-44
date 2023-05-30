import gameEngine from '../gameLogic.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const anotherGameQuestion = getRandomNumber(1, 100);
  const expectedAnswer = isEven(anotherGameQuestion) ? 'yes' : 'no';
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};