const contactLink = document.querySelector(".button--contact");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = document.querySelector(".modal-close");
const contactForm = document.querySelector(".contact-form");
const contactName = document.querySelector(".contact-name");
const contactEmail = document.querySelector(".contact-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
    contactName.focus();
  }
});

contactClose.addEventListener("click", function () {
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});
