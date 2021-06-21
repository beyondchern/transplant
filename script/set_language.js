//apply the language values to the content
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-key]").forEach((element) => {
    let key = element.getAttribute("data-key");
    element.innerHTML = languages[lang][key];
  });

  const nav = document.getElementById("navMenu").querySelectorAll(".nav__link");
  for (element of nav) {
    element.href += "?lang=" + lang;
  }

  const lang_text = (document.getElementById(lang).style.fontWeight = 600);
});
