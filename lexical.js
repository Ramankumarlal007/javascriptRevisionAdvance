// function initial(newname) {
//     let name = "Rishabh"
//     console.log(`${1}`);
//     // return `${newname}`

//     function displayName(secondname) {
//       console.log(`name2 : ${secondname}`);  
//       console.log(name);
//     }

//     displayName("kairav");


// }

// let check = initial("flipkart")
// console.log(check);

// Inner Functions Access Outer Variables: In a lexically scoped language, inner functions have access to variables declared in their containing functions, but not necessarily the other way around. This property is often referred to as "closure."

function outer(){
    let username = "hitesh"
    // console.log("OUTER", secret);
    function inner(){
        let secret = "my123"
        console.log("inner", username);
    }
    function innerTwo(){
        console.log("innerTwo", username);
        // console.log(secret);
    }
    inner()
    innerTwo()

}
// outer()
// console.log("TOO OUTER", username); 

//  it is out of scope it cannot access the properties inside the function

function makefun (){
        const name = "Sukanya252";
        function displayName() {
            console.log(name);
        
           
        }
            return displayName;
}

 const myFunc = makefun();
myFunc()


// function makeFun() {
//     const name = "Sukanya";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc2 = makeFun();
// myFunc();
