const Moon = document.getElementById("moon");
const Mars = document.getElementById("mars");
const Europa = document.getElementById("europa");
const Titan = document.getElementById("titan");

const span = document.getElementById("h1-moon-destination");
const paragraph1 = document.getElementById("paragraph-destination-moon");
const image = document.getElementById("atributes-moon-photo").src="assets/destination/image-moon.png";
const p1Left = document.getElementById("p1-left");
const p2Left = document.getElementById("p2-left");
const p1Right = document.getElementById("p1-right");
const p2Right = document.getElementById("p2-right")

const image2 = function changeImage() {
    document.getElementById()
}

function changeContentForMoon() {
    span.innerHTML = "MOON";
    paragraph1.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    p2Left.innerHTML = "384,400 km";
    p2Right.innerHTML = "3 days";
    image.innerHTML = document.getElementById("atributes-moon-photo").src="assets/destination/image-moon.png"
}

function changeContentForMars() {
    span.innerHTML = "MARS";
    paragraph1.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    p2Left.innerHTML = "225 MIL. km";
    p2Right.innerHTML = "9 months";
    image.innerHTML = document.getElementById("atributes-moon-photo").src="assets/destination/image-mars.png"
}

function changeContentForEuropa() {
    span.innerHTML = "EUROPA";
    paragraph1.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    p2Left.innerHTML = "628 MIL. km";
    p2Right.innerHTML = "3 years";
    image.innerHTML = document.getElementById("atributes-moon-photo").src="assets/destination/image-europa.png"
}

function changeContentForTitan() {
    span.innerHTML = "TITAN";
    paragraph1.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    p2Left.innerHTML = "1.6 BIL. km";
    p2Right.innerHTML = "7 years";
    image.innerHTML = document.getElementById("atributes-moon-photo").src="assets/destination/image-titan.png"
}


Mars.addEventListener("click", changeContentForMars);
Moon.addEventListener("click", changeContentForMoon);
Europa.addEventListener("click", changeContentForEuropa);
Titan.addEventListener("click", changeContentForTitan);

