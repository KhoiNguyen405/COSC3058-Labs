// Change metric unit displayed based on user choice
function measureBMI() {
  // true = metric, false = imperial
  let unit = document.getElementById("bmi-metric").checked,
    weight = document.getElementById("bmi-weight"),
    weightu = document.getElementById("bmi-weight-unit"),
    height = document.getElementById("bmi-height"),
    heightu = document.getElementById("bmi-height-unit");

    if (unit) {
      weightu.innerHTML = "KG";
      weight.min = 1;
      weight.max = 635;
      heightu.innerHTML = "CM";
      height.min = 54;
      height.max = 272;
    } else {
      weightu.innerHTML = "LBS";
      weight.min = 2;
      weight.max = 1400;
      heightu.innerHTML = "IN";
      height.min = 21;
      height.max = 107;
    }
}

// Calculate BMI and display results
function calcBMI() {
  // (A) Get elements
  let bmi = null,
    bmiClass = "",
    unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
    weight = parseInt(document.getElementById("bmi-weight").value),
    height = parseInt(document.getElementById("bmi-height").value),
    results = document.getElementById("bmi-results");

  // Enter your code here!
  if (unit) {
    // Metric system specific formula
    height = height * Math.pow(10, -2);
    bmi = weight / (height * height);
  } else {
    // Imperial system specific formula
    bmi = 703 * (weight / (height * height));
  }

  // Round down bmi result to 2 decimal points
  bmi = Math.round(bmi * 100) / 100;

  if (bmi < 18.5) {
    // Underweight
    bmiClass = "Underweight";
  } else if (bmi < 25) {
    // Normal weight
    bmiClass = "Normal weight";
  } else if (bmi < 30) {
    // Overweight
    bmiClass = "Overweight";
  } else {
    // Obese
    bmiClass = "Obese";
  }

  results.innerText = `${bmi} - ${bmiClass}`;

  return false;
}