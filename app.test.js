const { add, multiply, validateEmail, formatDate, measurePerformance, getPageLoadTime, calculateThroughput } = require('./app.js');

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

describe('Performance Functions', () => {
    test('measurePerformance should measure execution time', () => {
        // Mock performance.now for testing
        const originalNow = global.performance?.now;
        let callCount = 0;
        global.performance = {
            now: () => {
                callCount++;
                return callCount === 1 ? 0 : 100; // First call returns 0, second returns 100
            }
        };

        const mockFn = jest.fn(() => 'test result');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        
        const result = measurePerformance('test', mockFn);
        
        expect(result).toBe('test result');
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith('Performance: test took 100 milliseconds');
        
        consoleSpy.mockRestore();
        if (originalNow) {
            global.performance.now = originalNow;
        }
    });

    test('getPageLoadTime should return load time when performance timing is available', () => {
        const originalPerformance = global.performance;
        global.performance = {
            timing: {
                navigationStart: 1000,
                loadEventEnd: 2500
            }
        };

        const loadTime = getPageLoadTime();
        expect(loadTime).toBe(1500);

        global.performance = originalPerformance;
    });

    test('getPageLoadTime should return 0 when performance timing is not available', () => {
        const originalPerformance = global.performance;
        global.performance = undefined;

        const loadTime = getPageLoadTime();
        expect(loadTime).toBe(0);

        global.performance = originalPerformance;
    });

    test('calculateThroughput should calculate operations per second correctly', () => {
        expect(calculateThroughput(1000, 1000)).toBe(1000); // 1000 ops in 1000ms = 1000 ops/sec
        expect(calculateThroughput(500, 250)).toBe(2000); // 500 ops in 250ms = 2000 ops/sec
        expect(calculateThroughput(0, 1000)).toBe(0); // 0 ops = 0 ops/sec
        expect(calculateThroughput(100, 100)).toBe(1000); // 100 ops in 100ms = 1000 ops/sec
    });
});

describe('Integration Tests', () => {
    test('multiple operations should work together', () => {
        const result1 = add(5, 3);
        const result2 = multiply(result1, 2);
        expect(result2).toBe(16);
    });
});
