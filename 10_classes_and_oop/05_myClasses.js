// ES6  => all js that we are currently using is after ES6. 
//  ******************* Modern Technique ******************
/* 

Basic Structure of class :-
============================
class className{
    constructor(parameter_1, parameter_2, parameter_3){
        this.parameter_1 = parameter_1
        this.parameter_2 = parameter_2 
        this.parameter_3 = parameter_3
    }
}
// here we can take any number of parameters as required.

*/

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene
//  ******************* Old/ByDefault Technique ******************

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());