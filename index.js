const add = document.querySelector(".input");
const addElementbtn = document.querySelector(".btn");
const inp = document.querySelector(".form-todo");

// const removeBtn = document.querySelector(".remove");
const newArray = [];
let flag = 0;
const addLi = function(val) {
    if (val.trim() != "") {
        const addSection = document.querySelector(".addedElementsSectionUl");
        const divEle = document.createElement("div");
        divEle.className = "newDiv";
        const addingLi = document.createElement("li");
        addingLi.className = "newLi";
        addingLi.innerHTML = val;
        addingLi.innerHTML += "<img src=\"./img/icons8-remove-50.png\" alt=\" \" class=\"newLiImg remove\">";
        newArray.push(divEle);
        // console.log(newArray.indexOf(divEle));
        divEle.addEventListener("click", (e) => {
            e.preventDefault();
            const index = newArray.indexOf(divEle);
            const dlt = document.getElementsByClassName("remove");
            console.log(newArray.indexOf(dlt));
            newArray.splice(index, 1);
        })
        if (newArray.length != 0) flag = 1;
        divEle.append(addingLi);
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
    // const btnInitiate = function() {
    //     removeBtn.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         const dltDiv = document.querySelector(".addedElementsSectionUl");
    //         dltDiv.remove(e);
    //     })
    // }