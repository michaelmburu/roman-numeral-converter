import romanNumerals from '../src/index';

let num, roman;

beforeEach(() => {
    num = 0;
    roman = '';
});

afterEach(() => {
    num = 0;
    roman = '';
});

describe('Roman Numerals', () => {
    describe('toRoman', () => {
        it('should convert 1 to I', () => {
            num = 1;
            expect(romanNumerals.toRoman(num)).toEqual('I');
        });

        it('should convert 4 to IV', () => {
            num = 4;
            expect(romanNumerals.toRoman(num)).toEqual('IV');
        });

        it('should convert 1000 to M', () => {
            num = 1000;
            expect(romanNumerals.toRoman(num)).toEqual('M');
        });

    });

    describe('fromRoman', () => {
        it('should convert I to 1', () => {
            roman = 'I';
            expect(romanNumerals.fromRoman(roman)).toEqual(1);
        });

        it('should convert IV to 4', () => {
            roman = 'IV';
            expect(romanNumerals.fromRoman(roman)).toEqual(4);
        });

        it('should convert M to 1000', () => {
            roman = 'M';
            expect(romanNumerals.fromRoman(roman)).toEqual(1000);
        });
    });
});
