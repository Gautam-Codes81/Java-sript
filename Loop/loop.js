//for
// 1 - 100
/*for(let i =1; i<101; i++){
    console.log(i);
} */

    /*let i = 1;
    while (i < 41){
        console.log(i);
        i++;
    } */

        // Break ka use 

      /*  
      
      
      /*for (let i =1 ; i<=201; i++){
            console.log(i);
            if(i===52){
                break;
            }
           if(i===32){
            continue;
           }
           console.log(i);

        }  */

           //pratice question
         //  question 1 print even number
          /*for(let i = 1; i<21; i++){
            if(i%2 === 0){
                console.log(i);
            }
         }  */

            //print odd number 
           /* let i = 1;
            while(i<16){
                if(i%2 === 1){
                    console.log(i);
                }
                i++;
            } */

                //print the multiplication table of 5
             /*   for(let i = 1; i<11; i++){
                    //console.log(5*i);
                    console.log(`5*${i} = ${5*i}` );

                } 

                   //  find the sum of number from 1 to 100 using a loop.
                   let sum  = 0;
                    for(let i =1; i<101; i++){
                        sum = sum +i;
                    }
                    console.log(sum); 
                    
                    // print all number between 1 to 50 that are divisile by 3
                  /*  for(let i = 1; i<51; i++){
                        if(i%3===0){
                            console.log(i);
                        }
                    } /*
                   
                        // ask the user for a number and print whether each number from  1 to that number is even or odd

                        /*let val = prompt("given a number");
                        for(let i = 1; i<=val; i++){
                            if(i%2===0 ){
                                console.log(`${i} is even`);
                            }else{
                                console.log(`${i} is odd`);
                            }
                        } */

                            // count how many number btw 1 to 100 are divisible by both 3 and 5
                           /* for ( let i= 1; i<101; i++){
                                if(i%3 === 0 && i%5 === 0){
                                    console.log(i);
                                }
                            } */

                                // stop completely when it find the first number divisible by 7
                            /*    for(let i = 1; i<101; i++){
                                    console.log(i);
                                    if(i%7===0){
                                        break;
                                    }
                                   // console.log(i);
                                } */

                                 /*  for(let i= 1; i<54; i++){
                                    if(i%3===0) continue;
                                    console.log(i);
                                   } */
                                   

                                   let count = 0;
                                   for(let i = 1; i<101; i++){
                                    if(i%2===1){
                                        count++;
                                        console.log(i);
                                    }
                                    if(count===5) breaks;
                                   }
                    

            