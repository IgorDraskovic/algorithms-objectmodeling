








//FIND DUPLICATE
function ArrayDup() {

  this.method1 = function(arr) {
    //loop through the array
    for (var i = 0; i <= arr.length; i++) {
      //nested loop with second counter
      for (var j = i; j <= arr.length; j++) {
        //check if the counter i and counter j have matching values
        if (i != j && arr[i] === arr[j]) {
          console.log('yes')
        }
      }
    }
    console.log('no')

  //THE PROBLEM IS THAT TIME COMPLEXITY IS O(n * n) because each loop can run any number of times
  //NOT VERY EFFICIENT...
  }

  this.method2 = function(arr) {
    count = [] // associative array to keep track of the values
    //loop through the passed array
    for(var i = 0; i <= arr.length; i++) {
      //set count to each value in array and check if it exists laready
      if(count[arr[i]] === undefined) {//count[arr[i]] === undifned?  if it is count[arr[i]] = 1; else 'there is a duplicate' or return count
        //if it is undifend/ does not exist set it to 1 so it's no longer undefined
        count[arr[i]] = 1;
      } else {
        //otherwise it is already in there and defined so there is a doop
        console.log('there is a duplicate')
      }
    }
    console.log('sorry no duplicate')
  }


}

var dupfunction = new ArrayDup();
console.log(dupfunction.method2([11, 2, 11]))


//FIND MAX SUBARRAY
//subarraymax(myarray)
//var firstsum and var seconesum = 0
//standard for loop
//secondsum = math.max secondsum + each i in array myArray[i]
//first sum = math.max(secondSum, firstsum)  the max of both
function subArraymax(myArray){
  var firstSum = 0, secondSum = 0;
  for(var i = 0;i < myArray.length;i++){
    secondSum = Math.max(0,secondSum + myArray[i]);
    firstSum = Math.max(secondSum, firstSum);
  }
  return firstSum;
}

var igorArray = [0, 2, -3, 2, 5, -10]

console.log(subArraymax(igorArray));// it would give you 7..

