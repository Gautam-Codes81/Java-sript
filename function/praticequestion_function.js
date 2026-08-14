// convert function to array function

// function multiply(a,b){
//     return a*b;
// }

// Array function 
// let multiply = (a,b) =>{
//     return a*b;
// };

// rest 

// function abcd(a, b, c, ...val){
// console.log(a,b,c,val)
// }

// abcd(1,23,4,45,56,7,7);

// ***********************************

//  use rest parmeter to accept any number of scores and return the total
 /*function getScore(...score){
let total = 0;

 score.forEach(function(val){
 total = total + val;

 })

 return total;
 } */

  //console.log(getScore(10, 12 , 14, 18));
//****************************************************** */
//   function checkAge(age){
// if(age<18) return "Too young";

// return "ALLOWED"
//   }

//   console.log(checkAge(17));

// pass a  function into function and execute it inside

// function abdc(val){
// val();
// }

// abdc(function(){
// console.log("hey");

// })
//************************************************** */


//  what is a higher order function

// function abcd(val){
// val(); // abcd is a higher order function

// }

// abcd(function(){
// // write kar sakte h

// })

// **********************************

// what is a closure ? when is it created

/*function abcd(){
 let val = 0;
    return function(){
 console.log(val);

    };
} */

    // *********************************

    // function outer(){
    //     let count = 0;
    //     return function(){
    //         count++;
    //         console.log(count); // this is program is closure
    //     };
    // }

    // const counter = outer();
    // counter();
    // counter();

    // ****************************************

    // convert this normal function into an IIFE

    // (function init(){

    //     console.log("Initialized");
    // }) ();

    // ***********************************************

    // Write a BMI calculator
//     function bmi(weight, height){
//     return weight/(height*height);

//     }

//    console.log(bmi(69, 1.7).toFixed(2));
// *************************************************
// function discountCalculator(discount){
// return function(price){
// return price - price * (discount / 100);

// };

// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// console.log(ten(1200));
// console.log(twenty(1200)); 
// *************************************************************

function counter(){

    let count = 0;
    return function(){
        count++
        return count;  /// this is program is closure
    }
}

  let c   = counter();
  console.log(c());
  console.log(c());
  console.log(c());
  console.log(c());
  console.log(c());

  let d = counter();
  console.log(d());
