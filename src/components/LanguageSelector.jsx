import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { spain, usa } from "../assets/images";
import "../css/language-selector.css";
import LanguageOption from "./LanguageOption";

const LANGUAGES = [
  { code: "es", flag: spain, labelKey: "language-selector.spanish" },
  { code: "en", flag: usa, labelKey: "language-selector.english" },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const menuRef = useRef(null);

  const setLanguage = useCallback(
    async (lng) => {
      try {
        await i18n.changeLanguage(lng);
        document.body.dir = i18n.dir(lng);
        localStorage.setItem("selectedLanguage", lng);
      } catch (error) {
        console.error("Error changing language:", error);
      }
    },
    [i18n]
  );

  useEffect(() => {
    const saved = localStorage.getItem("selectedLanguage") || "es";
    setLanguage(saved).finally(() => setIsInitialized(true));
  }, [setLanguage]);

  const languages = useMemo(
    () => LANGUAGES.map((lang) => ({...lang, name: t(lang.labelKey), }))
  ,[t]);

  const currentLanguage = useMemo(
    () => languages.find((l) => l.code === i18n.language) || languages[0],
    [i18n.language, languages]
  );

  const handleChangeLanguage = useCallback(
    (lng) => {
      setLanguage(lng);
      setMenuOpen(false);
    },
    [setLanguage]
  );

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (!isInitialized) return null;

  return (
    <div className="language-selector" ref={menuRef}>
      <button
        className="language-button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label={t("language-selector.change-language")}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="flag-main"
        />
        <div className="lang-info">
          <span className="lang-label">
            {t("language-selector.language")}
          </span>
          <span className="lang-name">{currentLanguage.name}</span>
        </div>
        <span className={`arrow ${menuOpen ? "open" : ""}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {menuOpen && (
        <ul className="language-menu">
          {languages.map((lang) => (
            <LanguageOption
              key={lang.code}
              lang={lang}
              isActive={i18n.language === lang.code}
              onSelect={handleChangeLanguage}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(LanguageSelector);
