const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz de 0 vaut 0', () => {
	expect(fizzbuzz(0)).toBe(0);
});

test('fizzbuzz de 1 vaut 1', () => {
	expect(fizzbuzz(1)).toBe(1);
});

test('fizzbuzz de 3 vaut Fizz', () => {
	expect(fizzbuzz(3)).toMatch('Fizz');
});

test('fizzbuzz de 6 vaut Fizz', () => {
	expect(fizzbuzz(6)).toMatch('Fizz');
});

test('fizzbuzz de 5 vaut Buzz', () => {
	expect(fizzbuzz(5)).toMatch('Buzz');
});

test('fizzbuzz de 10 vaut Buzz', () => {
	expect(fizzbuzz(10)).toMatch('Buzz');
});

test('fizzbuzz de 15 vaut FizzBuzz', () => {
	expect(fizzbuzz(15)).toMatch('FizzBuzz');
});
