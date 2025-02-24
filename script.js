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
