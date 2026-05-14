function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function sendForm(event) {
  event.preventDefault();

  const msg = document.getElementById("msg");
  msg.textContent = "Заявка отправлена! Мы скоро свяжемся с вами.";

  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
}