const bcrypt = require("bcryptjs")
const prompt = require('prompt-sync')();
//const password = "mongo123"
const password = prompt('Enter password:');
console.log('Password :', password);
const saltRounds = 10;

const hashpassword = bcrypt.genSalt(saltRounds, function (saltError, salt){
    if (saltError){
        throw saltError
    } else {
        bcrypt.hash(password, salt, function (hashError, hash){
            if (hashError){
                throw hashError       
            } else {
                console.log(hash);
                return hash
                 //$2a$10$DQ8XGLpGFXCJruhFys.3JufcTKGXCVWWNcR0evD8xTUvV7dpiDEr2
            }
        })
    }
})

module.exports = {hashpassword};