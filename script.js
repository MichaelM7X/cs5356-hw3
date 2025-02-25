// 1️⃣ Fetch Random Dog Image (Original Feature)
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

// 2️⃣ Header Background Color Changes on Mouse Move
document.querySelector("header").addEventListener("mousemove", (event) => {
    const red = Math.floor((event.offsetX / event.target.offsetWidth) * 255);
    const blue = Math.floor((event.offsetY / event.target.offsetHeight) * 255);
    event.target.style.backgroundColor = `rgb(${red}, 100, ${blue})`;
});

// 3️⃣ Image Glow Effect on Mouse Move
const profilePic = document.querySelector(".profile-pic");

profilePic.addEventListener("mousemove", (event) => {
    const { offsetX, offsetY } = event;
    profilePic.style.boxShadow = `${offsetX - 100}px ${offsetY - 50}px 20px rgba(0, 255, 255, 0.6)`;
});

profilePic.addEventListener("mouseleave", () => {
    profilePic.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.3)";
});

// 4️⃣ Fancy Mouse Trail Effect
document.addEventListener("mousemove", (event) => {
    let trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    setTimeout(() => {
        trail.remove();
    }, 500);
});
