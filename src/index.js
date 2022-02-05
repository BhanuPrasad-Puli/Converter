let textInput = document.getElementById("input-text");
let textOutput = document.getElementById("from-base");
let spantext = document.getElementById("error-text");

const convertBtn = document.getElementById("btn");

convertBtn.addEventListener("click", function () {
  let input = +textInput.value;
  let baseValue = +textOutput.value;
  if (isNaN(input)) {
    baseValue.textContent = "enter valid number";
  }
});
