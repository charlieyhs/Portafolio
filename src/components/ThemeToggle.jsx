import { useTranslation } from 'react-i18next';
import { dark, light } from '../assets/images';
import '../css/ThemeToggle.css'
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
    const {t} = useTranslation();
    const {theme, setTheme} = useTheme();

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="button-theme">
            <img src={theme === "light" ? light : dark} alt={t('theme.alt')} />
        </button>
    );
};

export default ThemeToggle;