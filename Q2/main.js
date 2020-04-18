// JavaScript Document

//this create a person object with their name,
//age, gender and interests

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

//function to greet someone which says "Hi, I'm (and than their name)"
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

//function to say bye to someone which says "(their name) had left the building. bye for now!"
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

//instances of a person using the person class
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


//this create a teacher object with their subject and grade as well as their
//name, age, gender and interests from the person class
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//instance of a Teacher using the teacher class

let daina = new Teacher("Daina", 44, "female", ["reading", "baking"], "grade 8", "100");
