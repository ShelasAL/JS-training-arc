//!---------------------------Types of Memory in Javascript------------------------------------------

//^ of 2 types :-
                 //*Stack Memory  --> (Used in Primitive Tpes)
                 //*Heap Memory   --> (Used in Non Primitive Type)

//While using stack memory there will be a copy stored
//While using stack memory there will be a refference stored

//^ examples :-

//!-----------------------------------------Stack Memory--------------------------------------------

let viewerName = "Friedman"
let anotherName = viewerName
console.log(anotherName)  //* o/p => Friedman

// now give "anotherName a diffrent value and observe"

anotherName = "Deadman"
console.log(anotherName) //* o/p => Deadman

//lets see what is the value of viewerName now

console.log(viewerName); //* o/p => Friedman 

/* 
=>So as we can see first we declare a variable with value,then assign the declared varable to another
variable and then change the value of the new variable and you can see it has changed (Deadman) but
the first variable still holds the inital value (Friedman) 

=>So by this we can understand 
that in "Stack Memory" the assignment of one variable to another results in a copy and
any changes made to it will not effect the original variable

*/

//!-----------------------------------------Heap Memory-----------------------------------------------

let userOne = {
    email: "primary@gmail.com" ,
    upi: "samsung@upi"
}

console.log(userOne.email)    //* o/p => primary@gmail.com

let userTwo = userOne 
userTwo.email = "secondary@gmail.com"

console.log(userTwo.email)   //* o/p => secondary@gmail.com

// now lets see what happend to the "email" of "userOne"

console.log(userOne.email)   //* o/p => secondary@gmail.com

/*

=>So here we declared the values of userTwo to be equal to that of userOne and by changing the 
  value of variable (email) from the userTwo it made change to the original email of the userOne

=>Hence in "Heap Memory" the values are stored as refferences and changing any values in
 the refference point will change the original value from which it is reffered

*/
