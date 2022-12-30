console.log("Happy New Year!")

const form_wrapper = document.querySelector(".form-wrapper");
const message_wrapper = document.querySelector(".message-wrapper");
const name_in_message = document.querySelector("#name-in-message");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = document.querySelector(".js-name-input").value;

    if (name == "") {
        let feedback = document.querySelector(".feedback");
        feedback.classList.add("error");
        feedback.classList.add("active");
    } else {
        form_wrapper.classList.remove("active");
        message_wrapper.classList.add("active");
        name_in_message.innerText = name;
    }
})

const anonymous = document.querySelector(".anonymous")
anonymous.addEventListener("click", (event) => {
    form_wrapper.classList.remove("active");
    message_wrapper.classList.add("active");
})

const share_button = document.querySelector(".share");

share_button.addEventListener("click", (event) => {
    let url = window.location.href;
    console.log(url);
    navigator.clipboard.writeText(url);
    alert("Səhifənin linki kopyalandı. İndi dostlarına göndərə bilərsən!");
})

// LANGUAGE SWITCHING
const baseUrl = window.location.host;
let urlToEnglish;
if (baseUrl.includes("github.io")) {
    urlToEnglish = "https://khasizadaj.github.io/happy_new-year/en.html"
    urlToAzerbaijani = "https://khasizadaj.github.io/happy_new-year"
} else {
    urlToEnglish = "http://127.0.0.1:5500/en.html"
    urlToAzerbaijani = "http://127.0.0.1:5500/index.html"
}

console.log(baseUrl)
console.log(urlToEnglish)
console.log(urlToAzerbaijani)

const languages = document.querySelectorAll(".language-option");
languages.forEach((languageOption) => {
    languageOption.addEventListener("click", () => {
        let languageWillChange = false;
        if (languageOption.classList.contains("active")) {
            console.log(`Language is already ${languageOption.innerText}.`)
        } else {
            console.log(`Language has changed to ${languageOption.innerText}.`)
            languageWillChange = true;
        }

        if (languageWillChange) {
            if (languageOption.innerText == "EN") {
                window.location.href = urlToEnglish;
            } else {
                window.location.href = urlToAzerbaijani;
            }
        }
    })
})