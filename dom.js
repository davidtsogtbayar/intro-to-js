// // // Create a div element
// // const newDiv = document.createElement("div");

// // //Add a id to the div element

// // newDiv.id = "container";

// // //Add a content to the div element

// // newDiv.innerHTML = "Hello World";

// // // Append the div element to the body

// // document.body.appendChild(newDiv);

// // // Create a p element

// // const newP = document.createElement("p");

// // //Add a id to the div element

// // newP.id = "text";

// // // styling the p element
// // newP.style.color = "blue";
// // newP.style.fontSize = "20px";
// // newP.style.fontFamily = "Arial";

// // // Add a content to the p element

// // newP.innerHTML = "Hello World";

// // // Append the p element to the div element

// // newDiv.appendChild(newP);

// // const showButton = document.getElementById("show-button");
// // showButton.addEventListener("click", function () {
// //   const text = document.getElementById("text");
// //   text.innerHTML = "Surprise!";
// // });

// // const closeButton = document.getElementById("close-button");
// // closeButton.addEventListener("click", function () {
// //   const text = document.getElementById("text");
// //   text.innerHTML = "";
// // });

// let firstname = "";
// let lastname = "";
// let email = "";

// const lastNameInput = document.getElementById("last-name");
// lastNameInput.addEventListener("input", function () {
//   lastname = event.target.value;
// });

// const emailInput = document.getElementById("email");
// emailInput.addEventListener("input", function () {
//   email = event.target.value;
// });

// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   if (firstname === "" || email === "") {
//     alert("Please fill in all fields");
//   } else {
//     console.log({ firstname, lastname, email });
//     firstNameInput = "";
//     lastNameInput = "";
//     emailInput = "";
//     let;
//   }
// });

// let firstNumber = "";
// let secondNumber = "";

// const firstNumberInput = document.getElementById("first-number");
// firstNumberInput.addEventListener("input", function () {
//   firstNumber = event.target.value;
// });

// const secondNumberInput = document.getElementById("second-number");
// secondNumberInput.addEventListener("input", function () {
//   secondNumber = event.target.value;
// });

// // const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", function () {
//   if (firstNumber === "" || secondNumber === "") {
//     alert("Please fill in all fields");
//   } else {
//     const resudlt = document.getElementById("result");
//     let total = Number(firstNumber) + Number(secondNumber);
//     result.innerHTML = total;
//   }
// });

// const body = document.getElementById("container");
// body.style.backgroundColor = "pink";
// body.style.display = "flex";
// body.style.justifyContent = "center";
// body.style.alignItems = "center";

// const newDiv = document.createElement("div");
// newDiv.id = "outtercircle";
// document.body.appendChild(newDiv);
// newDiv.style.color = "blue";
// newDiv.style.borderRadius = "50%";
// newDiv.style.height = "500px";
// newDiv.style.width = "500px";
// newDiv.style.backgroundColor = "black";
// newDiv.style.display = "flex";
// newDiv.style.justifyContent = "center";
// newDiv.style.alignItems = "center";

// const newDiv1 = document.createElement("div");
// newDiv.id = "innercircle";
// newDiv.appendChild(newDiv1);

// newDiv1.style.borderRadius = "50%";
// newDiv1.style.height = "250px";
// newDiv1.style.width = "250px";
// newDiv1.style.backgroundColor = "green";
