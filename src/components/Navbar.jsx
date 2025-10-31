import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { logo, whiteLogo } from '../assets/images';
import '../css/nav-bar.css';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme} = useTheme();

  const menus = [
    { id: '5', label: t('navbar.aboutme'), href: 'aboutme' },
    { id: '1', label: t('navbar.projects'), href: 'projects' },
    { id: '2', label: t('navbar.experience'), href: 'experience' },
    { id: '3', label: t('navbar.skills'), href: 'skills' },
    { id: '4', label: t('navbar.contact'), href: 'contact' },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <button style={{background: 'transparent', border: 'none'}}
            onClick={() => { handleScroll('hero'); setMenuOpen(false); }}>
            <img
              src={theme === "light" ? logo : whiteLogo}
              alt={t('navbar.logo-description')}
              title={t('navbar.logo-description')}
            />
          </button>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t('navbar.close-menu') : t('navbar.open-menu')}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menú principal */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                className="nav-item"
                onClick={() => {
                  handleScroll(menu.href);
                  setMenuOpen(false);
                }}
              >
                {menu.label}
              </button>
            </li>
          ))}
          <LanguageSelector />
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
