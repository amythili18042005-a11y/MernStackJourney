// 1 & 2
let name = "Mythili";
let age = 20;
let isStudent = true;

console.log(name, age, isStudent);

// 3 Swap without third variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a:", a, "b:", b);

// 4 Output explanation
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 because y is a copy, not reference

// 5 Using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log(area);

// 6 Arithmetic operations
let num1 = 12;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7 Predict output
console.log(5 + "5"); // "55"
console.log(5 - "2"); // 3
console.log(true + 1); // 2

// 8 Compare with 100
let number = 120;

if (number > 100) console.log("Greater than 100");
else if (number === 100) console.log("Equal to 100");
else console.log("Less than 100");

// 9 Equality difference
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict)

// 10 Age eligibility
let personAge = 25;

if (personAge >= 18 && personAge <= 60)
    console.log("Eligible");
else
    console.log("Not eligible");

// 11 Even or Odd
let n = 7;

if (n % 2 === 0) console.log("Even");
else console.log("Odd");

// 12 FizzBuzz
if (n % 3 === 0 && n % 5 === 0) console.log("FizzBuzz");
else if (n % 3 === 0) console.log("Fizz");
else if (n % 5 === 0) console.log("Buzz");

// 13 Switch weekday
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
}

// 14 For loop
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log("Even:", i);
}

// 15 While sum 1 to N
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}
console.log("Sum:", sum);

// 16 Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}


// 17 Function sum
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));

// 18 Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 6));

// 19 Prime check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

// 20 Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 21 Output
function test() {
    return;
    console.log("Hello");
}
test(); // nothing prints

// 22 Largest number
function largest(arr) {
    return Math.max(...arr);
}
console.log(largest([4, 9, 2, 10]));

// Grade function
function calculateGrade(mark) {
    if (mark >= 90) return "A";
    else if (mark >= 75) return "B";
    else if (mark >= 50) return "C";
    else return "Fail";
}

// Input marks
let marks = 82;

// Store result
let grade = calculateGrade(marks);

// Final output
console.log("Marks:", marks);
console.log("Grade:", grade);