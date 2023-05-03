
function start() {
    generat();
    document.querySelector("#copy-rgb").onclick = () => {
        copyColor(document.querySelector('#rgb'));
    }
    document.querySelector("#copy-hex").onclick = () =>{
        copyColor(document.querySelector('#hex'));
    }
    document.querySelector('button').onclick = () => {
        generat();
    }
} // end function start

// Generat random color
function generat() {
    const rgbColor = document.querySelector('#rgb');
    const hexColor = document.querySelector('#hex');
    const body = document.querySelector('body');

    const r = generatColor();
    const g = generatColor();
    const b = generatColor();

    const hexValue = rgbToHex(r, g, b) // convert in hex value
    const rgbValue = `rgb(${r}, ${g}, ${b})`; // combine the three values

    rgbColor.value = rgbValue;
    hexColor.value = hexValue.toUpperCase();
    body.style.backgroundColor = rgbValue;

} // end function generat

// Generat random number between 0 to 255
function generatColor() {
    return Math.floor(Math.random() * 255);
} // end function generatColor

function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, "0"); // convert red value to hex string
    const hexG = g.toString(16).padStart(2, "0"); // convert green value to hex string
    const hexB = b.toString(16).padStart(2, "0"); // convert blue value to hex string
    return `#${hexR}${hexG}${hexB}`; // combine the three hex values and return the result
} // end function rgbToHex


function copyColor(element) {
    element.removeAttribute("disabled");
    element.select(); // select color code
    document.execCommand("copy"); // copy color code
    let newNode = document.createElement("p"); // create element
    document.querySelector(".container").appendChild(newNode).innerHTML = "Copied"; // append element
    let selection = window.getSelection(); 
    selection.removeAllRanges();
    element.setAttribute("disabled", "");
    newNode.classList.add("message");
    newNode.addEventListener("animationend",()=>{
        newNode.remove();
    });
} // end function copyColor


window.addEventListener("load", start, false)