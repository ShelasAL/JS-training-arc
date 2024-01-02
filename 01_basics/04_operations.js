
// //~---------------------------------------------OPERATIONS-------------------------------------------------------

// //^----------------------------------------------Assignment--------------------------------------------------

// let value = 3
// let negValue = -value
// console.log(negValue)

// //^-----------------------------------------Basic Math Operations---------------------------------------------
// let a,b
// a=6
// b=4
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a**b)
// console.log(a/b)
// console.log(a%b)

// //^--------------------------------------------String Concatnation------------------------------------------------
let str1 = "Hello " 
let str2 = "Unimon" 
console.log(str3= str1 + str2)
console.log(str3 + ",How are you?")  //* o/p => "Hello Unimon, How are you?"

// //^----------------------------------------String Number Complex--------------------------------------------------
// console.log(3+"7")      //* o/p => 10  ---(num-str)
// console.log("3"+7)     //* o/p => 10   ---(str-num)
// console.log("3"+"7")  //* o/p => 37   ---(str-str)

 /* as you can see that if number and string are added its type is converted to number and if number as string-string
then the value of both are processed as a string */

// //* lets see case with 3 values

// console.log("3"+7+5)   //* o/p => 375
// console.log(3+7+"5")  //* o/p => 105

// /*when string follows before 2 elements then the after elements are seen as string itself-- use () to fix
// /*when string follows after 2 elements then the before elements gets added.*/

// //^-----------------------------------------Multiple Assignments-----------------------------------------------

// let num1,num2,num3
// num1 = num2 = num3 = 8+2    //❌not best practice

//^-------------------------------------------pre/postfix Operators----------------------------------------------
//~-------------------------------------------prefix vs postfix operators ---------------------------------------

//! Key Differences:

/* 1. Order of Execution:The prefix increment operator increments the variable's value before evaluating the expression,
   while the postfix increment operator increments the variable's value after evaluating the expression.*/

/* 2. Return Value:The prefix increment operator returns the incremented value, 
   while the postfix increment operator returns the original value.
   This difference is crucial when using the increment operator in expressions.*/

//!------------------------------------------------examples-----------------------------------------------------

//&------------------------------------------simple incrementing------------------------------------------------
let gameCounter = 100;
++gameCounter;          
console.log(gameCounter);  //* Output: 101 
 /*&even if we place postfixoperator the value would've been same in this example as in postfix increment the expression runs then 
 it increments but in this case there is no expression while excecuting the incrementation so its going to be the same  */
//&----------------------------------------incrementing with expression-------------------------------------------
var x = 5;
console.log(++x);
 /* o/p 6 --> x is incremented to 6 using the prefix increment operator before the "console.log()"
 statement is executed, resulting in the output "6" being displayed.*/


 var x = 5;
console.log(x++); //* Output: 5
console.log(x); //* Output: 6
/* The "console.log(x++)"" statement first outputs the current value of "x", which is 5. Then, the "x"
variable is incremented by 1, but this incremented value is not used in this statement. As a result,
the output of the first "console.log()" statement is 5. */
