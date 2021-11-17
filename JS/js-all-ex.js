
// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 

// my anser 
// my answer/correct answer   -> question

// //Evaluate the below:
// "534" 		-> 5 + "34" 
// -1    		-> 5 - "4"
// 0     		-> 10 % 5
// 5     		-> 5 % 10
// "JavaScript"-> "Java" + "Script"
// "  "        -> " " + " "   
// " 0"        -> " + 0		
// 2   -> true + true 
// 1    -> true + false
// 1    -> false + true
// 1    -> false - true
// -1          -> 3 - 4
// NaN			-> "Bob" - "bill"


// //Evaluate the below comparisons:
// true   		-> 5 >= 1
// false  		-> 0 === 1
// false  		-> 4 <= 1
// false  		-> 1 != 1
// false  		-> "A" > "B"
// true  -> "B" < "C"
// false  		-> "a" > "A"
// false  		-> "b" < "A"
// false  		-> true === false
// false  		-> true != true


// Make the string: "Hi There! It's "sunny" out" by using the + sign:

var str1 ="Hi There! It's /"sunny/" out";

//------------------------------------[variable] EX2------------------------------------
// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Adam";
var lastName = "Mazurek";
// create a variable that holds the answer // of "firstName" + " " + "lastName"
var myname =firstName+" "+lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?
23
// What is c equal to?
var c;
undefined

//------------------------------------[variable-calc] EX3------------------------------------
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

var firstNumber = prompt("enter first number");
var secondNumber =prompt("enter second number");
var sum=Number(firstNumber)+Number(secondNumber);
alert("sum of number: "+sum);
// BONUS: Make a program that can subtract, multiply, and also divide!

//------------------------------------[if else] EX4------------------------------------
// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
var age =Number(prompt("Please enter Your Age"));
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"
if(age<18){
	alert("Sorry, you are too young to drive this car. Powering off")
}
// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"
else if(age === 18){
	alert("Congratulations on your first year of driving. Enjoy the ride!")
}
// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
else{
	alert("Powering On. Enjoy the ride!")
};
// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

//------------------------------------[arrays]EX5------------------------------------
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort()
// 3. Put "Kiwi" at the end of the array.
array.pop("Kiwi")
// 4. Remove "Apples" from the array.
array.shift();
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
var orange =array2[1][1][0];
// Create an object and an array which we will use in our facebook exercise.

//------------------------------------[object] EX6------------------------------------
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
user1={
	username: "Ann",
	password: "Ann123!"
}

// 2. Create an array which contains the object you have made above and name the array "database".
database =[user1];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
newsfeed=[
{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
