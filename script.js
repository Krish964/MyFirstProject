function displayNumbers(num) {
  const displayText = document.querySelector("#displayArea");
  displayText.innerHTML = ` <div class="operators absolute bottom-5 right-5 text-3xl">
            <span>${num}</span>
          </div>`;
}

function add(firstOperand, secondOperand) {
  num1 = Number(firstOperand);
  num2 = Number(secondOperand);
  ans = num1 + num2;
  displayNumbers(ans);
}

function sub(firstOperand, secondOperand) {
  num1 = Number(firstOperand);
  num2 = Number(secondOperand);
  ans = num1 - num2;
  displayNumbers(ans);
}

function multiply(firstOperand, secondOperand) {
  num1 = Number(firstOperand);
  num2 = Number(secondOperand);
  ans = num1 * num2;
  displayNumbers(ans);
}

function Modulo(firstOperand, secondOperand) {
  num1 = Number(firstOperand);
  num2 = Number(secondOperand);
  ans = num1 % num2;
  displayNumbers(ans);
}

function divide(firstOperand, secondOperand) {
  num1 = Number(firstOperand);
  num2 = Number(secondOperand);
  ans = num1 / num2;
  displayNumbers(ans);
}

document.addEventListener("DOMContentLoaded", () => {
  let currentNumber = " ";
  let firstOperand = "";
  let secondOperand = "";
  let Operator = "";
  let expression = "";

  const allbtns = document.querySelectorAll("#buttonArea button");

  console.log(allbtns);

  allbtns.forEach((e) => {
    e.addEventListener("click", () => {
      currentNumber += e.innerText;
      expression += e.innerText;
      displayNumbers(expression);
      console.log(`value of currentNumber is ${currentNumber}`);
      if (
        e.innerText == "+" ||
        e.innerText == "-" ||
        e.innerText == "%" ||
        e.innerText == "×"
      ) {
        firstOperand = currentNumber.slice(0, currentNumber.length - 1);
        Operator = e.innerText;
        currentNumber = " ";
        console.log(`firstOperand value is ${firstOperand}`);
      }

      if (e.innerText == "=") {
        secondOperand = currentNumber.slice(0, currentNumber.length - 1);

        if (Operator === "+") {
          add(firstOperand, secondOperand);
          expression = " ";
        } else if (Operator === "-") {
          sub(firstOperand, secondOperand);
          expression = " ";
        } else if (Operator === "%") {
          Modulo(firstOperand, secondOperand);
          expression = " ";
        } else if (Operator === "/") {
          divide(firstOperand, secondOperand);
          expression = " ";
        } else if (Operator === "×") {
          multiply(firstOperand, secondOperand);
          expression = " ";
        } else {
          alert("Not valid Operation");
          expression = " ";
        }
      }

      if (e.innerText === "C") {
        expression = "";
        displayNumbers(expression);
        location.reload();
      }
    });
  });
});
