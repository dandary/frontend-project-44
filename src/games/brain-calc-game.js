import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculateOperations = (randomOperator, firstOperand, secondOperand) => {
  let result = 0;
  switch (randomOperator) {
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '+':
      result = firstOperand + secondOperand;
      break;
    default:
      result = firstOperand - secondOperand;
      break;
  }
  return String(result);
};
const getQuestionAndAnswer = () => {
  const randomOperator = operators[randomNumber(0, 3)];
  const firstOperand = getRandomNumber(0, 11);
  const secondOperand = getRandomNumber(0, 11);
  const anotherGameQuestion = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const expectedAnswer = calculateOperations(randomOperator, firstOperand, secondOperand);
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};