/* Basic Algorithm Scripting: Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.*/

function factorialize(num) {
  while (num>1){
    return (num*factorialize(num-1));
  }
  return 1;
}

factorialize(5);
