//!------------------------------------------To Number Conversion------------------------------------------------

//?----------------------------------case0-----------------------------------------------

let score = 33           //~Simple Number

console.log(typeof(score));     //*works to know type of variable
console.log(typeof score);     //*works to know type of variable

//output= "number" => "Note lower case"

//?--------------------------------------case1---------------------------------------------

let score2 = "33"      //~String       
console.log(typeof(score2));        //*   o/p => sting
console.log(typeof score2);        //*    o/p => sting

//convering string to number => we use "Number(var name)", Note-- Capital in "Number() function"

let numScore2Value = Number(score2)
console.log(numScore2Value);                 //* o/p => 33
console.log(typeof(numScore2Value));        //* o/p =>  number    ✅

//?--------------------------------------case2----------------------------------------------

let score3 = "33abc"  //~NaN
let numScore3Value = Number(score3)
console.log(typeof(numScore3Value));    //* o/p => number❌ -- type of "33abc" shouldnt be a number as as its NaN

//lets see what it prints
console.log(numScore3Value);          //* o/p => NaN

// lets see what type "NaN" belongs
console.log(typeof NaN)             //* o/p =>  number

//?--------------------------------------case3------------------------------------------------

let score4 = null   //~null 
console.log(typeof score4);              //* o/p => object   -- type of null 
let NumScore4value = Number(score4)   
console.log(typeof (NumScore4value))   //* o/p =>  number    -- type of null converted to number
console.log(NumScore4value);          //* o/p =>   0         -- value of null converted to number thou it's not 0

//?--------------------------------------case4------------------------------------------------

let score5 = undefined    //~undefined               
console.log(score5)                      //* o/p => undefined
let numScore5value = Number(score5)     
console.log(typeof(numScore5value))    //* o/p => number
console.log(numScore5value)           //* o/p => NaN

//?--------------------------------------case5-------------------------------------------------

let score6 = true    //~boolean             
console.log(score6)                      //* o/p => true
let numScore6value = Number(score6)     
console.log(typeof(numScore6value))    //* o/p => number
console.log(numScore6value)           //* o/p => 1


//!-----------------------------------------To Boolean Conversion---------------------------------------------

let idLoggedIn = 1   //~ truthy/falsy
let boolOfLogged = Boolean(idLoggedIn)
console.log(boolOfLogged)           //* o/p => true
console.log(typeof(boolOfLogged))  //*  o/p => booolean

//* in boolean conversion falsy values are converted into false and truthy values are converted into true
//^ falsy ("",0,null,undefined,document.all,false)
//^ truthy (everything other than falsy)

//!------------------------------------------To String Conversion------------------------------------------------

let simpleNumber = 99  //~ number
let stringNumber = String(simpleNumber)
console.log(stringNumber)           //* o/p => 99
console.log(typeof stringNumber)   //* o/p => string

//* number got converted into string --> "99"

console.log(stringNumber+"%")    //* o/p => 99% --> now you can see Concatenation occurs 

