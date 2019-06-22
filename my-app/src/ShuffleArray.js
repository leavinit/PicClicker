function ShuffleArray(arr){
//acquired from https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order
    const result = [];
    for (let i = arr.length-1; i >= 0; i--) {
      // picks an integer between 0 and i:
      const r = Math.floor(Math.random()*(i+1));   // NOTE: use a better RNG if cryptographic security is needed
      // inserts the arr[i] element in the r-th free space in the shuffled array:
      for(let j = 0, k = 0; j <= arr.length-1; j++) {
        if(result[j] === undefined) {
          if(k === r) {
            result[j] = arr[i];    // NOTE: if array contains objects, this doesn't clone them! Use a better clone function instead, if that is needed. 
            break;
          }
          k++;
        }
      }
    }
    return result;
  }
  

  export default ShuffleArray;
