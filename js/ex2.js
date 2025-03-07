const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Odd Numbers:", numbers.filter(num => num % 2 !== 0));
console.log("Divisible by 2 or 5:", numbers.filter(num => num % 2 === 0 || num % 5 === 0));
console.log("Divisible by 3, squared:", numbers.filter(num => num % 3 === 0).map(num => num ** 2));
console.log("Sum of squares of numbers divisible by 5:", numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((sum, num) => sum + num, 0));