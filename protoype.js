// due to prototype we r getting the functions of new, this, prototype inheritance, arrow function(this), classes.
// prtotupal behaviour is the behaviourof js, it goes on searching till it get null
// prototype of object is at last null

function multiplyBy5(num) {
    return num*5
} 

multiplyBy5.power = 2
// console.log(multiplyBy5);

// console.log(multiplyBy5(5)); // 25
// console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.prototype ); //{}

// function, Array, object, string all are Object
// bythe help of thsi  a current context is set




const newHero = {
    username: "raushan",
    id: 235059
}

// console.log(newHero);




 

 /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//injecting own functionality of object in a function

function createUser(username, score){
        this.username = username
        this.score = score
}

createUser.prototype.increament = function () {
    this.score++
}
createUser.prototype.printME= function () {
    console.log(`Price is ${this.score}`);
}
 
const chai = new  createUser('Rishabh', 300)
const tea = new   createUser('tea', 450)

// console.log(chai);
// console.log(tea);

// chai.printME()
// tea.printME()
// chai.increament()
 
 

// ********** protoype  Section from here 

let myName = "Raman    "
// console.log(myName);
// console.log(myName.trim());
// console.log(myName.length);
// console.log(myName.trim().length);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}  

heroPower.getSpiderPower()

//i have given power to the object directly
Object.prototype.rishabh = function () {
    console.log("Rishabh is a good boy is now present in all object");
}

heroPower.rishabh()

myHeros.rishabh()


// nOw giving power to the Array
Array.prototype.heyRishabh = function () {
    console.log("i am present in array");
}

// heroPower.heyRishabh()

myHeros.heyRishabh( )  //array



// inheritance : kisi aur is property of apnay mai use karna  is prto typal inheritance
 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // important
}

Teacher.__proto__ = User   // impoertant   


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// creating a truelenth method in prototype

let anoterUser = "chaiaurcode     "

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`My truelength is ${this.trim().length}`);
}

anoterUser.truelength()

myName.truelength()

"tiger   ".truelength()























