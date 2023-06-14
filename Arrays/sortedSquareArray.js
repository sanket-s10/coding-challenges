function sortedSquaredArray(array) {
    // Write your code here.
    let startIndex = 0;
    let endIndex = array.length - 1;
    let newArr = [];
    for(let i = array.length -1; i>=0; i--){
        const smallerValue = array[startIndex];
        const largerValue = array[endIndex];
        if(Math.abs(smallerValue) > Math.abs(largerValue)){
            newArr[i] = smallerValue * smallerValue;
            startIndex ++;
        }else{
            newArr[i] = largerValue * largerValue;
            endIndex --;
        }
    }
    return newArr;
}

// TEST CASES 

// IF all are positive then it is strightforward solution as index of values in original array will be 
// same in new array.
// Issues is when we have negative values in array. 
const sortedArr = sortedSquaredArray([-2,-1,0, 3,7,8,10]);
console.log(sortedArr)