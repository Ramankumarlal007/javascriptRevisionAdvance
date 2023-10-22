 //Now you know Object

// to provide a customized things only or to restrict sth we use getter and setter

// if we define get we need to define set a must

class user {
    constructor (email, password){
        this.email = email;
        this.password = password
        console.log(`constructor email value is : ${this._email}`);
    }

    get email(){
        return `returned email to the client is set to ${this._email.toUpperCase()}xyz`
    }
   
    set email(value) {
        this._email = value;
        console.log(`Email property is being set to: ${value}`);
    }



    get password(){
        // return this._password.toUpperCase()
        return `${this._password}rish$bh0241!iqz`
    }
   
    set password (value) {
        // this._password = value.toUpperCase()
        this._password = value
    }
    // RangeError: Maximum call stack size exceeded. this sis bcoz password is set a multiple places (at constructor also and at geteer and setter also) here race condition starts. to solve this we had to use _password inplace of password

    logme(customer, mail){
        console.log(`I am logged In as: ${mail} and he is my value customer ${customer}`);
    }
}

const newuser = new user("guest@gmail.ai" , "45678!uiq")
// console.log(newuser.password);
// console.log(newuser._password);
// console.log(newuser);

// newuser.logme("raman", "r@ymail.com")

//if someone wants to access my email/password what it want to show him this si sdefinedby get and set

console.log(newuser.email);

//by the function method/ previouly done in this below way:-

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);


//object based same thing.. it is very rare

const User1 = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User1)// on the base of user create an object. ths is factory function
console.log(tea.email);