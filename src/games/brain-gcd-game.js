import gameEngine from '../gameLogic.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  for (let i = number1; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return String(i);
    }
  }
  return undefined;
};
const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 101);
  const number2 = getRandomNumber(1, 101);
  const anotherGameQuestion = `${number1} ${number2}`;
  const expectedAnswer = getGcd(number1, number2);
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};