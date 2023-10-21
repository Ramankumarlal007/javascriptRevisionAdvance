 class user {
    constructor (username) {
        // console.log(username);
        this.username = username
    }
    
    logme() {
        return ` my name is ${this.username}`
    }
createidautomatically (){
    console.log(`auto Created ID is ${this.username}12t`);
    return `123T`
   
}
 }

//  const username = new user("Raushan")
// //  console.log(username);

//  const usernamee = new user("mangoo")
// //  console.log(usernamee);

// let login = username.logme();
// // console.log(login);

// console.log(usernamee.createidautomatically());
// console.log(username.createidautomatically());

// usernamee.createidautomatically()


class userr {
    constructor (username) {
        // console.log(username);
        this.username = username
    }
    
    logme() {
        return ` my name is ${this.username}`
    }
    static  createidautomatically (){
    // console.log(`auto Created ID is ${this.username}12t`);
    return `123T`
   
}
 }

class adaniPower extends userr{
    constructor (username) {
            super(username)
            console.log(`${this.username}`);
    }
}

const power = new adaniPower ('adaniWilmar');
console.log(power);

console.log(power.createidautomatically());

const iphone = new adaniPower("iphone", "i@phone.com")
console.log(iphone.createidautomatically());

