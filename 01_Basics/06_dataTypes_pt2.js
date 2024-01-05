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

             // Non premitive type returns dataType as Object [typeof(primitiveFunction) = object]
             // typeof(function) returns "Function" (but its called as Function Object)

 //~-------------------------------------Intro to Symbol-----------------------------------------------            
 //* Symbols are unique Id given to a variable

 //^ ex:-
         const myId = Symbol("1234") 
         const ourId = Symbol("1234")
         console.log(myId === ourId)  //false

         /*Both of the id's are unique and strictly equals to returns false as the symbol of value
          is stored  as a unique value in the given variable*/
          


         