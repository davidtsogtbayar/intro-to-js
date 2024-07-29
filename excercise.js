// let students = [
//   { name: "Alice", grades: { math: 90, english: 85, science: 92 } },
//   { name: "Bob", grades: { math: 75, english: 80, science: 78 } },
//   { name: "Charlie", grades: { math: 85, english: 88, science: 84 } },
//   { name: "David", grades: { math: 60, english: 70, science: 65 } },
//   { name: "Eve", grades: { math: 95, english: 91, science: 89 } },
// ];
// students.push({
//   name: "Eve",
//   grades: { math: 95, english: 91, science: 89 },
// });

// function calculateAverage(students) {
//   for (let i = 0; i < students.length; i++) {
//     let totalGPA = 0;
//     let arrayValues = Object.values(students[i].grades);
//     for (let x = 0; x < arrayValues.length; x++) {
//       totalGPA = totalGPA + arrayValues[x];
//     }
//     let averageGPA = totalGPA / arrayValues.length;
//   }
// }
function calculateGreatestverage(students) {
  let studentName;
  for (let i = 0; i < students.length; i++) {
    let totalGrades = 0;
    let arrayValues = Object.values(student[i].grade);
    let highestAverageGrade = 0;
    for (let i = 0; i < arrayValues.length; i++) {
      totalGrades = totalGrades + arrayValues[i];
    }
    let averageGrades = totalGrades / arrayValues.length;
    if (averageGrades > highestAverageGrade) {
      highestAverageGrade = averageGrades;
      studentName = students[i].name;
    }
  }
}
