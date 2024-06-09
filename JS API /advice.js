const generateBtn = document.getElementById("generate");
const showAdvice = document.querySelector(".advice h2");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => displayAdvice(data));
}

function displayAdvice(advice) {
  console.log(advice);
  showAdvice.innerHTML = advice.slip.advice;
}

generateBtn.addEventListener("click", fetchAdvice);

fetchAdvice();
