//OBJECT
// object is a collection of properties and method
//  CLASS
//a CLASS IS A BLUEPRINT of template and creating object

// CONSTRUCTURE
// A constructure initilize object value anditautomatically run whene object is created
// CREATING CLASS IN OBJECT 
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    study() {
        console.log(`${this.name} is studing js`);
    }
}
let s1 = new Student("john", 20);
console.log(s1);


let s2 = new Student("ajay", 25);
console.log(s2);
s1.study();
//INHERITANCE
class Animal {
    eat() {
        console.log("eating");
    }
    sleep() {
        console.log("sleeping");
    }
    makeSound() {
        console.log("make sound of animal");
    }
}

class Dog extends Animal {
    bark() {
        console.log("barking");
    }
    makeSound() {
        console.log("dog can bark");
    }


}
const dog = new Dog();

dog.eat();
dog.sleep();
dog.bark();
dog.makeSound();

//method
class animal {
    constructor(name) {
        this.name = name;
    }
}
class cat extends animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}
const c = new cat("simba", 2, "p");
console.log(c);
//METHOD OVERRIDING