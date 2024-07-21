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

const Person = {
  initialize(name) {
    this.name = name;
  },
};

const Teacher = Object.create(Person);

Teacher.create = function (name) {
  const teacher = Object.create(this);
  teacher.initialize(name);
  return teacher;
};

Teacher.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = Teacher.create("Grayson");
teacher.teach("Web Application");
