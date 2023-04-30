
// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}))


// Cleaning inputs after form submit
const formSubmit = document.querySelector('.formSubmit');
const inputElement = document.getElementsByName('email');
const textElement = document.getElementsByName('message');

formSubmit.addEventListener('submit', () => {
    inputElement[0].value = "";
    textElement[0].value = "";
})

// Dark and Light mode button toggle

const modeDark = document.querySelector(".mode");
const circleDark = document.querySelector(".circle");
const bodyDark = document.querySelector(".bodyDark");
const iconLight = document.querySelector(".fa");

console.log(modeDark);
console.log(circleDark);
console.log(bodyDark);
console.log(iconLight);

modeDark.addEventListener('click', ()=>{
    modeDark.classList.toggle("modeLight");
    circleDark.classList.toggle("circleLight");
    bodyDark.classList.toggle("bodyLight");
    iconLight.classList.toggle("darkIcon");

    modeDark.classList.remove("mode");
    circleDark.classList.remove("circle");
    bodyDark.classList.remove("bodyDark");
})

const modeReverse = document.querySelector(".modeLight");
const circleReverse = document.querySelector(".circleLight")
const bodyReverse = document.querySelector(".bodyLight");
const iconReverse = document.querySelector(".darkIcon");

console.log(modeReverse);
console.log(circleReverse);
console.log(bodyReverse);

modeReverse.addEventListener('click', ()=>{
    modeReverse.classList.toggle("mode");
    circleReverse.classList.toggle(".circle");
    bodyReverse.classList.remove("bodyLight");
    iconLight.classList.remove("darkIcon");
})
