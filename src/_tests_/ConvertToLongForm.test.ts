import { millifytolongify } from '../index';

test('Convert to longify K', () => {
  expect(millifytolongify.convertToLongForm('2k')).toBe('2,000.00');
});

test('Convert to longify M', () => {
  expect(millifytolongify.convertToLongForm('2M')).toBe('2,000,000.00');
});

test('Convert to longify B', () => {
  expect(millifytolongify.convertToLongForm('2B')).toBe('2,000,000,000.00');
});

test('Convert to longify T', () => {
  expect(millifytolongify.convertToLongForm('2T')).toBe('2,000,000,000,000.00');
});

test('Convert to longify Q', () => {
  expect(millifytolongify.convertToLongForm('2Q')).toBe('2,000,000,000,000,000.00');
});
