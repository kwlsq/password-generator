const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordBox1 = document.querySelector('.password-box-1');
let passwordBox2 = document.querySelector('.password-box-2');
let isSymbolUsed = document.querySelector('.toggle-symbol').checked;

function validateQuantity() {
    var input = document.querySelector('.password-length-input');
    var maxValue = parseInt(input.max);
    var minValue = parseInt(input.min);

    if (parseInt(input.value) > maxValue) {
        input.value = maxValue;
    } else if (parseInt(input.value) < 1) {
        input.value = minValue;
    }
}

function validateSymbol() {
    isSymbolUsed = document.querySelector('.toggle-symbol').checked;
}

function generatePassword() {
    let passwordLengthInput = document.querySelector('.password-length-input').value;
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < passwordLengthInput; i++) {
        password1 += randomizedCharacter()
        password2 += randomizedCharacter()
    }
    console.log(password1)
    console.log(password2)
    document.getElementById('password1').textContent = password1;
    document.getElementById('password2').textContent = password2;
}

function randomizedCharacter() {
    let charactersCopy = characters;
    if (!isSymbolUsed) {
        charactersCopy = charactersCopy.filter(char => /^[a-zA-Z0-9]*$/.test(char));
    }
    return charactersCopy[Math.floor(Math.random() * charactersCopy.length)]
}

function copyOnClick1() {
    // Get the text field
    const span = document.querySelector('.password-box-1');

    span.onclick = function () {
        document.execCommand("copy");
    }

    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
        }
    });
    alert(`${span.textContent} copied to clipboard`)
}

function copyOnClick2() {
    // Get the text field
    const span = document.querySelector('.password-box-2');

    span.onclick = function () {
        document.execCommand("copy");
    }

    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
        }
    });
    alert(`${span.textContent} copied to clipboard`)
}