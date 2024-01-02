//*conversion always return a boolean value

//!----------------------------------------Basic Comparisons-----------------------------------------------------

// console.log(5 > 1);         //* o/p => true
// console.log(9 > 10);       //* o/p => false
// console.log(2 < 1);       //* o/p => false
// console.log(5 == 5);     //* o/p => true
// console.log(1 != 2);    //* o/p => true
// console.log(7>=7)      //* o/p => true

//~-------------------------------------Comparison with diffrent data types---------------------------------------

//* --> ❌This type of comparison leads to inconsistancy so mostly try to avoid these

//!------------------------------------------String-Number comparison-----------------------------------------------
console.log("7" > 3)              //* o/p => true
console.log("7" < 3)             //* o/p => false
console.log("55" > "33")        //* o/p => true
console.log("1" == "1")        //* o/p => true
console.log("2"=== 2)         //* o/p => false  --"strictly equals to" checks if both value and data type is same or not.
console.log("10" != 10)      //* o/p => false
console.log("10" !== 10)    //* o/p => true   --"strictly not equals to" checks if both value and data type is same or not.


//!------------------------------------------String comparison----------------------------------------------------

//* checks in alphabatical order in which the character is defined in unicode

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
console.log("A">"a") //false
//*-> capital letter "A" is not equal to the lowercase "a",and lowercase is greater cause of having higher precedence 

//!-------------------------------------Boolean String Comparison--------------------------------------------------

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

//* here boolean b is string "0" so it falls under truthy and output is true but while equality sees both values as 0.

//!------------------------------------------Null vs 0--------------------------------------------------------

console.log(null > 0);     //* o/p => false
console.log(null == 0);   //* o/p => false
console.log(null >= 0);  //* o/p => true

//* so here comparison operators (>,<,>=,<=) and == works differently,.
//*the comparison operators "converts null to 0" and hence null>=0 ie; (0>=0).

//!------------------------------------------Undefined vs 0--------------------------------------------------------

console.log( undefined == 0  )   //false
console.log( undefined >  0  )  //false
console.log( undefined >  0 )  //false

//!---------------------------------Comparison with null and undefined-------------------------------------------

console.log( null === undefined )  //false
console.log( null == undefined )  //^true
console.log( null > undefined )  //false

/*There is a special rule.undefined and null are called a “sweet couple”:- they equal each other (in the sense of ==),
but not any other value. */


