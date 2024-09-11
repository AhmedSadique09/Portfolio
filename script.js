// Highlight the current section in the navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to all navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add 'active' class to the clicked link
            event.target.classList.add("active");
        });
    });
});


// Form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        clearErrors();

        let valid = true;

        if (!name) {
            showError("name", "Name is required.");
            valid = false;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("email", !email ? "Email is required." : "Please enter a valid email address.");
            valid = false;
        }
        if (!message) {
            showError("message", "Message is required.");
            valid = false;
        }

        if (valid) form.submit();
    });

    function showError(id, message) {
        const field = document.getElementById(id);
        const error = document.createElement("small");
        error.className = "error";
        error.style.color = "Red";
        error.innerText = message;
        field.parentElement.appendChild(error);
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach(el => el.remove());
    }
});



