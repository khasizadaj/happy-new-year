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

const share_button = document.querySelector(".share-button");

share_button.addEventListener("click", (event) => {
    let url = window.location.href;
    console.log(url);
    navigator.clipboard.writeText(url);
    alert("Səhifənin linki kopyalandı. İndi dostlarına göndərə bilərsən!");
})