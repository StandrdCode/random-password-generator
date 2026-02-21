const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
const alertContainerEl = document.querySelector(".alert-container")

// When the Generate Password button is clicked
btnEl.addEventListener("click", ()=> {
    createPassword()
});

// When the copy button icon is clicked
copyIconEl.addEventListener("click", ()=> {
    copyPassword();

    if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(()=> {
        alertContainerEl.classList.add("active")
    }, 2000);
    }
});

// 0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ

// Generate a random password of 18 characters
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Length of the password to be generated
    const passwordLength = 18;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor (Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1); 
    }
    // Display the generated password in the input field
    inputEl.value = password;

    alertContainerEl.innerText = "Copied to clipboard";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    // Copy the password onto the clipboard to be pasted
    navigator.clipboard.writeText(inputEl.value);
}