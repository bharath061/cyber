// Typing effect
const text = "Cyber Security Engineer | Network Defender | Ethical Hacker";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();

// Button scroll
function scrollToSkills() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}
