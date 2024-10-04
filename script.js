// Full Name Validation
function validateName() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.length < 5) {
        nameError.innerText = "Name must be at least 5 characters.";
        return false;
    } else {
        nameError.innerText = "";
        return true;
    }
}

// Email Validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (!email.includes("@")) {
        emailError.innerText = "Please enter a valid email.";
        return false;
    } else {
        emailError.innerText = "";
        return true;
    }
}

// Phone Number Validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");

    if (phone.length !== 10 || phone === "123456789") {
        phoneError.innerText = "Phone number must be 10 digits and not '123456789'.";
        return false;
    } else {
        phoneError.innerText = "";
        return true;
    }
}

// Password Validation
function validatePassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value.toLowerCase();
    const passwordError = document.getElementById("passwordError");

    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name) {
        passwordError.innerText = "Password must be at least 8 characters and cannot be 'password' or your name.";
        return false;
    } else {
        passwordError.innerText = "";
        return true;
    }
}

// Confirm Password Validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.innerText = "";
        return true;
    }
}

// Validate entire form on submit
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // If all fields are valid, proceed with form submission
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fix the errors in the form.");
    }
}
