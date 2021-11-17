//-------------------------------[TENNEARY OPERATOR+ SWITCH]
//#1 change this function into a ternary and assign it to variable called experiencePoints
var win= true;

var winBattle=function(){
var result =(win)? true: false;
return result;

}

	
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}



//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined
//#3 return value when moveCommand("back");
"you arriwed a home"
//#4 return value when moveCommand("right");
"you found a river"
//#5 return value when moveCommand("left");
undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function winerGrand(position){
	var grand;
	switch(position){
	case "1st":
		grand=1000;
		break;
	case "2st":
		grand=500;
		break
	case "3st":
		grand= 250;
		break;
		default:
		grand="sorry you dont hava a grand";
	}
return grand;
}

//-------------------------------[ES5/ES6 LET CONST => TEMPLATE STRING]
// change everything below to the newer Javascript!

// let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

let a = 'test';
const b = true;
const c = 789;
a = 'test2'

// Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;


// Object properties
const a = 'test';
const b = true;
let c = 789;

var okObj = { a, b, c }


// Template strings
const city = "tokio";
const firstName = "Bado";

// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
const whereAmI = (username, lacation) => (usename && laction) ? "I am lost" : "I am totaly lost";

//-------------------------------[ES7 JOIN INCLUDE **]
// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('john');
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) //--


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (a) => a ** 2;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power(10000);'


//-------------------------------[ES8 PADSTART,PADEND OBJ.ENTRIES]
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); //addd 9 ==== in the end


// #3) Get the below object to go from:
let obj = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer',
    }
    // to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ') //--

//-------------------------------[ADVANCE OBJECT]
//Evaluate these:
//#1
[2] === [2] //false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5 }; //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(type, name, color) {
        this.type = type;
        this.name = name;
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    voice() {
        console.log(`hi I am ${this.name} my type is ${this.type} and a color ${this.color}`)
    }
}

const cow = new Mamal("cow", "koli", "brown");

//-------------------------------[ADVANCE LOOPS]

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}
 
//1 for (array)
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2 forEach (array)
basket.forEach(item => {
  console.log(item);
})
//for in  (object)
for (item in detailedBasket) {
  console.log(item);
}

//for of (array)
for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let max =arr[0];
    for(let i =0; i<arr.length; i++){
        (max<arr[i]) ? max=arr[i]:max;
    }
    (max===undefined)? max=0: max;
    return max;
}

function biggestNumberInArray2(arr) {
    let max  =arr[0];
    arr.forEach(item=>{
        (max<item) ? max=item:max;
    })
    (max===undefined)? max=0: max;
    return max;
}

function biggestNumberInArray3(arr) {

    let max  =arr[0];
    for (item in arr){
        (max<item) ? max=item:max;
    }
    (max===undefined)? max=0: max;
    return max;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}