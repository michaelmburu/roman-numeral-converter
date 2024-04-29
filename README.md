# Roman Numerals Converter

This project provides a simple utility to convert numbers to Roman numerals and vice versa. It includes two functions: `toRoman` and `fromRoman`.

## Installation

To use this project, you need to have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: https://nodejs.org

Once you have Node.js and npm installed, follow these steps:

1. Clone this repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the project dependencies.

Sure, here's a markdown file explaining the project, how to set up, and how to run it:
markdownCopy code# Roman Numerals Converter

This project provides a simple utility to convert numbers to Roman numerals and vice versa. It includes two functions: `toRoman` and `fromRoman`.

## Installation

To use this project, you need to have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: https://nodejs.org

Once you have Node.js and npm installed, follow these steps:

1. Clone this repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the project dependencies:

npm install

npm test

## Usage

The project exports an object called `romanNumerals` with two methods:

1. `toRoman(num)`: Converts a given number to its Roman numeral representation.
2. `fromRoman(roman)`: Converts a given Roman numeral string to its corresponding number.

Here are some examples:

```javascript
import romanNumerals from './index';

console.log(romanNumerals.toRoman(1984)); // Output: MCMLXXXIV
console.log(romanNumerals.fromRoman('MCMLXXXIV')); // Output: 1984