const romanNumerals = {
    toRoman(num) {
        const romanValues = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' },
        ];

        let result = '';
        let remaining = num;

        for (const { value, numeral } of romanValues) {
            while (remaining >= value) {
                result += numeral;
                remaining -= value;
            }
        }

        return result;
    },


    fromRoman(roman) {
        const romanValues = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };

        let result = 0;

        for (let i = 0; i < roman.length; i++) {
            const currentValue = romanValues[roman[i]];
            const nextValue = romanValues[roman[i + 1]];

            if (nextValue && nextValue > currentValue) {
                result += nextValue - currentValue;
                i++;
            } else {
                result += currentValue;
            }
        }

        return result;
    },
};

export default romanNumerals;
