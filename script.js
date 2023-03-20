
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

console.log(inputElement);
console.log(textElement);

formSubmit.addEventListener('submit', () => {
    inputElement[0].value = "";
    textElement[0].value = "";
})





