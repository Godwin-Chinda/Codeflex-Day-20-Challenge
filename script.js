const student = {
  name: "Godwin Chinda",
  age: 29,
  grade: "A",

  getSummary: function () {
    return `${this.name}, age ${this.age}, is currently in grade ${this.grade}.`;
  },
};

const nameElement = document.getElementById("student-name");
const ageElement = document.getElementById("student-age");
const gradeElement = document.getElementById("student-grade");
const showDetailsButton = document.getElementById("show-details");

showDetailsButton.addEventListener("click", () => {
  nameElement.textContent = `Name: ${student.name}`;
  ageElement.textContent = `Age: ${student["age"]}`;
  gradeElement.textContent = `Grade: ${student.grade}`;

  console.log(student.getSummary());
});
