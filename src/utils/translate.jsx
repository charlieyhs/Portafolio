import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

import english from '../locales/english.json';
import spanish from '../locales/spanish.json';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: english},
            es: {translation: spanish}
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });
