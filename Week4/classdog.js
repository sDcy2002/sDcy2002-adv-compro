class dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("this is "+ this._name + " !")
    }

    static bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new dog("Buster");
myDog.introduce();

dog.bark();