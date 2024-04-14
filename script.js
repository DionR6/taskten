// script.js
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please check and try again.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
