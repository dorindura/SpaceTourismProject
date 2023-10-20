const comander = document.getElementById("commander-crew")
const nameCrew = document.getElementById("h1-left-div")
const paragraphCrew = document.getElementById("paragraph-left-div-crew")
const imageCrew = document.getElementById("crew-members-photos")


const button1Crew = document.getElementById("first-button-crew");
const button2Crew = document.getElementById("second-button-crew");
const button3Crew = document.getElementById("third-button-crew");
const button4Crew = document.getElementById("fourth-button-crew");

function changeAtributesInCrew1() {
    comander.innerHTML = "COMMANDER";
    nameCrew.innerHTML = "DOUGLAS HURLEY";
    paragraphCrew.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    imageCrew.innerHTML = document.getElementById("crew-members-photos").src="assets/crew/image-douglas-hurley.png";
}

function changeAtributesInCrew2() {
    comander.innerHTML = "Mission Specialist";
    nameCrew.innerHTML = "MARK SHUTTLEWORTH";
    paragraphCrew.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    imageCrew.innerHTML = document.getElementById("crew-members-photos").src="assets/crew/image-mark-shuttleworth.png";
}

function changeAtributesInCrew3() {
    comander.innerHTML = "PILOT";
    nameCrew.innerHTML = "Victor Glover";
    paragraphCrew.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    imageCrew.innerHTML = document.getElementById("crew-members-photos").src="assets/crew/image-victor-glover.png";
}

function changeAtributesInCrew4() {
    comander.innerHTML = "Flight Engineer";
    nameCrew.innerHTML = "Anousheh Ansari";
    paragraphCrew.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    imageCrew.innerHTML = document.getElementById("crew-members-photos").src="assets/crew/image-anousheh-ansari.png";
}

button1Crew.addEventListener("click", changeAtributesInCrew1);
button2Crew.addEventListener("click", changeAtributesInCrew2);
button3Crew.addEventListener("click", changeAtributesInCrew3);
button4Crew.addEventListener("click", changeAtributesInCrew4);