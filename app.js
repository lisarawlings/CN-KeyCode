const key = document.getElementById("main-key");
const which = document.getElementById("main-which");
const code = document.getElementById("main-code");

function keydownHandler(event) {
    key.innerHTML=event.key;
    which.innerHTML=event.which;
    code.innerHTML=event.code;
}

document.addEventListener("keydown", keydownHandler)

