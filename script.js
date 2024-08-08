function convert() {
  var kms = parseFloat(document.getElementById("data").value);
  const factor = 0.621371;
  var miles = kms * factor;
  document.getElementById("results").innerText = miles + " miles";
}
function convertGramsToKg() {
  const grams = parseFloat(document.getElementById("datas").value);
  const kg = grams / 1000;
  document.getElementById("resu").innerText = kg + " kilograms";
}
function milileter() {
  const milliliters = parseFloat(document.getElementById("dat").value);
  const liters = milliliters / 1000;
  document.getElementById("resul").innerText = liters + "liters";
}

function convertMetersToFeet(meters) {
  const feet = meters * 3.28084;
  return feet;
}
function convertMeter() {
  const feet = parseFloat(document.getElementById("feet").value);
  const meters = convertMetersToFeet(feet);
  document.getElementById("meter").innerText = meters + "meters";
}
