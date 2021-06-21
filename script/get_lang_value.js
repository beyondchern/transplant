let lang = getQueryStringValue("lang");
if (lang == "") {
  lang = navigator.language.substr(0, 2);
}
if (!["en", "de"].includes(lang)) {
  lang = "en";
}
