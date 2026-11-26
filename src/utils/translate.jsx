import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

import english from '../locales/english.json';
import spanish from '../locales/spanish.json';


const syncDocument = (lng) => {
    document.documentElement.lang = lng;
    document.documentElement.dir = i18n.dir(lng);
};

i18n.on('languageChanged', syncDocument);

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: english},
            es: {translation: spanish}
        },
        supportedLngs: ['es', 'en'],
        fallbackLng: 'es',
        detection: {
            // Primero la preferencia guardada, luego el idioma del navegador
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'selectedLanguage',
            caches: ['localStorage'],
            convertDetectedLanguage: (lng) => lng.split('-')[0],
        },
        interpolation: {
            escapeValue: false
        }
    });
