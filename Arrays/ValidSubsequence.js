function isValidSubsequence(array, sequence) {
    // Write your code here.
    let counter = 0;
    for(let i=0; i < array.length; i++){
        if(sequence[counter] == array[i]){
          counter++;
        }
    }
    return counter === sequence.length
  }
  
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])