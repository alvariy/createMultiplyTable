const funcMap = require('../validateNumber');



it ('should validate numbers', () => {

    const firstNumber = 5;
    const secondNumber = 3;
    let number = funcMap.validateNumber(firstNumber,secondNumber);
    expect(number).toBe(null);
});


it ('should check if number is in range', () => {

    const inputNumber = 1001;
    let result = funcMap.checkIfInRange(inputNumber);
    expect(result).toBe(false);
});

it ('should arrange list of equation', () => {

    const firstNumber = 1;
    const secondNumber = 2;
    const resultsss = '1x1=1\n1x2=2'
    console.log(resultsss);
    let result = funcMap.MultiplyNumbers(firstNumber,secondNumber);
    // console.log('1x1=1 \n' + '1x2=2');
    expect(result).toBe(resultsss);
});

