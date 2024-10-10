// access all related elements
let inputTemp = document.getElementById("inputTemp");
let inputUnit = document.getElementById("inputUnit");
let result = document.getElementById("result");
let celsiusOutput = document.getElementById("celsiusOutput");
let fahrenheitOutput = document.getElementById("fahrenheitOutput");
let kelvinOutput = document.getElementById("kelvinOutput");
let convert = document.getElementById("convert");

convert.addEventListener("click", function convert() {
  //show result in UI
  result.style.display="block";
  let num = parseFloat(inputTemp.value);
  // console.log(num);
  if (inputUnit.value.includes("celsius")) {
    let celsiusC = num;
    celsiusOutput.innerHTML = `${num}°C = ${celsiusC}°C`;
    let fahrenheitC = celsiusC * (9 / 5) + 32;
    fahrenheitOutput.innerHTML = `${num}°C = ${fahrenheitC}°F`;
    let kelvinC = celsiusC + 273.15;
    kelvinOutput.innerHTML = `${num}°C = ${kelvinC}K`;
  } else if (inputUnit.value.includes("fahrenheit")) {
    let fahrenheitF = num;
    fahrenheitOutput.innerHTML = `${num}°F = ${fahrenheitF}°F`;
    let celsiusF =parseFloat (fahrenheitF - 32 *(5 / 9));
    celsiusOutput.innerHTML = `${num}°F = ${celsiusF}°C`;
    let kelvinF = parseFloat((fahrenheitF - 32) * (5 / 9) + 273.15);
    kelvinOutput.innerHTML = `${num}°F = ${kelvinF}K`;
  } else {
    let kelvinK = num;
    let celsiusK = (kelvinK - (273.15));
    celsiusOutput.innerHTML = `${num}K = ${celsiusK}°C`;
    let fahrenheitK = parseFloat(kelvinK - 273.15 * (9 / 5) + 32);
    fahrenheitOutput.innerHTML = `${num}K = ${fahrenheitK}°F`;
    kelvinOutput.innerHTML = `${num}K = ${kelvinK}K`;
  }
});
