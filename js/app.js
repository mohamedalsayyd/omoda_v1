import translation from "./translation.js";
const newsSlider = document.querySelector(
  ".news-slider .news-slider__container"
);
const languageSelector = document.getElementById("slct");
languageSelector.addEventListener("change", (event) => {
  localStorage.setItem("lang", event.target.value);
  setLanguage(event.target.value);
});
const languageSelectorMob = document.getElementById("moblieSelect");
languageSelectorMob.addEventListener("change", (event) => {
  localStorage.setItem("lang", event.target.value);
  setLanguage(event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);
});

const setLanguage = (language) => {
  languageSelector.value = language;
  languageSelectorMob.value = language;
  const elements = document.querySelectorAll("[data-trans]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-trans");
    element.textContent = translation[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
  const lang = localStorage.getItem("lang") || "en";
  const textCentered = document.querySelectorAll(".feature-content__title");
  const textDesc = document.querySelectorAll(".feature-content__text");
  if (lang === "ar") {
    textCentered.forEach((item) => {
      item.classList.add("text-arabic");
    });
    textDesc.forEach((item) => {
      item.classList.add("text-arabic");
    });
  } else {
    textCentered.forEach((item) => {
      item.classList.remove("text-arabic");
    });
    textDesc.forEach((item) => {
      item.classList.remove("text-arabic");
    });
  }

  // if (lang === "ar") {
  //   newsSlider.classList.add("newsSlider");
  // } else {
  //   newsSlider.classList.remove("newsSlider");
  // }
};
