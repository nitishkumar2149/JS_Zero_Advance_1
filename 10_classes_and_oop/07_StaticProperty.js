class User {              //   User => class
    constructor(username){
        this.username = username
    }

    logMe(){             // logMe  =>  method inside User class.
        console.log(`Username: ${this.username}`);
    }

     static createId(){    // createId  => method inside User class.  Here "static" Keyword is restricting this methos from access.
        return `123`
    }
}

const Nitish = new User("Nitish")  
console.log(Nitish.createId())  // Give ERROR due to "static" keyword.

class Teacher extends User {         // inheritance occure using "extends" keyword.
    constructor(username, email){
        super(username)            // ******* super(parameter)  => New technique to access property defined in parent class.
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());