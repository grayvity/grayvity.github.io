String.prototype.filter = function (bannedWord) {
  let words = this.split(" ");
  let filteredWords = words.filter((word) => bannedWord !== word);
  return filteredWords.join(" ");
};

console.log("This house is not nice!".filter("not"));

Array.prototype.bubbleSort = function () {
  let swapped = false;
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  console.log(
    `Greetings, my name is ${this.name} and I am ${this.age} years old.`
  );
};

Person.prototype.salute = function () {
  console.log(
    `Good morning!, and in case I don't see you, good afternoon, good evening and good night!`
  );
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher(name) {
  this.name = name;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function () {
  console.log(
    `Good day, my name is ${this.name} and I am in the ${this.department} department.`
  );
};

const student2 = new Student("Grayson", 32, "Modern Web Application");
student2.greeting();
student2.salute();

const professor2 = new Professor("Aruka", 28, "Database");
professor2.greeting();
professor2.salute();

const teacher = new Teacher("Grayson");
teacher.teach("Web Application");
