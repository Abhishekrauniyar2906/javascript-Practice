const accountID = 12345
let accountEmail = "abhishek2906@gmail.com"
var accountPassword = "4545"
accountCity = "varanasi"
 
console.log(accountID)
accountPassword = "rohit@gmail.com"
accountPassword = "4785"
accountCity = "Noida"

// prefer not to use var because of issue in block and functional scope
console.table([accountID, accountEmail, accountPassword, accountCity]);