// let h1= document.querySelector("h1");
// h1.addEventListener("click",function(){
//  h1.style.color = "red";
// });

//    let p=document.querySelector("p")
//    p.addEventListener("click", function(){
//     p.style.color = "green"
//    });

      // let p   = document.querySelector("p")

      // p.addEventListener("dblclick", function(){
      // p.style.color = "red";

      // });
      
      // let p = document.querySelector("p");
      // p.addEventListener("dblclick",function(){
      //       p.style.color = "blue";
      // })

      
      // CLICK

      // let p = document.querySelector("p");
      // function dblclick(){
      //   p.style.color = "yelow";
      // }
      // p.addEventListener("dblclick", dblclick);
      // p.removeEventListener("dblclick", dblclick);

// INPUT

      // let inp = document.querySelector("input");
      // inp.addEventListener("input", function(dets){
      //       if(dets.data !== null){
      //             console.log(dets.data);
      //       }
      // });

//**************************************8 */
      //  let sel = document.querySelector("select");
      //  let device = document.querySelector("#device")

      //  sel.addEventListener("change", function(dets){
      //       // console.log(dets.target.value);
      //       device.textContent = `${dets.target.value} Device
      //       Selected`;

      //  });

      //***************************************** */

      // approaches

// changing the value jaise ki A B C D jo change change ho jaye

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//       // h1.textContent = dets.key;
//       // console.log(dets);
//       if(dets.key === " "){
//             h1.textContent = "SPC";
//       }
//       else{
//             h1.textContent = dets.key;
//       }
// });

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");
btn.addEventListener("click",function(){
      fileinp.click();
});

fileinp.addEventListener("change", function(dets){
      console.log(dets.target.file[0]);
})