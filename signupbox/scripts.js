const form = document.getElementById("signup-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // collect form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    // validate form data
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    // send form data to server
    console.log({ username, email, password });
    // reset form
    form.reset();
});