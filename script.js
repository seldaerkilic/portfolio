
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



// Potential project Card animation or event handler





// Error handling for whole page



