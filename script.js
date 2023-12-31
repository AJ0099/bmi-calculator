const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  if (height < 0 || isNaN(height)) {
    results.textContent = `Please enter a valid height`;
  } else if (weight < 0 || isNaN(weight)) {
    results.textContent = `Please enter a valid weight`;
  } else {
    const bmi = weight / Math.pow(height / 100, 2);
    results.textContent = `${bmi.toFixed(1)} kg/m²`;
  }
});
