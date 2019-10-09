function validateNumber (firstNumber, secondNumber) {
    
    if(firstNumber > secondNumber)
    {
        return null;
    }
    else
    {
        return true;
    }
}

function checkIfInRange (number){

    if(number <= 1000 && number > 1)
    {
        return true;
    }
    else
    {
        return false;
    }

}

function MultiplyNumbers (firstNumber, secondNumber){

    let listOfEquation = '';
    // let nextNum = firstNumber + 1;
    let multiplyer = firstNumber + 1;

    for(let i = 0; i < secondNumber-1; i++)
    {
       if (i === 0) // first
        {
            listOfEquation += (firstNumber + 'x' + (firstNumber + i) + '=' + (firstNumber*(firstNumber+i)) + '\n');
            // nextNum += 1;
        }
        else
        {
            for(let j = 0; j < multiplyer-1; j++)
            {
                if(j == multiplyer-2)
                {
                listOfEquation += (firstNumber + j + 'x' + (multiplyer) + '=' + ((firstNumber + j)*(multiplyer)) + '\n');
                }
                // else if(j == multiplyer)
                // {
                //     listOfEquation += (firstNumber + j + 'x' + (multiplyer) + '=' + ((firstNumber + j)*(multiplyer)) + '');
                // }
                else{
                    listOfEquation += (firstNumber + j + 'x' + (multiplyer) + '=' + ((firstNumber + j)*(multiplyer)) + ' ');
                }
            }
            multiplyer += 1;
            // nextNum += 1;
        }
    }
    listOfEquation = listOfEquation.trim();
    // var currentCount = firstNumber;
    // var multiplyer = firstNumber;
    // var currrrrrr = firstNumber;

    // for(let i = 0; i< secondNumber-1; i++)
    // {
    //     if(i === 0)
    //     {
    //         listOfEquation += (firstNumber + 'x' + firstNumber + '=' + (firstNumber*firstNumber) + '\n');
    //         currentCount = firstNumber + 1;
    //         multiplyer += 1;
    //     }
    //     else if(i != 0)
    //     {
    //         for(let incrementalNumber = firstNumber; incrementalNumber < secondNumber; incrementalNumber++)
    //         {
    //             // if(incrementalNumber < currrrrrr)
    //             // {
    //             listOfEquation += (currrrrrr + 'x' + multiplyer + '=' + (currrrrrr*multiplyer) + ' ');
    //             currrrrrr += 1;
    //             // }
    //             // else{
    //             //     listOfEquation += (currrrrrr + 'x' + multiplyer + '=' + (currrrrrr*multiplyer) + '\n');
    //             //     currrrrrr = firstNumber;
    //             // }
    //             // currentCount += 1;
    //             // multiplyer += 1;
    //         }
    //     }
    // }

    console.log(listOfEquation);
    // listOfEquation = '1x1=1 \n' + '1x2=2';
    // listOfEquation = '1x1=1';
    return listOfEquation;

}

module.exports = {
    validateNumber : validateNumber,
    checkIfInRange : checkIfInRange,
    MultiplyNumbers : MultiplyNumbers
};
