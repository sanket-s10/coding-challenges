// Return first recurring Number from Array 

const firstRecurringNumber = (numbers) => {
    let mappedNumbers = {};
    for(let i = 0; i<numbers.length; i++){
        if(mappedNumbers[numbers[i]] !== undefined){
            return numbers[i]
        }
        else{
            mappedNumbers[numbers[i]] = true
        }
    }
    return '';
}

// TEST DATA 
//const firstNumber = firstRecurringNumber([2,4,3,5,2,4,5]);
const firstNumber = firstRecurringNumber([2,1,1,2,3,5,5]);
console.log('firstNumber', firstNumber);
