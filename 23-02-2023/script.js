function handleSubmit() {
  console.log("called");
  let firstName = document.getElementById("firstName").value;
  console.log(firstName);
}

function handleChange() {
  console.log("c");

  let firstName = document.getElementById("firstName");

  firstName.value = firstName.value.toUpperCase();
}

function handleCalculate() {
  console.log(document.getElementById("number2"));
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  document.getElementById("result").innerText = number1 + number2;
}
