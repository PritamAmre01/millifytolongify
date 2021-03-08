import { millifytolongify } from '../index';

test('Convert to millify K', () => {
  expect(millifytolongify.convertToMillify(2000.00)).toBe('2K');
});

test('Convert to millify M', () => {
  expect(millifytolongify.convertToMillify(2000000.00)).toBe('2M');
});

test('Convert to millify B', () => {
  expect(millifytolongify.convertToMillify(2000000000.00)).toBe('2B');
});
