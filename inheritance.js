class guest {
    constructor (username, error2) {
        this.username = username
        this.error2 = error2
    }
    logme(){
        
        console.log(`Guest username is: ${this.username}`);
        // return `Raman`
    }
}

let newuser = new guest ("newuser", "Error 404")
console.log(newuser);
newuser.logme()

// The super keyword is used to call the constructor of the parent class (guest) from within the constructor of the child class (admin). This allows you to set up properties and perform initialization that is common to both the parent and child classes.

class admin extends guest {
    constructor (username, error2, loginID, password){
        let shaktiman = super(username, error2)
        console.log(shaktiman);
        //
        // this.loginID = loginID
        // this.password = password
        // this.error2 = error2
    }
addCourse(){
    console.log(`A new1 course was added by ADMIN ${this.username}`);
    // return `A new2 course was added by ADMIN ${this.username}`
}
}


const master = new admin ("Rishabh", "error4", "Rishabh007",45687)
console.log(master);
// console.log(master.addCourse());
master.addCourse()

console.log(master === newuser);
console.log(master instanceof guest);
// console.log(newuser instanceof master);

// So, the admin class does take and use the parameters of the guest class through the super call in its constructor. The admin class inherits and extends the properties and functionality of the guest class while adding its own properties.






/*Inheritance is a fundamental concept in object-oriented programming, and it serves several important purposes:

1. **Code Reusability**: Inheritance allows you to create a new class (the subclass or child class) based on an existing class (the superclass or parent class). This means you can reuse the code and functionality of the parent class in the child class. In your example, the `admin` class inherits properties and methods from the `guest` class. This promotes code reusability and reduces duplication.

2. **Extension of Functionality**: Inheritance allows you to extend or specialize the behavior of a class. The child class can add new properties and methods or override existing ones. In your example, the `admin` class adds the `loginID` and `password` properties and the `addCourse` method, while still using the `username` and `error2` properties from the `guest` class.

3. **Hierarchical Organization**: Inheritance allows you to create a hierarchy of classes that model relationships between objects in the real world. For example, you can have a general class like `guest` and more specialized classes like `admin` that inherit from it. This hierarchical organization makes your code more structured and easier to understand.

4. **Polymorphism**: Inheritance is a key part of polymorphism, which allows different classes to be treated as instances of a common superclass. This can simplify code and allow for more flexible and extensible designs.

5. **Maintenance and Updates**: Inheritance simplifies code maintenance. If you need to make changes or updates to a shared behavior or property, you can do it in the parent class, and those changes will automatically apply to all the child classes. This reduces the risk of errors and makes it easier to maintain and evolve your code.

In summary, inheritance is essential in object-oriented programming to create a hierarchy of classes, reuse code, extend functionality, and model real-world relationships. It's a powerful tool for building structured, maintainable, and flexible code.*/