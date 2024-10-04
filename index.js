//create converter for lenth (Meter/feet) volume(liters/gallons) mass(kilo/lbs)-- follow spec -- when user clicks convert  data populate 
const convertButton = document.getElementById("con-btn");
const inputNumber = document.getElementById("input-num");
const myConversions = [];

const toAppend = [`${inputNumber.value} = feet  ||  ${inputNumber.value} feet = meters`]


function convertData(m) {
  myConversions.push(m * 3.281);
  myConversions.push(m * 0.264);
  myConversions.push(m * 2.204);

  for (let i = 0; i < myConversions.length; i++) {
    console.log(myConversions[i].toFixed(3))
  }
}


convertButton.addEventListener("click", function () {
  // convertData(inputNumber.value)
  console.log(convertData(inputNumber.value))

});
