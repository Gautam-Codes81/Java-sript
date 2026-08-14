// CREATING A OBJECT 
// let obj = {
// name:  "gautam",
// age: 26,
// khaana: "daal chawal",

// };
// *******************************************************
// const user = {
// name: "harsh",
// address:{
//     city: "Bhopal",
//     pin: 462001,
//     location:{
//         lat: 23.2,
//         lng: 77.4,
//     },
// },


// };

//user.address.location.lng; 
//let {lat,lng} = user.address.location; // ye bhi kar sakte h best h
//*************************************************************** */

// let obj = {
//     name: "harsh",
//     age: 36,
//     email: "test@gmail.com",
// };

// for(let key in obj){
//     console.log(key);
// }
//******************************************* */
// let obj = {
//     name: "harsh",
//     age: 36,
//     email: "test@gmail.com",
//  };

// // let obj2 = {...obj}; // use huaa spread operator
// //   console.log(obj2);

// let obj2 = Object.assign({price:Infinity}, obj); // name age email object.assign use karate h to price infinity ho jata h
// ********************************************************************
let role = "admin";
let obj = {
    name: "gautam",
    age: 22,
    email: "gautam@gmail.com",
    address:{
        city: "bhopal",
    },

    [role]: "harsh", // esko bolate h computed properties
};

//let obj2 = JSON.parse(JSON.stringify(obj)); // deep clcne bolate h 


