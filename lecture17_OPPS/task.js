// 1. Single Inheritance

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();



// 2. Multiple Inheritance


class Person {
    walk() {
        console.log("Person is walking");
    }
}

const Singer = {
    sing() {
        console.log("Person is singing");
    }
};

class Student extends Person {}

Object.assign(Student.prototype, Singer);

const student = new Student();
student.walk();
student.sing();



// 3. Multilevel Inheritance

class Animal1 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("Dog barks");
    }
}

class Puppy extends Dog1 {
    weep() {
        console.log("Puppy weeps");
    }
}

const puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.weep();



// 4. Hierarchical Inheritance

class Animal2 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log("Dog barks");
    }
}

class Cat extends Animal2 {
    meow() {
        console.log("Cat meows");
    }
}

const d = new Dog2();
d.eat();
d.bark();

const c = new Cat();
c.eat();
c.meow();



// 5. Hybrid Inheritance

class Employee {
    work() {
        console.log("Employee is working");
    }
}

const Sports = {
    play() {
        console.log("Playing Sports");
    }
};

class Player extends Employee {}

Object.assign(Player.prototype, Sports);

const player = new Player();
player.work();
player.play();