function validateAndSend() {
  const form = document.getElementById("contactForm");
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validation
  if (name.length < 2) {
    document.querySelector(".valid-name").classList.remove("hidden");
    setTimeout(closeName, 3000);
    return;
  }

  if (!validateEmail(email)) {
    document.querySelector(".valid-Mail").classList.remove("hidden");
    setTimeout(closeMail, 3000);
    return;
  }

  if (message.length < 10 || message.length > 500) {
    document.querySelector(".valid-Message").classList.remove("hidden");
    setTimeout(closeMessage, 3000);
    return;
  }

  // Si tout est valide, afficher la popup
  popupSend();
  // Réinitialiser le formulaire
  form.reset();
  document.getElementById("charCount").textContent = "0";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function updateCharCount() {
  const textarea = document.getElementById("messageBox");
  document.getElementById("charCount").textContent = textarea.value.length;
}

function popupSend() {
  document.querySelector(".message-send").classList.remove("hidden");
  setTimeout(closePopup, 3000);
}
function closePopup() {
  document.querySelector(".message-send").classList.add("hidden");
}
function closeName() {
  document.querySelector(".valid-name").classList.add("hidden");
}
function closeMail() {
  document.querySelector(".valid-Mail").classList.add("hidden");
}
function closeMessage() {
  document.querySelector(".valid-Message").classList.add("hidden");
}
