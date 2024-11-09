document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents the form from submitting traditionally

        // Get the input values
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation for empty fields
        if (username === "" || password === "") {
            loginMessage.textContent = "Please fill in both email and password.";
            loginMessage.style.color = "red";
            return;
        }

        // Check if the username is a valid email address using HTML5 email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(username)) {
            loginMessage.textContent = "Please enter a valid email address.";
            loginMessage.style.color = "red";
            return;
        }

        // Example login check (static credentials)
        if (username === "admin@gmail.com" && password === "password123") {
            loginMessage.textContent = "Login successful!";
            loginMessage.style.color = "green";
            // Redirect to another page if needed
            // window.location.href = "homepage.html";
        } else {
            loginMessage.textContent = "Invalid email or password. Please try again.";
            loginMessage.style.color = "red";
        }
    });
});
