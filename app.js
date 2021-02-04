const key = document.getElementById("main-key");
const which = document.getElementById("main-which");
const code = document.getElementById("main-code");
var showKeyCode = document.getElementById("showKeyCode")

function keydownHandler(event) {
    key.innerHTML=event.key;
    which.innerHTML=event.which;
    code.innerHTML=event.code;
    generator.classList.remove("showKeyCode")
    generator.remove()     
}

document.addEventListener("keydown", keydownHandler)


