
//ES6
//we r using after eS6 all r syntactical sugar

// constructor get called   automatically whenever the word constructor is called . same way we use new

//encryptPassword is a method. same as function

class User {
    constructor( username, email, password ) {
    this.username = username
    this.email = email
    this.password = password
}
encryptPassword(){
    return `${this.password}abc`
}

changeUserNAme(){
    return `${this.username.toUpperCase()}`
}
}
const chai = new User("chai", "chai@example.com", 123458)

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserNAme());
  
//behind the scene function approach

function SecondUsername(username, email, id, password) {
    this.username = username;
    this.email = email;
    this.id = id;
    this.password = password;
}

SecondUsername.prototype.encryptPassword = function bitlock () {
    console.log(`Rishabh`);
    console.log(`Rishabh: ${this.username.toUpperCase()}`);
    return `fantastic: ${this.id}`
}
SecondUsername.prototype.applenew = function () {
    return `Replace new mechanism with beta model: ${this.id}`
}



let apple = new SecondUsername("macbookair", "r@apple.co.in", "app4587", "Boeing@789")

// console.log(apple.encryptPassword());
//  console.log(apple.applenew());


//constructor approach by the help of class


class scorpio {
    constructor (username, email, id, password) {
        this.username = username;
        this.email = email;
        this.id = id;
        this.password = password;
    }
 designChange(){
    return `Replace latch mechanism with new model: ${this.id}`
 }

Boeing(){
    return `Boeing 747 id fitted with pratt ans witney 4 engines 4${this.id}`
}

}

scorpio.prototype.version = function () {
    return `Qatar order 45 A350 aircraft: ${this.username}`
}

scorpio.prototype.applenew = function () {
    return `Replace new mechanism with beta model: ${this.id}`
}

let airbus = new scorpio("Qatar", "qatar@airbus.co.in", "QATAIR4597", "Qat87qiopz")

// console.log(airbus.id);
// console.log(airbus.version());
// console.log(airbus.designChange());
console.log(airbus.applenew());
console.log(airbus.Boeing());

