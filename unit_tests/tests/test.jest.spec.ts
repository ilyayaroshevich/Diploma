import MathOperations from '../src/mathOperations';

describe('MathOperations', () => {
    test('power - positive exponent', () => {
        const result: number = MathOperations.power(2, 3);
        expect(result).toEqual(8);
    });

    test('sqrt - positive number', () => {
        const result: number = MathOperations.sqrt(25);
        expect(result).toEqual(5);
    });

    test('isEven - even number', () => {
        const result: boolean = MathOperations.isEven(4);
        expect(result).toBe(true);
    });

    test('isOdd - odd number', () => {
        const result: boolean = MathOperations.isOdd(7);
        expect(result).toBe(true);
    });

    test('abs - positive number', () => {
        const result: number = MathOperations.abs(10);
        expect(result).toEqual(10);
    });

    test('gcd - positive numbers', () => {
        const result: number = MathOperations.gcd(24, 36);
        expect(result).toEqual(12);
    });

    test('lcm - positive numbers', () => {
        const result: number = MathOperations.lcm(12, 18);
        expect(result).toEqual(36);
    });

    test('max - array of positive numbers', () => {
        const result: number = MathOperations.max([3, 8, 1, 6]);
        expect(result).toEqual(8);
    });

    test('min - array of positive numbers', () => {
        const result: number = MathOperations.min([3, 8, 1, 6]);
        expect(result).toEqual(1);
    });

    test('average - array of positive numbers', () => {
        const result: number = MathOperations.average([3, 8, 1, 6]);
        expect(result).toEqual(4.5);
    });

    test('isPrime - prime number', () => {
        const result: boolean = MathOperations.isPrime(17);
        expect(result).toBe(true);
    });

    test('sumOfDigits - positive number', () => {
        const result: number = MathOperations.sumOfDigits(12345);
        expect(result).toEqual(15);
    });

    test('reverseNumber - positive number', () => {
        const result: number = MathOperations.reverseNumber(12345);
        expect(result).toEqual(54321);
    });

    test('power - zero exponent', () => {
        const result: number = MathOperations.power(5, 0);
        expect(result).toEqual(1);
    });

    test('isPrime - non-prime number', () => {
        const result: boolean = MathOperations.isPrime(15);
        expect(result).toBe(false);
    });
});

describe('MathOperations (Negative Tests)', () => {
    test('sqrt - negative number', () => {
        const result = () => MathOperations.sqrt(-1);
        expect(result).toThrowError('Square root of negative number');
    });

    test('max - empty array', () => {
        const result = () => MathOperations.max([]);
        expect(result).toThrowError('Array is empty');
    });

    test('min - empty array', () => {
        const result = () => MathOperations.min([]);
        expect(result).toThrowError('Array is empty');
    });

    test('average - empty array', () => {
        const result = () => MathOperations.average([]);
        expect(result).toThrowError('Array is empty');
    });

    test('gcd - zero as divisor', () => {
        const result: number = MathOperations.gcd(24, 0);
        expect(result).toEqual(24);
    });

    test('lcm - zero as divisor', () => {
        const result: number = MathOperations.lcm(24, 0);
        expect(result).toEqual(0);
    });

    test('isPrime - number less than or equal to 1', () => {
        const result1: boolean = MathOperations.isPrime(1);
        const result2: boolean = MathOperations.isPrime(0);
        const result3: boolean = MathOperations.isPrime(-17);
        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });

    test('sumOfDigits - negative number', () => {
        const result: number = MathOperations.sumOfDigits(-123);
        expect(result).toBeNaN();
    });

    test('reverseNumber - zero', () => {
        const result: number = MathOperations.reverseNumber(0);
        expect(result).toEqual(0);
    });

    test('power - negative exponent', () => {
        const result: number = MathOperations.power(2, -3);
        expect(result).toBeCloseTo(0.125);
    });

    test('power - zero base and negative exponent', () => {
        const result: number = MathOperations.power(0, -3);
        expect(result).toBe(Infinity);
    });

    test('gcd - both numbers zero', () => {
        const result: number = MathOperations.gcd(0, 0);
        expect(result).toBe(0);
    });

    test('isEven - string input', () => {
        const result: boolean = MathOperations.isEven('test' as any);
        expect(result).toBe(false);
    });

    test('sqrt - NaN', () => {
        const result = () => MathOperations.sqrt(-1);
        expect(result).toThrowError('Square root of negative number');
    });

    test('sumOfDigits - non-numeric input', () => {
        const result = MathOperations.sumOfDigits('test' as any);
        expect(result).toBe(NaN);
    });

    test('reverseNumber - non-numeric input', () => {
        const result = MathOperations.reverseNumber('test' as any);
        expect(result).toBe(NaN);
    });
});
