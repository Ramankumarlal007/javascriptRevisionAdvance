// this is a current exec  ution context
//call , bind and apply

// this  refers to GEC . in browsr it refers to window object, in case of node it refers to {}  empty object

//call
function SetUsername(username) {
    this.username = username
    console.log("called");
}
// SetUsername()

function createUser(username, email, password){
    // SetUsername.call(this, "shahrukh khan") 
    SetUsername.call(this, username)
    // this.username = username
    this.email = email
    this.password = password
}
let userdetails = new createUser("Rishabh", "rishabh@gmial.com", 547896)

console.log(userdetails);
createUser()