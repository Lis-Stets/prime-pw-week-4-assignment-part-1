console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello '+ name + '!';
}// end helloName
// Remember to call the function to test
console.log( 'Test - Say Hello to Lisette.', helloName( 'Lisette' ) );
console.log( 'Test - Say Hello to Dev.', helloName( 'Dev' ) );



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
    console.log ( 'in addNumbers', firstNumber, secondNumber );
    let sum = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
    return sum;
}// end addNumbers
console.log( 'Test - Add 3 + 4:', addNumbers( 3, 4 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ) {
    console.log( 'in multiplyThree' );
    let productOfThree = num1 * num2 * num3;
    return productOfThree; 
}// end multiplyThree
console.log( 'Test - Product of 2*4*6:', multiplyThree( 2,4,6 ) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log( 'in IsPositive' )
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}//end isPositive

// Call the function to test each outcome (true & false) 
isPositive( 17 );
console.log( isPositive( 17 ) );

isPositive( -12 );
console.log( isPositive( -12 ) );

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log( 'in getLast' );
  let lastItem = array[array.length - 1];
  return lastItem;
}
let abcs = [ 'A', 'B', 'C', 'X', 'Y', 'Z' ];
console.log( 'Test - last item of our array:', getLast( abcs ) );
let emptyArray = [];
console.log( 'Test - last item of our array:', getLast( emptyArray ) );



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  console.log( 'in find' );
  for( let i=0; i<array.length; i++ ){
    if( array[i] === value ){
      console.log( 'Found!' );
      return true;
    }
  }
  return false;
}
console.log( 'Test - Find X in abcs array. Should be true', find( 'X', abcs ) );
console.log( 'Test - Find F in abcs array. Should be false', find( 'F', abcs ) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log( 'In isFirstLetter', letter, string );
  let firstLet = string[0];
  if( letter === firstLet){
    console.log( true );
    return true;
  }
  else{
    console.log( false );
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  console.log( 'In sumAll' );
  let sum = 0;
  // TODO: loop to add items
  for( let i=0; i<array.length; i++ ){
    sum = sum + array[i];
  }
  return sum;
}
let sumTest = [ 1, 2, 3 ];
let numsToSum = [ 1, 1, 2, 3, 5, 8, 13, 21, 34 ];
console.log( 'Test - sumAll 1 + 2 + 3 =', sumAll( sumTest ) );
console.log( 'Test - sumAll 1, 1, 2, 3, 5, 8, 13, 21, 34 =', sumAll( numsToSum ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let positiveArray = [];

function positiveArrayMaker( array ){
  console.log( 'in positiveArrayMaker');
  positiveArray = [];
  for( let i=0; i<array.length; i++ ){
    if( array[i]>0 ){
      positiveArray.push( array[i] );
       'Positive integer found.'
    }
  }
  return positiveArray;
}

let testArray = [ -10, 0, 2, 4 ];
let negArray = [ -1, -12, 0, 0 ];

console.log( 'Test - positiveArrayMaker: should have 2 and 4 ', positiveArrayMaker( testArray ) );
console.log( 'testArray', testArray );
console.log( 'positiveArray', positiveArray );

console.log( 'Test - positiveArrayMaker: should be empty', positiveArrayMaker( negArray ) );
console.log( 'testArray', negArray );
console.log( 'positiveArray: should be empty', positiveArray );

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
