function Fibonacci() {

//n is the position in the sequnce
//so n 5 is the equal to 13...the 5th number in the sequence is 13
//1 1 2 3 5 8 13

/*
  this.looping = function(n) {
    var a = 1,
    b = 1,
    f = null;

    for (i = 3; i <= n; i++) {
      f= a + b; //f is the sum of a + b
      a = b; //then we move on and a becomes b
      b = f; //b becomes f and we start over again
    }

    return f;

  }
  */

//fibonacci of n or f(n) is n-1 + n-2
//1  1   2   3   5   7   8   13
//so..             n-2 + n-1 = n
  this.recursive = function(n) {
    if(n <= 2) {
      return 1;

    } else
    {
      return this.recursive(n-1) + this.recursive(n-2);
    }

  }


}

var fib1 = new Fibonacci();

console.log(fib1.recursive(7));


