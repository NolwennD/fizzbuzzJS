const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz de 0 vaut', () => {
	expect(fizzbuzz(0)).toBe(0);
});