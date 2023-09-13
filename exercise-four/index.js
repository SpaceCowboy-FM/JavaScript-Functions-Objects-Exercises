let student = {
  name: "Jamie",
  age: 6,
  grade: "1st",
  print() {
    alert(
      `${this.name} is ${this.age} years old and is in ${this.grade} grade.`
    );
  },
};

student.print()
