import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets/images';
import '../css/nav-bar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#inicio">
            <img
              src={logo}
              alt={t('navbar.logo-description')}
              title={t('navbar.logo-description')}
            />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t('navbar.close-menu') : 'navbar.open-menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menú principal */}
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#proyectos" className="nav-item" onClick={() => setMenuOpen(false)}>
            PROYECTOS
          </a>
          <a href="#experiencia" className="nav-item" onClick={() => setMenuOpen(false)}>
            EXPERIENCIA
          </a>
          <a href="#skills" className="nav-item" onClick={() => setMenuOpen(false)}>
            SKILLS
          </a>
          <a href="#contacto" className="nav-item" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
