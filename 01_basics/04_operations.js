
//~---------------------------------------------OPERATIONS-------------------------------------------------------

//^----------------------------------------------Assignment--------------------------------------------------

let value = 3
let negValue = -value
console.log(negValue)

//^-----------------------------------------Basic Math Operations---------------------------------------------
let a,b
a=6
b=4
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a%b)

//^--------------------------------------------String Concatnation------------------------------------------------
let str1 = "Hello " 
let str2 = "Unimon" 
console.log(str3= str1 + str2)
console.log(str3 + ", How are you?")

//^----------------------------------------String Number Complex--------------------------------------------------
console.log(3+"7")      //* o/p => 10  ---(num-str)
console.log("3"+7)     //* o/p => 10   ---(str-num)
console.log("3"+"7")  //* o/p => 37   ---(str-str)

/* as you can see that if number and string are added its type is converted to number and if number as string-string
then the value of both are processed as a string */

//* lets see case with 3 values

console.log("3"+7+5)   //* o/p => 375
console.log(3+7+"5")  //* o/p => 105

/*when string follows before 2 elements then the after elements are seen as string itself-- use () to fix
/*when string follows after 2 elements then the before elements gets added.*/

//^-----------------------------------------Multiple Assignments-----------------------------------------------

let num1,num2,num3
num1 = num2 = num3 = 8+2    //❌not best practice

//^-------------------------------------------pre/postfix Operators----------------------------------------------

let gameCounter = 100;
gameCounter++;          
console.log(gameCounter);  //101 --even if we place prefix operator the value would've been same in this example

//---------------------------------------------more examples-----------------------------------------------------
