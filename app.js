let counterProduct1 = 1;
let counterProduct2 = 1;

function incrementProduct1() {
  counterProduct1++;
  document.getElementById("product1").textContent = counterProduct1;
}

function decrementProduct1() {
  if (counterProduct1 > 1) counterProduct1--;
  document.getElementById("product1").textContent = counterProduct1;
}

function incrementProduct2() {
  counterProduct2++;
  document.getElementById("product2").textContent = counterProduct2;
}

function decrementProduct2() {
  if (counterProduct2 > 1) counterProduct2--;
  document.getElementById("product2").textContent = counterProduct2;
}

function success() {
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let username = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let postalCode = document.getElementById("postalCode").value;

  if (
    email === "" ||
    phone === "" ||
    username === "" ||
    address === "" ||
    city === "" ||
    country === "" ||
    postalCode === ""
  ) {
    console.log(email);
    alert("Please fill all the fields!");
  } else {
    alert("Form submitted successfully!");
  }
}
