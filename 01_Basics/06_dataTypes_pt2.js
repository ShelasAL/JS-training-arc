//!-----------------------------------------Primitive------------------------------------------------

//^ 7 Types :-
             //* string
             //* Number
             //* boolean
             //* null
             //* undefined
             //* symbol
             //* bigint 

//!---------------------------------Refference Type (Non Primitive)-----------------------------------

//^ 3 Types :-
             //*  Array    ["abc","pqr","xyz"]
             //* Objects   { name : baka}
             //* Functions -> function() {   }

             // Non premitive type returns dataType as Object 
             //type of function returns "Function" (but its called as Function Object)

 //~-------------------------------------Intro to Symbol-----------------------------------------------            
 //* Symbols are unique Id given to a variable

 //^ ex:-
         const myId = Symbol("1234") 
         const ourId = Symbol("1234")
         console.log(myId === ourId)


         