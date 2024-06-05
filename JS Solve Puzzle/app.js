// TODO 1: Generate PIN - done
// TODO 2: Make the keypad functional - done
// TODO 3: Make Notification Work - done
// TODO 4: Make try out functional - done
// TODO 5: Make "<" and "C" work on the keypress - done
// TODO 6: If there is no try left user won't able to generate a new pin - done

// Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPin = document.querySelector(".generatedPin");
const showKeyPadValue = document.querySelector(".showValue");
const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const wrongPinNotification = document.querySelector(".wrong-pin");
const correctPinNotification = document.querySelector(".correct-pin");
const tryLeft = document.getElementById("tryLeft");
const actions = document.querySelector(".action-left");

// Generating 4 digits Pin
function generatePin() {
  let randomNumber = Math.floor(Math.random() * 9000 + 1000);
  generatedPin.value = randomNumber;
  generatePinBtn.disabled = true;
  //   generatePinBtn.style.backgroundColor = "green";
}

// show value on the keypad
function showKeyPadInput(number) {
  let chances = tryLeft.innerHTML;
  //   console.log(chances);
  if (chances >= 0) {
    if (generatedPin.value === "") {
      alert("Please generate a pin first! :)");
    } else {
      showKeyPadValue.value += number;
    }
    if (number === "C") {
      showKeyPadValue.value = "";
    }
  }
}

// once click on "<" remove single digit from the last
function removeSingleDigit() {
  if (generatedPin.value === "") {
    alert("Please generate a pin first! :)");
  } else {
    let currentValue = showKeyPadValue.value;
    showKeyPadValue.value = currentValue.slice(0, -1);
    console.log(currentValue);
  }
}

// check pin
function checkGeneratedPin() {
  let newPin = generatedPin.value;
  let currentPin = showKeyPadValue.value;

  if (newPin === currentPin) {
    showCorrectNotification();
  } else {
    showWrongNotification();
    numberOfTry();
  }
}

// check number of chances left
function numberOfTry() {
  let chance = tryLeft.innerText;
  if (chance > 0) {
    tryLeft.innerHTML = --chance;
  } else {
    actions.innerHTML = "No try left! Please try after 30 hours!";
    submitBtn.disabled = "true";
  }
}

// show notification if pin is invalid
function showWrongNotification() {
  wrongPinNotification.style.display = "block";
  correctPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "red";
  submitBtn.style.backgroundColor = "red";
  showKeyPadValue.value = "";
}

// show notification if pin is valid
function showCorrectNotification() {
  correctPinNotification.style.display = "block";
  wrongPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "green";
  submitBtn.style.backgroundColor = "green";
  submitBtn.disabled = true;
}

// hide default notification
function hideNotification() {
  wrongPinNotification.style.display = "none";
  correctPinNotification.style.display = "none";
}

// Events
hideNotification();
generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSingleDigit);
submitBtn.addEventListener("click", checkGeneratedPin);
