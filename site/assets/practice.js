import { checkNumericAnswer } from './practice-logic.mjs';

const form = document.getElementById('practice-form');
const answer = document.getElementById('practice-answer');
const feedback = document.getElementById('practice-feedback');
const hintButton = document.getElementById('practice-hint-button');
const hint = document.getElementById('practice-hint');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = checkNumericAnswer(answer.value, 0.375);
  feedback.dataset.status = result.status;
  if (result.status === 'invalid') {
    feedback.textContent = 'Enter a finite number, such as 0.375, rather than a fraction or text.';
  } else if (result.status === 'correct') {
    feedback.textContent = 'Correct: 3 of 8 equally likely outcomes are favorable, so P(A) = 3 / 8 = 0.375. Equal likelihood is the key assumption.';
  } else {
    feedback.textContent = 'Not yet. Count the favorable outcomes (3), divide by the total equally likely outcomes (8), and enter the decimal probability. The answer must be between 0 and 1.';
  }
});

hintButton.addEventListener('click', () => {
  hint.hidden = !hint.hidden;
  hintButton.setAttribute('aria-expanded', String(!hint.hidden));
});

form.addEventListener('reset', () => {
  // Reset event fires before the browser clears the input; no value read here.
  feedback.textContent = '';
  delete feedback.dataset.status;
  hint.hidden = true;
  hintButton.setAttribute('aria-expanded', 'false');
});
