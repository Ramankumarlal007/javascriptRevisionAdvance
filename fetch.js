/*A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.*/

//https://developer.mozilla.org/en-US/docs/Web/API/fetch

//https://fetch.spec.whatwg.org/#fetch-method 

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
        // reject()
    }, 5000);
} )

promiseOne.then(function () {
    console.log("Promise is consumed");
}).catch( function () {
    console.log("promise is rejected");
} )

promiseOne.catch( function () {
    console.log('promise is rejected');
} )


const promisenine = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error  = true
    if (!error) {
        resolve({username: "javascript", login: "Boeing@787"})
    } else {
        reject ('Error: javascript went wrong')
    }
    }, 9000);

} )

async function promiseNineCompleted() {
    try {
    let taskNine = await promisenine;
    console.log(taskNine);
    } catch (error) {
        console.log(`Promise was rejected: ${error}`);
    }
}

promiseNineCompleted()

promisenine.then( function (user) {
    console.log("Id is resolved");
    console.log(user);
    return user.login
} ).then(function (superman) {
    console.log(superman);
})
.catch( function () {
    console.log("Id is rejected");
} )


async function getAllUserData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    let jsonData = await response.json()
    console.log(jsonData);
    } catch (error) {
        console.log(error);
    }
}

getAllUserData()

fetch('https://jsonplaceholder.typicode.com/users').then( function (response) {
    return response.json()
}).then( (data) => {
    console.log(data);
} ).catch( function (error) {
        console.log(error, `encountered`);
} )























