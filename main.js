"use strict";
//Assignment:
//Q1. Write a function checkEvenOdd that accepts a number and prints whether it is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}
checkEvenOdd(4);
checkEvenOdd(7);
//Q2.Write a function arrayOperations that creates an array of numbers, adds a number to the end of the array, removes the first number, and prints the modified array.
// Step 1: Create an array of numbers
let arr = [2, 4, 6, 7, 8];
function arrayOperations() {
    // Step 1: Create an array of numbers
    // Step 2: Add a number to the end of the array
    arr.push(3);
    // Step 3: Remove the first number
    arr.shift();
    // Step 4: Print the modified array
    console.log(`Modified array: ${arr}`);
}
arrayOperations();
//Q3. Write a function multiplies the elements of an array by 2 and returns the modified array.
let originalArray = [2, 4, 6, 8, 10];
function multiplyByTwo(arr) {
    return arr.map(element => element * 2);
}
let modifiedArray = multiplyByTwo(originalArray);
console.log(modifiedArray);
//Q4. Write a function findLargest that accepts an array of numbers and returns the largest number.
let myArray = [10, 5, 20, 25, 15, 30];
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let largestNumber = findLargest(myArray);
console.log("The largest number is: ", largestNumber); // Output: The largest number is: 25
//Q5. Write a function reverseString that accepts a string and returns the reversed string.
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join back into a string
    return str.split('').reverse().join('');
}
let str = "Hello, Anum!";
let reversed = reverseString(str);
console.log(str); // Output: "Hello, Anum!"
console.log(reversed); // Output: "!munA ,olleH"
