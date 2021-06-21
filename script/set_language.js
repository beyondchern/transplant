let lang = getQueryStringValue("lang");
if (lang == "") {
  lang = navigator.language.substr(0, 2);
}
if (!["en", "de"].includes(lang)) {
  lang = "en";
}

//apply the language values to the content
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-key]").forEach((element) => {
    let key = element.getAttribute("data-key");
    element.innerHTML = languages[lang][key];
  });
});
