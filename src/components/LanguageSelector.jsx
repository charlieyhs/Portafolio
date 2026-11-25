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
  const menuRef = useRef(null);

  const setLanguage = useCallback(
    async (lng) => {
      try {
        await i18n.changeLanguage(lng);
      } catch (error) {
        console.error("Error changing language:", error);
      }
    },
    [i18n]
  );

  const languages = useMemo(
    () => LANGUAGES.map((lang) => ({...lang, name: t(lang.labelKey), }))
  ,[t]);

  const currentLanguage = useMemo(
    () => languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0],
    [i18n.resolvedLanguage, languages]
  );

  const handleChangeLanguage = useCallback(
    (lng) => {
      setLanguage(lng);
      setMenuOpen(false);
    },
    [setLanguage]
  );

  // Cerrar menú al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="language-selector" ref={menuRef}>
      <button
        className="language-button"
        onClick={() => setMenuOpen((prev) => !prev)}
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
              isActive={i18n.resolvedLanguage === lang.code}
              onSelect={handleChangeLanguage}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(LanguageSelector);
