const convertButton = document.getElementById("con-btn");
const inputNumber = document.getElementById("input-num");
const lengthConversion = document.querySelector(".length")
const volumeConversion = document.querySelector(".volume")
const massConversion = document.querySelector(".mass")
const newConversions = document.getElementById("new-text")
const myConversions = [];
const myArrays = [];


function convertData(m) {
lengthConversion.innerHTML = "";
volumeConversion.innerHTML = "";
massConversion.innerHTML = "";
myConversions.length = 0



  myConversions.push(
    [m * 3.281, m * 3.048],
    [m * 0.264, m * 3.78541],
    [m * 2.204, m * 0.453592]
  );


  for (let i = 0; i < myConversions.length; i++) {
    if (i === 0) {

      lengthConversion.innerHTML += `<p id="new-text">${inputNumber.value} Meters = ${myConversions[i][0]} Feet  |  ${inputNumber.value} Feet  =  ${myConversions[i][1]} Meters</p>`;

    } else if(i === 1) {
    volumeConversion.innerHTML += `<p  id="new-text">${inputNumber.value} Liters = ${myConversions[i][0]} Gallons  |  ${inputNumber.value} Gallons  =  ${myConversions[i][1]} Liters</p>`
    } else {
          massConversion.innerHTML += `<p  id="new-text">${inputNumber.value} Kilograms = ${myConversions[i][0]} Pounds  |  ${inputNumber.value} Pounds  =  ${myConversions[i][1]} Kilograms</p>`
    }


  }
}


convertButton.addEventListener("click", function () {
convertData(inputNumber.value)
});
