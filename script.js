document.addEventListener("DOMContentLoaded", function() {
    const formButton = document.getElementById("form-btn");
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const firstNameError = document.getElementById("error-for-firstname");
    const lastNameError = document.getElementById("error-for-lastname");
    const emailError = document.getElementById("error-for-email");
    const passwordError = document.getElementById("error-for-password");
  
    formButton.addEventListener("click", function(event) {
      event.preventDefault(); // stop my form from submitting
      checkInputs();
    });
  
    function checkInputs() {
      showError(firstNameInput, firstNameError);
      showError(lastNameInput, lastNameError);
      showError(emailInput, emailError);
      showError(passwordInput, passwordError);
    }
  
    function showError(inputElement, errorElement) {
      if (inputElement.value.trim() === "") {
        errorElement.style.display = "block";
        inputElement.classList.add("error");
      } else {
        errorElement.style.display = "none";
        inputElement.classList.remove("error");
      }
    }
  });
  