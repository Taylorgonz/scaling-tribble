// 1. Using arrays
const songs = ['Bad Guy', 'Old Town Road', '7 Rings'];

for (const value of songs) {
  console.log(value);
}
// Bad Guy
// Old Town Road
// 7 Rings


// 2. Using map
const songs = new Map([['Bad Guy', 1], ['Old Town Road', 2]]);

for (const [key, value] of songs) {
  console.log(`${key}'s chart position is ${value}`);
}
// Output:
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2

const myObj={
  firstAttr: 1,
  secondAttr: 2,
  another: 4
}

for (const key in myObj) {
  console.log(key);
  console.log(myObj[key]);
}

Object.keys(myObj).forEach()
