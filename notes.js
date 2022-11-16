const notesDiv = document.querySelector(".addNotes");
const addNotesDiv = document.querySelector(".addNotesDiv");
const middleDiv = document.querySelector(".middleDivNotes");
let i = 0;

const add = function() {
    // const textToAppend = "<textarea name=\"inputText\" id=\"\" cols=\"30\" rows=\"10\" class=\"newTextArea\" placeholder=\"Write your Notes here\"></textarea>";
    // addNotesDiv.innerHTML += (textToAppend);
    const textToAppend = document.createElement("textarea");
    textToAppend.className = "newTextArea";
    textToAppend.placeholder = "Write your notes here!!!!";
    addNotesDiv.append(textToAppend);
    i++;
    if (i > 0) {
        middleDiv.style.display = "none";
    }
    // const dltText = document.querySelector(".newTextArea");
    textToAppend.addEventListener("dblclick", (e) => {
        i--;
        if (i <= 0) {
            middleDiv.style.display = "block";
        }
        textToAppend.remove();
    })
}

notesDiv.addEventListener("click", (e) => {
    add();
})

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