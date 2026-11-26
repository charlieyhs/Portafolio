import { useTranslation } from 'react-i18next';
import { dark, light } from '../assets/images';
import '../css/ThemeToggle.css'
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
    const {t} = useTranslation();
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        // Solo se guarda cuando el usuario lo elige
        localStorage.setItem("theme", next);
        setTheme(next);
    };

    return (
        <button onClick={toggleTheme}
            className="button-theme">
            <img src={theme === "light" ? light : dark} alt={t('theme.alt')} />
        </button>
    );
};

export default ThemeToggle;