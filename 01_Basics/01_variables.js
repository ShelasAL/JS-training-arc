const accountId = 31459                               //constant declaration
var accountPassword = "9876543210"                   // variable declaration with "no block scope"
let accountEmail = "unimonattack@outlook.com"       // variable declaration with "block scope"
let accountState;                                  // variable value id undifined

//-----------------------------trying to redeclare------------------------------------
accountcity = "Calicut"
// accountId = 2023           // not allowed as cant assign another value to const
// console.log(accountId)
accountEmail = "pandamon@gmail.com"
accountcity = "Tokyo"

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])


/* preffer not to use "var"
because of issue in block scope and functional scope */

//-----------------------------------------------Scope------------------------------------------------------
/*
scope is of 3 types :-

1-Block Scope    => Declared variables works inside a block {} only --> let,const
2-Function Scope => Declared variavles works inside a function onlt --> it maybe let,const & var
3-Global Scope   => A variable declared outside a function, becomes GLOBAL

extra: local scope:- Variables declared inside function doesnt work outside the function\local to the function (function scope itself)

*/