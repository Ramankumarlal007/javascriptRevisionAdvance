// //promise /.then takes call back inside itself, ie. resolve and reject. resolve is a method
//what e the task  we can do :
// Do an asyn task like
//DB calls, data and nerwork

//here is promise is created
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Asyn task is completed');
        resolve()
    }, 5000);
    
})

// //to consue the above promise
// // .then has directly connection wit the resolve, but for this we need to write rsolve in above promise

promiseOne.then(function () {
    console.log('Promise consumed');
})

//second way
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asyn task2 is completed');
        resolve()
    }, 2000);
}).then(function () {
    console.log('Asyn task2 is resolved');
})

// third example
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({userNAme: "Chai", email: "chail@raman.com"} )
    }, 8000);
})

promisethree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject) {
    let error = false; // Change 'true' to 'false' to resolve the promise
    if (!error) {
        resolve({ userName: "RishabhKumarYadav", password: 123456 }); // Fix the object structure and add a comma
    } else {
        reject('Error: something went wrong'); // Correct the spelling of 'Error' and remove the colon
    }
}, 1000);


promiseFour
.then( function (user) {
    console.log(user);
    return user.userNAme
})
.then ( (userNAme) => 
{console.log(userNAme);})
.catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise (
    function (resolve, reject) {
        setTimeout(() => {
            let error = true;
            if (error) {
                resolve({username: "python", id: "pyCharm"})
            } else {
                reject ('Error: Python programming went wrong')
            }
        }, 1000);
    }
);

//done by the help of .then , .catch and .finally
promiseFive.then(function (user) {
    console.log(user);
    return user.id
} ).then( function (userName) {
    console.log(userName);
})
.catch (function () {
    console.log('handle error gracdfully');
} ).finally(function () {
    console.log('All is well');
} )

//by the help of async and await here error is not gracefully handled. 

/*async function consumePromiseFive() {
      const response =  await promiseFive // response is an object , so we cannot do like response()
      console.log(response);
}*/



const promiseSix = new Promise (
    function (resolve, reject) {
        setTimeout(() => {
            let error = false;
            if (error) {
                resolve({username: "python", id: "pyCharm"})
            } else {
                reject ('Error: Python programming went wrong')
            }
        }, 1000);
    }
);

async function consumePromiseSix() {
  try {
    const response =  await promiseSix;
    console.log(response);
  } catch (error) {
    console.log('error gracefully handled', error);
  }
}

consumePromiseSix(); // this is important 


async function getAllUserDetails () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        let data = await response.json()
        console.log(data)

    } catch (errorsuperman) {
        console.log("Error is normal.", errorsuperman);
    }
}

getAllUserDetails();


fetch('https://jsonplaceholder.typicode.com/users')
.then(
   function (response) {
    return response.json
   }
).then(function (anyVariable) {
console.log(anyVariable);
})
.catch( (E) => {
    console.log("Errror is handle with care:" E);
} ) 