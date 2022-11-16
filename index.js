const add = document.querySelector(".input");
const addElementbtn = document.querySelector(".btn");
const inp = document.querySelector(".form-todo");
const middleDiv = document.querySelector(".middleDiv");
let newArray = 0;
let flag = 0;
const addLi = function(val) {
    if (val.trim() != "") {
        const addSection = document.querySelector(".addedElementsSectionUl");
        const divEle = document.createElement("div");
        divEle.className = "newDiv";
        const addingLi = document.createElement("li");
        addingLi.className = "newLi";
        addingLi.innerHTML = val;
        const CompleteBtn = document.createElement("img");
        CompleteBtn.src = "./img/complete_Icon.png"
        CompleteBtn.className = "completeImg";
        CompleteBtn.addEventListener("click", (e) => {
            CompleteBtn.parentElement.style.textDecoration = "line-through";
            CompleteBtn.parentElement.style.color = "white";
            CompleteBtn.parentElement.parentElement.style.backgroundColor = "black";
        })
        const addImg = document.createElement("img");
        addImg.src = "./img/icons8-remove-50.png";
        addImg.className = "newLiImg";
        addImg.addEventListener("click", (e) => {
            addImg.parentElement.remove();
            newArray -= 1;
            if (newArray <= 0) {
                middleDiv.style.display = "block";
            }
        })
        newArray++;
        if (newArray > 0) {
            middleDiv.style.display = "none";
        }
        if (newArray != 0) flag = 1;
        divEle.append(addingLi);
        addingLi.append(addImg);
        addingLi.append(CompleteBtn);
        addSection.append(divEle);


    }
}

addElementbtn.addEventListener("click", (e) => {
    e.preventDefault();
    addLi(add.value);
    add.value = "";
});
// add.onkeypress myFunc(value)
inp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        addLi(add.value);
        add.value = "";
    }
})
const date = document.querySelector(".showDate");
var dt = new Date();
date.innerHTML = dt.toLocaleDateString();


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