//Object literal
const user = {
    userName : "Raman",
    logicCount: 8,
    SignedIn: true,

    getSignedIn: function () {
        console.log(`got user ID and details of youtube`);
        // console.log(this);
        // console.log(this.SignedIn);
    }
}   

// console.log(user["userName"]);
// console.log(user.logicCount);
// console.log(user.getSignedIn());

// console.log(this);


//Constructor function : 
// new keyword is Constructor function. it allows to create multiple instances from one object literal. it allows to make new context

function User(UserName, loginId, IsLoggedIn){
    this.userName = UserName;
    this.loginId = loginId;
    this.IsLoggedIn = IsLoggedIn;


    this.birthday = function () {
        console.log(`HAppy birthday to you   ${this.userName}`);
    }
    return this
}

let UserOne = new User("Rishabh", "katty", true)
let UserTwo = new User("Raman", "itzraman", false)
console.log( UserOne);
console.log(UserOne.constructor); //[Function: User]  
// constructor is the reference to itself only
 
// console.log(UserTwo.contructor);
// console.log(UserTwo["loginId  "] );

/*1. new keyword causes ---> {} known as instance ----> constructor function is get called due to new keyword and all the things are injected inside instance of. --- > this cause all the things to get added. */

// instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

function Phone(serial, price, color){
    this.serial = serial;
    this.price = price;
    this.color = color;
  }
  
  let phone1 = new Phone('abc1', 200, 'red');
  let phone2 = new Phone('abc2', 400, 'green');
  
  //instanceof 
  console.log(phone1 instanceof Phone) // true
  
  //constructor
  console.log(phone1.constructor === Phone) //true
  