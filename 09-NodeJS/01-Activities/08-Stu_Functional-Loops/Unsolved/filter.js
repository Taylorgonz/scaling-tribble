const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter((data ) => data % 2)
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
    // If a number is even (divisible by 2), the condition returns true.

// console.log(evenNumbers);
// console.log(originalArray);

const isPrime = originalArray.filter((num) => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % originalArray.length === 0) return false;
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
});
console.log(isPrime)

// TODO: Describe how filter is working in this example. What will the value of primeArray be? 

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
const moreThan5Array = originalArray.filter(num => num > 5);

console.log(moreThan5Array)