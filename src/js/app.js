import React from "react";
import "././css/main-f4ae3437c92c1efc.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="#BUTTONS_LINK">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("ua")}>UA</button>  
  <hr />
      <div><h1>{t("title")}</h1></div>
      <div>{t("description.part1")}</div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

//Code taken from: https://github.com/mohnatus/i18next-template/
