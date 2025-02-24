// Fetch and display a random dog image
function fetchNewDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("random-dog").src = data.message;
        })
        .catch(error => console.error("Error fetching dog image:", error));
}

// Fetch a dog image on page load
fetchNewDog();

// Change background color when mouse moves over the header
document.querySelector("header").addEventListener("mousemove", () => {
    document.body.style.backgroundColor = "#DFF6FF"; // Light blue
});

// Restore original background when mouse leaves the header
document.querySelector("header").addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#f4f4f4"; // Original background color
});
