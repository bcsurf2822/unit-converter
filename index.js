//create converter for lenth (Meter/feet) volume(liters/gallons) mass(kilo/lbs)-- follow spec -- when user clicks convert  data populate 
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1foot = .3048 meters
1 gal = 3.78541 liter
1 lb - .453592
*/
const convertButton = document.getElementById("con-btn");
const inputNumber = document.getElementById("input-num");
const myConversions = [];
const myArrays = [];

const toAppend = [`${inputNumber.value} = feet  ||  ${inputNumber.value} feet = meters`]


function convertData(m) {
  myConversions.push([`${inputNumber}
    [m * 3.281, m * 3.048]`,
    [m * 0.264, m * 3.78541],
    [m * 2.204, m * 0.453592]
  ]);
  // console.log(myConversions)

  for (let i = 0; i < myConversions.length; i++) {
    console.log(myConversions[i])


  }
}


convertButton.addEventListener("click", function () {
  // convertData(inputNumber.value)
  console.log(convertData(inputNumber.value))

});
