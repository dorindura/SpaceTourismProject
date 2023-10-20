const spanTechno = document.getElementById("span-technology");
const h1Techno = document.getElementById("h1-technology");
const paragraphTechno = document.getElementById("paragraph-technology")
const imageTechno = document.getElementById("rocket-techno").src="assets/technology/image-launch-vehicle-portrait.jpg";

const button1Techno = document.getElementById("button1-techno");
const button2Techno = document.getElementById("button2-techno");
const button3Techno = document.getElementById("button3-techno");
const numbersButtons = document.querySelector(".numbers-techno");


function changeContentTechnoBtn1() {
    spanTechno.innerHTML = "THE TERMINOLOGY…";
    h1Techno.innerHTML = "LAUNCH VEHICLE";
    paragraphTechno.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    imageTechno.innerHTML = document.getElementById("rocket-techno").src="assets/technology/image-launch-vehicle-portrait.jpg";
}

function changeContentTechnoBtn2() {
    spanTechno.innerHTML = "THE TERMINOLOGY…";
    h1Techno.innerHTML = "SPACEPORT";
    paragraphTechno.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    imageTechno.innerHTML = document.getElementById("rocket-techno").src="assets/technology/image-spaceport-portrait.jpg";
}

function changeContentTechnoBtn3() {
    spanTechno.innerHTML = "THE TERMINOLOGY…";
    h1Techno.innerHTML = "SPACE CAPSULE";
    paragraphTechno.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    imageTechno.innerHTML = document.getElementById("rocket-techno").src="assets/technology/image-space-capsule-portrait.jpg";
}

button1Techno.addEventListener("click", changeContentTechnoBtn1);
button2Techno.addEventListener("click", changeContentTechnoBtn2);
button3Techno.addEventListener("click", changeContentTechnoBtn3);

// button1Techno.addEventListener("onclick",
 function changeTheButtonsAspects() {
        button1Techno.style.backgroundColor = "white";
        numbersButtons.style.color = "black";
    };
