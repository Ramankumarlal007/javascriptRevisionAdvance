// console.log(Math.ceil(Math.PI) *9);
//to find th ereason behind why we r not able to change the value of PI

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// as pi is not changeBLE due to this above define dproperties in it . now can we do to our own created object/array like the PI. let's have a look 

const chai = {
    name: "ginger Chai",
    price: 550,
    isAvailable: true
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai)); //undefined
// bcoz we r evalauate here chai which is object but the "getOwnPropertyDescriptor" checks for the property

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// {
//     value: 'ginger Chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
  //now i wan tto define my property to change . 

  Object.defineProperty(chai, "name", {    
    writable: false,
    enumerable: true,})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// {
//     value: 'ginger Chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (const [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key}: ${value}`);
    }
}