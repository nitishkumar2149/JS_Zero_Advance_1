class User {                    // here, user => parent class
    constructor(username){
        this.username = username
    }

    meraManMaiKuchBhiLu(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                 // here, Teacher => child class
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){                             // yha bhi addCourse(){} => method, vha bhi hum kuch bhi name de skate hai.
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.meraManMaiKuchBhiLu()
const masalaChai = new User("masalaChai")

masalaChai.meraManMaiKuchBhiLu()

console.log(chai instanceof User);  //   "instanceof" is a keyword which here asking that "chai" ke under "User" ka property hai ya nhi.