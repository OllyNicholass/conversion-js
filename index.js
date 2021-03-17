const conversions = require('./conversions.json');
const prompt = require('prompt-sync')();

const displayMainMenu = () => {
  console.log("\nConversions");
  // For each conversion type, display the option name and ID
  for (let i = 0; i < conversions.length; i++) {
    const c = conversions[i];
    console.log(`\t${i}: ${c.name}`);
  }
}

const displayConversionOptions = (conversion) => {
  console.log("\nValues");
  // For each value in a conversion type, display the value and ID
  for (let i = 0; i < conversion.values.length; i++) {
    const val = conversion.values[i];
    console.log(`\t${i}: ${val[0]}`);
  }
}

const convertSelectedConversion = (val, start, end) => {
  // Get starting value in comparison figure.
  //     e.g. ( 2 inch * 25.4 = 50.8mm )
  const startingValue = val * start[2];

  // Get ending value using comparison figure.
  //     e.g. ( 50.8mm / 10 = 5.08cm )
  const endingValue = startingValue / end[2];

  // Round end number
  const roundedEndValue = Math.round((endingValue + Number.EPSILON) * 100) / 100

  // Display conversion.
  //     e.g. ( 2inch -> 5.08cm )
  console.log(`${val + start[0]} -> ${roundedEndValue + end[0]}`)
}

// Select Conversion type
displayMainMenu();
let selConversionId = parseInt(prompt("Choose your conversion type: "));
while (Number.isNaN(selConversionId)) {
  displayMainMenu();
  selConversionId = parseInt(prompt("Please type an integer. Choose your conversion type: "));
}

console.log(`You have selected: ${conversions[selConversionId].name}`)


// Select starting measure type
displayConversionOptions(conversions[selConversionId])
let firstConversionId = parseInt(prompt("Choose your entry measurement: "));
while (Number.isNaN(firstConversionId)) {
  displayConversionOptions(conversions[selConversionId])
  firstConversionId = parseInt(prompt("Please type an integer. Choose your entry measurement: "));
}
console.log(`You have selected: ${conversions[selConversionId].values[firstConversionId][0]}`)


// Select end measure type
displayConversionOptions(conversions[selConversionId])
let endConversionId = parseInt(prompt("Choose your result measurement: "));
while (Number.isNaN(endConversionId)) {
  displayConversionOptions(conversions[selConversionId])
  endConversionId = parseInt(prompt("Please type an integer. Choose your result measurement: "));
}
console.log(`You have selected: ${conversions[selConversionId].values[endConversionId][0]}`)


// Insert value of first measure type
console.log(`You're converting: ${conversions[selConversionId].values[firstConversionId][0]} -> ${conversions[selConversionId].values[endConversionId][0]}`)

let valueToConvert = prompt("Enter the value you want to convert: ");
while (Number.isNaN(valueToConvert)) {
  valueToConvert = prompt("Please type an number. Enter the value you want to convert: ");
}


// Equation
convertSelectedConversion(valueToConvert, conversions[selConversionId].values[firstConversionId], conversions[selConversionId].values[endConversionId]);
