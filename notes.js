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