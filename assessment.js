// Question 1
// Write a function that takes in a string and returns it when reversed
// let food = “eating”

function reverseString(food){
    return food.split("").reverse().join("");
}
let food = "eating";
console.log(reverseString(food));




// Question 2
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function divideArray(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return sortArray(binary(divideArray(left), divideArray(right)));
}

function sortArray(left, right){
    let empty = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            empty.push(left.shift());
        }
        else{
            empty.push(right.shift());
        }
    }
    return [...empty,...left,...right];
}
let arr = [2,8,0,23,5,45,76];
console.log(divideArray(arr));

function binary(num, target){
    let left = 0;
    let right = num.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if(num[middle] === target){
            return middle;
        }
        else if (num[middle] > target){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return null;
}

let num = [0, 2, 5, 8, 23, 45, 76];
let target = 23;
console.log(binary(num, target));

// Question 3
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function isLeapYear(){
    for(let year = 2000; year <= 2023; year++){
        if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
            console.log(year + " is a leap year");
        }
        else{
            console.log(year + " is not a leap year");
        }
    }
}
isLeapYear();

// Question 4
function fizzBuzz(){
    for( let i = 0; i <= 100; i++){
        if (i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz();

// Question 5
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]

let result = [];
function multiply(numArray){
    for( let i = 0; i < numArray.length; i++) { 
       result.push(numArray[i] * 4); 
    }
    return result;
}
let numArray = [12,87,45,75,23,64,73];
console.log(multiply(numArray));

// Question 6
// let result1 = [];
// function numbers(nums){
//     for( let i = 0; i < nums.length; i++) {
//         result.push(nums[i]);
//     }
//     return result1
// }
// let nums = ["10", "24", "45", "56", "67"];

// console.log(numbers(result1));

function convertToNumbers(nums){
    return nums.map(Number);
}
let nums = ["10", "24", "45", "56", "67"];
console.log(convertToNumbers(nums));