
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Here you can perform AJAX request to submit form data to server
        // For demonstration purposes, we'll just display a success message
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

        // Reset form fields after submission
        form.reset();
    });
});
