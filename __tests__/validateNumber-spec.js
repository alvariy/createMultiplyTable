const funcMap = require('../validateNumber');



it ('should return null given first number is greater that second', () => {

    const firstNumber = 5;
    const secondNumber = 3;
    let number = funcMap.validateNumber(firstNumber,secondNumber);
    expect(number).toBe(null);
});


it ('should return true given first number is not greater that second', () => {

    const firstNumber = 3;
    const secondNumber = 5;
    let number = funcMap.validateNumber(firstNumber,secondNumber);
    expect(number).toBe(true);
});

it ('should return false if number is in range given inputNumber is greater than 1000', () => {

    const inputNumber = 1001;
    let result = funcMap.checkIfInRange(inputNumber);
    expect(result).toBe(false);
});

it ('should return true if number is in range', () => {

    const inputNumber = 1000;
    let result = funcMap.checkIfInRange(inputNumber);
    expect(result).toBe(true);
});


it ('should arrange list of equation given valid numbers', () => {

    const firstNumber = 2;
    const secondNumber = 4;
    const resultsss = '2x2=4\n2x3=6 3x3=9\n2x4=8 3x4=12 4x4=16'
    console.log(resultsss);
    let result = funcMap.MultiplyNumbers(firstNumber,secondNumber);
    // console.log('1x1=1 \n' + '1x2=2');
    expect(result).toBe(resultsss);
});

