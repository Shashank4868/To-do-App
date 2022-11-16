const nav = document.querySelector(".navBar");
const hamburger = document.querySelector(".hamburger-menu");
const main = document.querySelector(".main");
const txt = document.querySelectorAll(".h1Text");
let img = 1;
hamburger.addEventListener("click", (e) => {
    if (img > 0) {
        hamburger.src = "./img/icons8-multiply-96.png";
        img *= -1;
        // txt.style.display = "none";
        nav.style.display = "block";
        main.style.width = "90%";
        main.style.marginLeft = "10vw"
    } else {
        hamburger.src = "./img/icons8-xbox-menu-96.png";
        img *= -1;
        nav.style.display = "none";
        main.style.marginLeft = "0";
        main.style.width = "100%";
    }
})