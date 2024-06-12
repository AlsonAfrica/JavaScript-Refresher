
/* 1.Use comparison operators to compare two numbers and
store the results in boolean variables **/

let value1 = 20;
let value2 = 50;

let isEqual = value1 == value2;              
let isNotEqual = value1 != value2;            
let isStrictlyEqual = value1 === value2;      
let isStrictlyNotEqual = value1 !== value2;   
let isGreaterThan = value1 > value2;          
let isLessThan = value1 < value2;             
let isGreaterThanOrEqual = value1 >= value2;  
let isLessThanOrEqual = value1 <= value2;

console.log(isEqual);
console.log(isNotEqual);
console.log(isStrictlyEqual);
console.log(isStrictlyNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGreaterThanOrEqual);
console.log(isLessThanOrEqual);

/* 2.Declare two variables x and y with the values 8 and 12
respectively.*/
let x = 8;
let y = 12;

if (x > y){
    console.log("x is greater than y")
}
else if (x <= y){
    console.log("x is less than or equal to y")
}
else if (x == y){
    console.log("x is equal y.")
}
else if (x !== y){
    console.log("x is not equal to y")

}

/* 3. Declare the variables a and b with values true and false,
determine and print the result of the following logical
operations:**/
let a = true;
let b = false;
result1 = a && b;
result2 = a || b;
result3 = !a;
console.log(result1);
console.log(result2);
console.log(result3);

/*4. Declare variable p and assign it a value of 10. Use the
following assignment operators to modify the value of p with
any number and print the result each time:**/

let p = 10;
console.log(p);
p += 20;
console.log(p);
p -= 20;
console.log(p);
p*=5;
console.log(p);
p/=2;
console.log(p);
p%=5;
console.log(p);
