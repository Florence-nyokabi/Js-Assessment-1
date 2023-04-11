// Question 1
let food = eating;
function reverseString(food){
    return food.reverse();
}
console.log(reverseString(food));




// Question 2
function searchTarget(num){
    let target = 23;
    let first = [0];
    let last = [-1];

    let middle = math.floor((last + first)/2);
    let emptyArray = [];

    if(first < last){
        console.log(num);
    }
    else if(last < first){
        emptyArray =+
        console.log(emptyArray);

    }
}

let num = [2,8,0,23,5,45,76]

// Question 3
let year = 2000;
function isLeapYear(){
    for(year >= 2000 && year <= 2023){
        if (year % 4 === 0){
            console.log("${year} is a leap year");
        }
        else{
            console.log("${year} is not a leap year");
        }
    }
}
console.log(isLeapYear(2004));

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
let numArray = [12,87,45,75,23,64,73];
let mul = 1;
function multiply(numArray){
    for( i in numArray){
       return (i * 4) 
       i++;
    }
}
console.log(multiply(numArray));

// Question 6
let nums = ["10", "24", "45", "56", "67"];
function numbers(nums){
    for( i in nums){
        return i.toNumber();
    }
}