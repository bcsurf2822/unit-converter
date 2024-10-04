/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const myData = [];

function convertData(m, l, k) {
  myData.push(m * 3.281);
  myData.push(l * 0.264);
  myData.push(k * 2.204);
  console.log("My Data", myData);
}

convertData(8, 9, 2);

//create converter for lenth (Meter/feet) volume(liters/gallons) mass(kilo/lbs)-- follow spec -- when user clicks convert  data populate --round down to 2 dec places
const convertButton = document.getElementById("con-btn");
const inputNumber = document.getElementById("input-num");

convertButton.addEventListener("click", function () {
  console.log(inputNumber.value);
});
