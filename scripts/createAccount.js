let form = document.querySelector(".wf1");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters.");
    } else if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
    } else {
        // Form is valid, submit the form
        form.submit();
    }
});
