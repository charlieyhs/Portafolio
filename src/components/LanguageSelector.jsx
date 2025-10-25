import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { spain, usa } from "../assets/images";
import '../css/language-selector.css'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const setLanguage = useCallback(async (lng, callback) => {
    try {
      await i18n.changeLanguage(lng);
      document.body.dir = i18n.dir(lng);
      localStorage.setItem("selectedLanguage", lng);
      if (typeof callback === "function") callback();
    } catch (error) {
      console.error("Error when changing the language:", error);
    }
  }, [i18n]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
    setLanguage(savedLanguage, () => setShowComponent(true));
  }, [setLanguage]);

  const languages = useMemo(() => [
    { code: "es", name: t("language-selector.spanish"), flag: spain },
    { code: "en", name: t("language-selector.english"), flag: usa },
  ], [t]);

  const currentLanguage = useMemo(() =>
    languages.find((lng) => lng.code === i18n.language),
    [i18n.language, languages]
  );

  const handleChangeLanguage = (lng) => {
    setLanguage(lng, () => setMenuOpen(false));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.language-selector')) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [menuOpen]);

  if (!showComponent) return null;

  return (
    <div className="language-selector">
      <button
        className="language-button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="flag-main"
        />
        <div className="lang-info">
          <span className="lang-label">{t('language-selector.language')}</span>
          <span className="lang-name">{currentLanguage.name}</span>
        </div>
        <span className={`arrow ${menuOpen ? "open" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {menuOpen && (
        <ul className="language-menu" role="menu">
          {languages.map((lang) => (
            <li key={lang.code} role="none">
              <button
                type="button"
                onClick={() => handleChangeLanguage(lang.code)}
                className={`menu-item ${i18n.language === lang.code ? "selected" : ""}`}
                role="menuitem">
                  <img src={lang.flag} alt={lang.name} className="flag-option" />
                  <span className="lang-option-name">{lang.name}</span>
                  {i18n.language === lang.code && (
                    <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(LanguageSelector);