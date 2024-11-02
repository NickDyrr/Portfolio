document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const darkModeToggle = document.getElementById("darkModeToggle");

// Load saved theme from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

fetch("content.json")
    .then(response => response.json())
    .then(data => {
        const messagesContainer = document.getElementById("messages");
        const galleryContainer = document.getElementById("gallery");

        // Display messages
        data.messages.forEach(message => {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
        });

        // Display images
        data.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            galleryContainer.appendChild(imgElement);
        });
    })
    .catch(error => console.error("Error loading content:", error));
