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

    const firstNumber = 2;
    const secondNumber = 4;
    const resultsss = '2x2=4\n2x3=6 3x3=9\n2x4=8 3x4=12 4x4=16'
    console.log(resultsss);
    let result = funcMap.MultiplyNumbers(firstNumber,secondNumber);
    // console.log('1x1=1 \n' + '1x2=2');
    expect(result).toBe(resultsss);
});

