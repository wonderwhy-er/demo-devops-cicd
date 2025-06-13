const { add, multiply, validateEmail, formatDate } = require('./app.js');

describe('Math Functions', () => {
    test('add function should correctly add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(10.5, 5.5)).toBe(16);
    });

    test('multiply function should correctly multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(2.5, 4)).toBe(10);
    });
});

describe('Email Validation', () => {
    test('validateEmail should return true for valid emails', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.org')).toBe(true);
        expect(validateEmail('user+tag@example.co.uk')).toBe(true);
    });

    test('validateEmail should return false for invalid emails', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('@example.com')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('')).toBe(false);
    });
});

describe('Date Formatting', () => {
    test('formatDate should format dates correctly', () => {
        const testDate = new Date('2024-01-01');
        const formatted = formatDate(testDate);
        expect(typeof formatted).toBe('string');
        expect(formatted).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });
});

describe('Integration Tests', () => {
    test('multiple operations should work together', () => {
        const result1 = add(5, 3);
        const result2 = multiply(result1, 2);
        expect(result2).toBe(16);
    });
});
