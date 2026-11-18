import test from 'node:test';
import assert from 'node:assert/strict';
import { checkNumericAnswer } from '../site/assets/practice-logic.mjs';

test('correct decimal and exponent formats', () => {
  assert.equal(checkNumericAnswer('0.375', 0.375).status, 'correct');
  assert.equal(checkNumericAnswer(' 3.75e-1 ', 0.375).status, 'correct');
});
test('incorrect and boundary values', () => {
  assert.equal(checkNumericAnswer('0.25', 0.375).status, 'incorrect');
  assert.equal(checkNumericAnswer('0', 0.375).status, 'incorrect');
  assert.equal(checkNumericAnswer('0.3750000005', 0.375).status, 'correct');
  assert.equal(checkNumericAnswer('0.375000002', 0.375).status, 'incorrect');
});
test('reject invalid inputs', () => {
  for (const s of ['', ' ', '3/8', 'Infinity', 'NaN', '1,000', '0.3foo', '1e999']) {
    assert.equal(checkNumericAnswer(s, 0.375).status, 'invalid', s);
  }
  assert.equal(checkNumericAnswer(null, 0.375).status, 'invalid');
});
test('invalid checker configuration throws', () => {
  assert.throws(() => checkNumericAnswer('1', NaN), RangeError);
  assert.throws(() => checkNumericAnswer('1', 1, -1), RangeError);
});
