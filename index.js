// build/index.js
var form = document.querySelector("#form");
var positionChosen = document.querySelector(".position-chosen");
var positionList = document.querySelectorAll(".position-chosen-list");
var testerPosition = document.querySelector(".position-tester");
var developerPosition = document.querySelector(".position-developer");
var pmPosition = document.querySelector(".position-pm");
var firstName = document.querySelector("#name");
var lastName = document.querySelector("#lastname");
var email = document.querySelector("#email");
var position = document.querySelector("#position");
var desc = document.querySelector("#desc");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
position.addEventListener("change", function() {
  if (position.value == "tester") {
    positionChosen.classList.remove("hide");
    answer1.placeholder = "Systemy testujące";
    answer2.placeholder = "Systemy raportowe";
    answer3.nextElementSibling.innerText = "Zna selenium";
    answer3.value = "Zna selenium";
  }
  if (position.value == "developer") {
    positionChosen.classList.remove("hide");
    answer1.placeholder = "Środowiska ide";
    answer2.placeholder = "Języki programowania";
    answer3.nextElementSibling.innerText = "Zna mysql";
    answer3.value = "Zna mysql";
  }
  if (position.value == "pm") {
    positionChosen.classList.remove("hide");
    answer1.placeholder = "Metodologie prowadzenia projektów";
    answer2.placeholder = "Systemy raportowe";
    answer3.nextElementSibling.innerText = "Zna scrum";
    answer3.value = "Zna scrum";
  }
});
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const descValue = desc.value;
  const positionValue = position.value;
  const answer1Value = answer1.value.trim();
  const answer2Value = answer2.value.trim();
  const answer3Value = answer3.value ? "Zna" : "Nie zna";
  const firstNameError = document.querySelector(".first-name-error");
  const lastNameError = document.querySelector(".last-name-error");
  const emailError = document.querySelector(".email-error");
  const positionError = document.querySelector(".position-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (firstNameValue == "") {
    if (!firstNameError) {
      let error = document.createElement("p");
      error.classList.add("error", "first-name-error");
      error.textContent = "To pole jest wymagane";
      firstName.insertAdjacentElement("afterend", error);
      firstName.focus();
    }
  } else {
    if (firstNameError) {
      firstNameError.remove();
    }
  }
  if (!emailValue.match(emailPattern)) {
    if (!emailError) {
      let error = document.createElement("p");
      error.classList.add("error", "email-error");
      error.textContent = "Wpisz poprawny adres email";
      email.insertAdjacentElement("afterend", error);
      email.focus();
    }
  } else {
    if (emailError) {
      emailError.remove();
    }
  }
  if (lastNameValue == "") {
    if (!lastNameError) {
      let error = document.createElement("p");
      error.classList.add("error", "last-name-error");
      error.textContent = "To pole jest wymagane";
      lastName.insertAdjacentElement("afterend", error);
      lastName.focus();
    }
  } else {
    if (lastNameError) {
      lastNameError.remove();
    }
  }
  if (positionValue == "") {
    if (!positionError) {
      let error = document.createElement("p");
      error.classList.add("error", "position-error");
      error.textContent = "Wybierz stanowisko";
      position.insertAdjacentElement("afterend", error);
      position.focus();
    }
  } else {
    if (positionError) {
      positionError.remove();
    }
  }
  ;
  if (answer3.checked) {
    answer3.value = answer3.nextElementSibling.innerText + "- TAK";
  } else {
    answer3.value = "NIE ZNA";
  }
  const er = document.querySelectorAll(".error");
  if (er.length == 0) {
    console.log(this.querySelector("#name").value);
    console.log(this.querySelector("#lastname").value);
    console.log(this.querySelector("#email").value);
    console.log(this.querySelector("#desc").value);
    console.log(this.querySelector("#position").value);
    console.log(this.querySelector("#answer1").value);
    console.log(this.querySelector("#answer2").value);
    console.log(this.querySelector("#answer3").value);
    const newData = new FormData(this);
    fetch("server.php", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(newData))
    }).then((response) => response.json()).then((data) => {
      console.log(data.message);
      console.log(data.data);
      form.reset();
    }).catch((error) => {
      console.error(error);
    });
  }
});
//# sourceMappingURL=index.js.map
