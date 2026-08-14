/*function dance(){

console.log("dance");
console.log("dance");
console.log("dance");
console.log("dance");
console.log("dance");

}*/

// dance();
// dance();
// dance(); //jeetani baar chahoge utani baar chala sakte h

// new tarika banane ka function
// let fnc = function(){   // function expression
//  console.log("hyhhyhyhyhyhh")

// }

// fnc();

// // fat arrow fnc
// let func2 = () => {
//     console.log("gkgkgkhkhk");
// };
// fnc2();

//**************** ************************/
// function add(gk1,gk2){  // gk1 ya gk2 ha ye parameter h

// console.log(gk1+gk2);
// }

// add(20,80);
// add(80,80);
// add(80,70);
// add(90,100);  // add ke andar h 90,100 hai ye Argument h
 
//******************************** */
// rest and spread
// jab argument kai saare ho to humein utane hi parameter
 // banane padega , issey bachane ke liye hum REST ka use karte 
 //  hai ... agar ... function ke parameter  space mai  lage to wp rest operator h
 // 
//  function abdc(... val){
//     console.log(val)
//  }

//  abdc(3,45,6,5,6,5,6,43,6,7,4)

//**********************************************

 // Retrun ka matlab h a ki jaha se Aaye ho vahi daal denge
 // return hamesa function ke andar hi hoga

//  function abdc(v){
//     return 12+v;
//  }

//   let val = abdc(50);
//   console.log(val);

// *************************************

// first class fncs -> function ko values ki tarah treat kar sakte h
// function abdc(val){
//    val();
// }
// abdc(function(){

//    console.log("hey");
// });
//******************************* */

// higher order function -> wo function hota hai jo ki 
// return kare function ya fir accept kare ek fnc apne 
// parameter mein

// function abcd(){
//    return function(){
//       console.log("heyehyegk")
//    }
// }

// abcd()();

// **************************************************

// pure vs impure function

// aisa fnc jo ki baahar ki value ko naa badle wo hai 
// pure function

// let a = 12;
// function abcd(){
//    console.log("hehehe"); //pure function hai
// }

// function hui(){  // impure function
//    a++
// }
// aisa fnc jo baahar ki value ko badal de wo hai impure 
 //function

 // ******************************************************

 // closure -> ek func jo return kare ek aur function aur return hone waala
// function humesa youse karega parent func ka koi variable

// function abcd(){
//    let a = 12;
//    return function(){
//       console.log(a);
//    }
// }
// **********************************************
// IIFE (immediately invoked function Expression)

// (function (){
//  console.log("heyehey");
// }) ();

// ************************************************

// Hoisting 

  abcd();


function abcd(){
   console.log("heyeheygkgkgk");
}











