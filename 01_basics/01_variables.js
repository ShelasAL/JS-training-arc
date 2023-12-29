const accountId = 31459               //constant declaration
var accountPassword = "9876543210"                   // variable declaration with no sope
let accountEmail = "unimonattack@outlook.com"        // variable declaration with scope
let accountState;                                    // variable value undifined

//-----------------------------trying to redeclare------------------------------------
accountcity = "Calicut"
// accountId = 2023           // not allowed as cant assign another value to const
// console.log(accountId)
accountEmail = "pandamon@gmail.com"
accountcity = "Tokyo"

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])


/* preffer not to use "var"
because of issue in block scope and functional scope */