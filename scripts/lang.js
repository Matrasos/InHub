// Script for languages
let langElements = document.querySelectorAll(".lang-label");
let selectedLang = localStorage.getItem("selectedLang");
document.addEventListener("DOMContentLoaded", function () {
  if (selectedLang) {
    loadLanguage(selectedLang);
    document.getElementById("lang-input-" + selectedLang).checked = true;
  }

  for (let i = 0; i < langElements.length; i++) {
    langElements[i].addEventListener("click", function () {
      let lang = this.getAttribute("data-lang");
      selectedLang = lang
      loadLanguage(lang);
      localStorage.setItem("selectedLang", lang);
    });
  }

  function loadLanguage(lang) {
    fetch("./scripts/lang/" + lang + ".json")
      .then((response) => response.json())
      .then((data) => {
        let elements = document.querySelectorAll("[data-i18n]");
        for (let j = 0; j < elements.length; j++) {
          let key = elements[j].getAttribute("data-i18n");
          elements[j].innerHTML = data[key];
        }
      })
      .catch((error) => console.error(error));
  }
});