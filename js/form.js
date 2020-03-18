var feedbackButton = document.querySelector(".feedback-button");
var overlay = document.querySelector(".modal-overlay");
var modalFeedback = document.querySelector(".modal-feedback");
var closeFeedback = modalFeedback.querySelector(".modal-close");

var formFeedback = modalFeedback.querySelector(".feedback-form");
var nameFeedback = modalFeedback.querySelector("[name=name]");
var emailFeedback = modalFeedback.querySelector("[name=email]");
var textFeedback = modalFeedback.querySelector("[name=feedback-text]");

var isStorageSupport = true;
var nameStorage = " ";
var emailStorage = " ";

try {
    nameStorage = localStorage.getItem("name");
    emailStorage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    nameFeedback.focus();

    if (nameStorage) {
        nameFeedback.value = nameStorage;
        emailFeedback.focus();
    }

    if (emailStorage) {
        emailFeedback.value = emailStorage;
        textFeedback.focus();
    }
});

closeFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

formFeedback.addEventListener("submit", function(evt) {
    if (!nameFeedback.value || !emailFeedback.value || !textFeedback.value) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameFeedback.value);
            localStorage.setItem("email", emailFeedback.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalFeedback.classList.contains("modal-show")) {
            evt.preventDefault();
            modalFeedback.classList.remove("modal-show");
            modalFeedback.classList.remove("modal-error");
            overlay.classList.remove("overlay-show");
        }
    }
});