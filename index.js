const name = "00000"; // string
const age = 16; // number
const x = 999999999999; // bigint
const isMongolian = true; // boolean
let y; //undefined
const z = null; // null

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(100 + 200);

function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(3, 67);

function addition(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
addition(10, 30, 45);
function isEligibleToDrive(age) {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEligibleToDrive(14);
isEligibleToDrive(18);
isEligibleToDrive(16);

function printLetter(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}

// printLetter("Porsche");

// function printEvenLetters(name) {
//   for (let i = 0; i < name.length; i++) {
//     if ((i + 1) % 2 == 0) {
//       console.log(name[i]);
//     }
//   }
// }

// printEvenLetters("Porsche");

// function excercise1(word) {
//   let newWord = "";
//   for (let i = 0; i < word.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       newWord = newWord + word[i].toUpperCase();
//     } else {
//       newWord = newWord + word[i];
//     }
//   }
//   console.log(newWord);
// }

// excercise1("helloo");

// function excercise2(word) {
//   let result = "no";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == "y") {
//       result = "yes";
//     }
//   }

//   console.log(result);
// }

// excercise2("aaaaaaaayaaaaaaaaaaa");

// function excercise3(word) {
//   let newWord = "";

//   for (let i = 0; i < word.length; i++) {
//     newWord = newWord + " " + word[i].toUpperCase();
//   }

//   console.log(newWord);
// }

// excercise3("John");

// function FindLongerWord(word1, word2) {
//   if (word1.length > word2.length) {
//     console.log(word1);
//   } else {
//     console.log(word2);
//   }
// }

// FindLongerWord("abcde", "abcilgiogiygd");

// function addEvenNums(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       total = total + numbers[i];
//     }
//   }
//   console.log(total);
// }

// addEvenNums([1, 2, 3, 4, 5, 6]);

// function filterBooksByYear(books) {
//   const filteredBooks = [];
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].year >= 1950) {
//       filteredBooks.push(books[i]);
//     }
//   }
//   console.log(filteredBooks);
// }

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "1984", author: "George Orwell", year: 1949 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     year: 1967,
//   },
//   { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
// ];

// filterBooksByYear(books);

function calculateAverageSalary(employees, department) {
  const departmentArray = [];
  let total = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department == department) {
      departmentArray.push(employees[i].salary);
    }
  }
  console.log(departmentArray);
  for (let i = 0; i < departmentArray.length; i++) {
    total = total + departmentArray[i];
  }
  console.log(total / departmentArray.length);
}

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "Dave", department: "HR", salary: 60000 },
  { id: 5, name: "Eve", department: "Marketing", salary: 55000 },
];

calculateAverageSalary(employees, "Marketing");

function calculateTotalSales(salesRecords, productName) {
  let totalSales = 0;

  for (let i = 0; i < salesRecords.length; i++) {
    if (salesRecords[i].product === productName) {
      totalSales += salesRecords[i].amount;
    }
  }

  return totalSales;
}

const salesRecords = [
  { id: 1, product: "Laptop", amount: 1500 },
  { id: 2, product: "Smartphone", amount: 700 },
  { id: 3, product: "Laptop", amount: 1300 },
  { id: 4, product: "Tablet", amount: 400 },
  { id: 5, product: "Smartphone", amount: 600 },
];

console.log(calculateTotalSales(salesRecords, "Laptop"));

function calculateAverageAge(students, grade) {
  let totalAge = 0;
  let numberOfStudents = 0;

  students.forEach((student) => {
    if (student.grade === grade) {
      totalAge += student.age;
      numberOfStudents++;
    }
  });

  if (numberOfStudents === 0) {
    return 0;
  }

  const averageAge = totalAge / numberOfStudents;
  return averageAge;
}
const students = [
  { id: 1, name: "John", grade: "10th", age: 15 },
  { id: 2, name: "Jane", grade: "11th", age: 16 },
  { id: 3, name: "Jim", grade: "10th", age: 15 },
  { id: 4, name: "Jack", grade: "12th", age: 17 },
  { id: 5, name: "Jill", grade: "11th", age: 16 },
];

const averageAge = calculateAverageAge(students, "11th");

console.log(averageAge);

function countEmployeesInDepartment(employees, department) {
  let departmentEmployeeCount = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      departmentEmployeeCount++;
    }
  }

  return departmentEmployeeCount;
}

const employees_1 = [
  { id: 1, name: "Alice", department: "Engineering" },
  { id: 2, name: "Bob", department: "Marketing" },
  { id: 3, name: "Charlie", department: "Engineering" },
  { id: 4, name: "Dave", department: "HR" },
  { id: 5, name: "Eve", department: "Marketing" },
];

const count = countEmployeesInDepartment(employees_1, "Engineering");

console.log(count);

function findHighestSalaryInDepartment(employees, department) {
  let highestSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      if (employees[i].salary > highestSalary) {
        highestSalary = employees[i].salary;
      }
    }
  }

  return highestSalary;
}

const employees_2 = [
  { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "Dave", department: "HR", salary: 60000 },
  { id: 5, name: "Eve", department: "Marketing", salary: 55000 },
];

const highestSalary = findHighestSalaryInDepartment(employees, "Engineering");

console.log(highestSalary);

function calculateTotalGrades(students_1, subject) {
  let totalGrades = 0;

  for (let i = 0; i < students_1.length; i++) {
    if (students_1[i].subject === subject) {
      totalGrades += students_1[i].grade;
    }
  }

  return totalGrades;
}

const students_1 = [
  { id: 1, name: "John", subject: "Math", grade: 90 },
  { id: 2, name: "Jane", subject: "Science", grade: 85 },
  { id: 3, name: "Jim", subject: "Math", grade: 95 },
  { id: 4, name: "Jack", subject: "English", grade: 80 },
  { id: 5, name: "Jill", subject: "Science", grade: 88 },
];

const totalGrades = calculateTotalGrades(students_1, "Science");

console.log(totalGrades);
