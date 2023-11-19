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

window.addEventListener("resize", () => {
    let screenWidth = window.innerWidth;

    if(screenWidth >= 768) {
        navMenuHamburger.classList.add("hide");
        window.location.reload();
    }
})