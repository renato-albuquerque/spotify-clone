// variables

const menuHamburger = document.querySelector(".fa-bars");
const navMenuHamburger = document.querySelector(".navMenuHamburger");

// events

menuHamburger.addEventListener("click", () => {
    navMenuHamburger.classList.toggle("hide");

    if(navMenuHamburger.classList.contains("navMenuHamburger")) {
        menuHamburger.classList.toggle("fa-bars");
        menuHamburger.classList.toggle("fa-x");
    } 
})