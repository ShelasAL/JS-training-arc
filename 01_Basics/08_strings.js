//!------------------------------------Outdated Concept----------------------------------------------

const name = "Yaro "
const yearCounts = 30
console.log(name+ yearCounts + " more years left till you teleports" ) //* this syntax is outdated

//* o/p => "Yaro 30 more years left till you teleports"

//*as "" and '' are used for strings but quotes and double quotes doesn't provide "string intepolation".

//^What is interpolation:-
/* string interpolation is the process of inserting strings or values into an existing string 
for various purposes (more like can add variables or strings inside a string itself)
*/                

//!------------------------------------Modern Approach----------------------------------------------

//*use of backticks (`string1`) -->provide string interpolation

//^example :-

                console.log(`Hello my name is ${name}and I am ${yearCounts} year old`);

                //* o/p => Hello my name is Yaro and I am 30 year old
                // also you can do operation inside like ${`string.toUpperCase`}--> converts to "STRING"
                

//!------------------------------one more way to declare a string---------------------------------

const gameName = new String("Minecraft")
console.log(gameName)   //* o/p => [String: 'Minecraft'] ---> an object it becomes

console.log(typeof(gameName)) //* o/p => object

//*try pasting the command in console of your browser and call it with "ganeName" variable
//*then you will see that the string is printed and also each letters acts as an object property

/* also below that you can see as there are properties like length prototype etc and inside prototype
there are some methods visible */

//^acess object properties with keys :-
                        
console.log(gameName[0]); //*o/p => "M" (from 'Minecraft')
console.log(gameName.__proto__) //*"__proto__" is property of Object and exposes the value of internal [[Prototype]] of an object
