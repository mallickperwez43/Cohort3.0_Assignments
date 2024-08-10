// Warm up -> Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favColor = "Black";
let myHeight = 183;
let likePizza = true;

console.log(favColor, myHeight, likePizza);
console.log(typeof favColor, typeof myHeight, typeof likePizza);

// 1] Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

// arrow function
const sum = (a, b) =>{
    return (a + b);
}

let num1 = 12;
let num2 = 24;

console.log(sum(num1, num2));
console.log(sum(num1, '24')); // side quest -> type conversion & concatination
console.log(typeof sum(num1, '24')); // string

// 2] Write a function called canVote that returns true or false if the age of a user is > 18

const canVote = (a) =>{
    return (a > 18) ? true : false;
}

let age = 35;
let age1 = 15; 

console.log(canVote(age));
console.log(canVote(age1));

// 3] Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

const evenOdd = (a) => {
    return (a & 1) ? "The number is Odd" : "The number is Even";
}

let num = 56;
let number = 45;

console.log(evenOdd(num));
console.log(evenOdd(number));

// 4] Write a function called sum that finds the sum from 1 to a number

const summation = (num) => {
    let ans = 0;
    for(let i = 1; i <= num; i++){
        ans += i;
    }

    return ans;
}

let numb = 100;
let totalSum = summation(numb);
console.log(totalSum);

// 5] Write a function that takes a user as an input and greets them with their name and age

// NOTE : `${}` -> emplaces the real value over that 

const greetUser = (user) => {
    console.log("Hi " + `${user.firstName}` + " your age is " + `${user.age}`); // string literals
    // console.log("Hi " + user.firstName + " , your age is " + user.age);
}

let user = {
    firstName : "Perwez",
    age : 24
};

greetUser(user);

// 6] Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

const greetTheUserByGender = (user) =>{
    console.log("Hi " + (user.gender === 'M' ? "Mr " : "Mrs ") + user.firstName + " your age is " + user.age);
}

let userOne = {
    firstName : "Perwez" , 
    age : 24 ,
    gender : 'M'
};

greetTheUserByGender(userOne);

// 7] Also tell the user if they are legal to vote or not

const votingCriteria = (user) => {
    console.log("Hi " + (user.gender === 'M' ? "Mr " : "Mrs ") + user.firstName + " your age is " + user.age + " & " + (user.age >= 18 ? "Yes, you are eligible to Vote" : "Sorry, you aren't eligible to Vote"));
}

votingCriteria(userOne);

// 8] Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

const evenEL = (arr) => {
    return (arr.filter(num => (num & 1) === 0));
}

let numArr = [1, 2, 4, 3, 5, 8, 9, 11, 81, 32, 45, 87, 910, 23];

let evenArr = evenEL(numArr);
console.log(evenArr);

// 9] Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const majorAge = (arr) => {
    return arr.filter(user => (user.age > 18));
}

let usersArr = [{
        firstName : "Jethalal" ,
        age : 50
    }, {
        firstName : "Bhide" ,
        age : 45 
    }, {
        firstName : "Tapu" ,
        age : 15
    }, {
        firstName : "Sonu" ,
        age : 14
    }, {
        firstName : "Abdul" ,
        age : 30
    }
];

let newArr = majorAge(usersArr);
console.log(newArr);

// 10] Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const maleCast = (arr) => {
    return arr.filter(user => user.age > 18 && user.gender === 'M');
}

let tarakMehtaCast = [{
    firstName : "Jethalal",
    age : 50,
    gender : 'M'
}, {
    firstName : "Bhide",
    age : 45,
    gender : 'M'
}, {
    firstName : "Tapu",
    age : 22,
    gender : 'M'
}, {
    firstName : "Sonu",
    age : 21,
    gender : 'F'
}, {
    firstName : "Abdul",
    age : 30,
    gender : 'M'
}, {
    firstName : "Babita",
    age : 35,
    gender : 'F'
}, {
    firstName : "Madhvi",
    age : 38,
    gender : 'F'
} , {
    firstName : "Sodhi",
    age : 49,
    gender : 'M'
}, {
    firstName : "Tarak",
    age : 48,
    gender : 'M'
}, {
    firstName : "Anjali",
    age : 42,
    gender : 'F'
}, {
    firstName : "Iyer",
    age : 40,
    gender : 'M'
}
];

let adultMaleCast = maleCast(tarakMehtaCast);
console.log(adultMaleCast);