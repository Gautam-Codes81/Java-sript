
// update 
// let arr = [1,2,3,4];
// arr[2] = 15;
// *******************************************
// PUSH / POP
//let arr = [1,2,3,4,5];
// arr.push(7000);
//arr.pop();
// ********************************

// let arr2 = [2,4,6,8,10];
// arr2.shift(); //shift ka matlab hota h ki startting value hata deta h
//************************************** */

//let arr = [3,5,6,7,89,5];
// arr.unshift(50); // unshift starting mai  value ko add karata h
//arr.splice(2,2); // bich ka value hatana h
//*********************************** */
// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,4); // main array change nhi hota h 
//*********************************** **********/
// let arr = [2,4,5,6,745,77,77,89];
// arr.reverse();
// ************************************************
// let arr = [2,4,5,6,745,77,77,89];
// let src = arr.sort(function(a,b){

//     return b-a; // b-a ka matlab h ascending order
// })
// 
//***************************************** */

// let arr = [11,62,3,4,25];
// arr.forEach(function(val){  // forEach ka use 
//     // console.log(val);
//     console.log(val+5);
// })
// ******************************************

// map srf tab youse karna hai jab Aapko ek naya array
//banana hai pichle array ke data ke basis par
// let arr = [11,62,3,4,25];
// let newarr = arr.map(function(val){
//     // if(val>10) return val;
//     return 15;
// })
// ********************************

// FILTER 

// let arr = [ 1,2,3,4,5,6,7,8,];
// let newarr = arr.filter(function(val){
//   if(val>4) return true;
     
// })
//******************************************* */

// let arr = [1,2,3,4,5,6];

// let ans = arr.reduce(function(accumulator, val){
//  return accumulator+val;  

// }, 0); // reduce ka matlab h ki sigle value mai store karana jaise sabka sum 21 
// *****************************************

// SOME BATATA H KI APKE ARRAY 85 SE UPPER NUMBER WALA EXIST KARATA TRUE PRINT KAREGA
let arr = [10,30,40,50,90];

let any = arr.some(function(val){
    return val>85;
})