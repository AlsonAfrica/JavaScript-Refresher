/*1. Write a code using if else statements to check the
temperature and print a message based on the following
conditions:*/
let temperature = parseInt(prompt("Enter temperature value"));
if (temperature < 0){
    console.log("its freezing!");
} else if((temperature > 0) && (temperature <= 15)){
    console.log("its cold");
} else if ((temperature >= 16) && (temperature <= 25)){
    console.log("its mild");
} else if(temperature > 25){
    console.log("its warm");
}

//2. Re-write the code using switch statements. 
let temperature1 = parseInt(prompt("Please Enter second temperature value:")); 

switch (true) {
  case (temperature < 0):
    console.log("It's freezing!");
    break;
  case (temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;
  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

//Exercise 2: Divisibility Check
/*1. Write a code using if else statements to check if a number is
divisible by 2, 3, or both:*/

let num = parseInt(prompt("Enter Number"));

if ((num % 2 === 0) && (num % 3 === 0)){
    console.log("Divisible by both 2 and 3.");

} else if (num % 2 === 0){
  console.log("Divisible by 2");
} else if (num % 3 === 0){
    console.log("Divisible by 3");
} else {
    console.log("Not divisble by 2 or 3");
}

//2. Re-write the code using switch statements.
let num2 = parseInt(prompt("Enter number(switch  statement):"));
switch (true) {
    case (num2 % 2 === 0 && num % 3 === 0):
      console.log("Divisible by 2");
      break;
    case (num2 % 2 === 0):
      console.log("Divisible by 2");
      break;
    case (num2 % 3 === 0):
      console.log("Divisible by 3");
      break;
    default:
      console.log("Not Divisible by both 2 and 3");
  }

//Exercise 3: For loops
//1. Print numbers from 1 to 10
for (let a = 1; a < 11; a++){
    console.log(a);
}

//2. Print all even numbers between 1 and 20.
for (let z = 1; z <= 20; z++){
   if (z % 2 === 0){
    console.log(z)
   }
}

/**3. Calculate the sum of all numbers from 1 to 100 and print the
result. Hint:‘+=’ */
let total = 0;
for (let y = 1; y <= 100; y++){
  total += y;
  console.log(total);
}

/**4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers,
print each element to the console. */
const array = [1,2,3,4,5];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

/**5. const numbers = [3, 7, 2, 5, 10, 6].Given the array of numbers,
find and print the largest number.
#Hint: current value and previous value */

const numbers = [3,7,2,5,10,6];
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
   
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is: " + largest);

// Exercise 4: While loops

//1. Print numbers from 1 to 10.
let i = 0
while (i<10){
    i++;
    console.log(i)

}

// 2. Print all even numbers between 1 and 20
let z = 1;

while (z <= 20) {
    if (z % 2 === 0) {
        console.log(i);
    }
    z++;
}

/** Calculate the sum of all numbers from 1 to 100 and print the
result. */

let sum = 0; 
let v = 1;  

while (v <= 100) {
    sum += v; 
    v++;      
}

console.log("The sum of all numbers from 1 to 100 is: " + sum);

/**4. Print all multiples of 5 less than 50.
# Hint: ‘%’
 */
let t = 1;

while (t < 50) {
    if (t % 5 === 0) {
        console.log(t);
    }
    t++;
}

// Exercise 5: Do While loops
//Print numbers from 1 to 10.
let ii = 1;

do {
    console.log(ii);
    ii++;
} while (ii <= 10);

/**Calculate the sum of all numbers from 1 to 100 and print the
result */
let sum2 = 0;
let z2 = 1;

do {
    sum2 += z2;
    z2++;
} while (z2 <= 100);

console.log("The sum of all numbers from 1 to 100 is: " + sum);

/**Prompt the user to enter a number greater than 10. Keep
asking until they enter a valid number. */
let userInput;

do {
    userInput = prompt("Please enter a number greater than 10:");
    userInput = Number(userInput);
} while (isNaN(userInput) || userInput <= 10);

console.log("Thank you! You entered: " + userInput);

/**Create a simple guessing game where the user must guess a
number between 1 and 10. The game continues until the user
guesses the correct number. */
// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

do {
    userGuess = prompt("Guess a number between 1 and 10:");
    userGuess = Number(userGuess);

    if (userGuess === targetNumber) {
        console.log("Congratulations! You guessed the correct number: " + targetNumber);
    } else {
        console.log("Try again!");
    }
} while (userGuess !== targetNumber);