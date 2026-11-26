import { useState } from "react";
import { useTranslation } from "react-i18next";
import { logo, whiteLogo } from "../assets/images";
import "../css/nav-bar.css";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollBehavior } from "../utils/scroll";
import { getWhatsAppUrl } from "../data/personal";

const SECTION_IDS = ["aboutme", "projects", "experience", "skills", "certification", "contact"];

const Navbar = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();
    const active = useActiveSection(SECTION_IDS);

    const menus = [
        { id: "1", label: t("navbar.aboutme"), href: "aboutme" },
        { id: "2", label: t("navbar.projects"), href: "projects" },
        { id: "3", label: t("navbar.experience"), href: "experience" },
        { id: "4", label: t("navbar.skills"), href: "skills" },
        { id: "5", label: t("navbar.certification"), href: "certification" },
        { id: "6", label: t("navbar.contact"), href: "contact" },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        const offset = 70;

        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: scrollBehavior() });
        }
    };

    return (
        <header>
            <nav>
                <button
                    className="logo"
                    onClick={() => {
                        handleScroll("hero");
                        setMenuOpen(false);
                    }}
                >
                    <img
                        src={theme === "light" ? logo : whiteLogo}
                        alt={t("navbar.logo-description")}
                        title={t("navbar.logo-description")}
                    />
                    <span className="logo-text" aria-hidden="true">
                        <span className="logo-code">&lt;/&gt;</span> charlieyhs.dev
                    </span>
                </button>

                {/* Botón hamburguesa */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="main-menu"
                    aria-label={
                        menuOpen
                            ? t("navbar.close-menu")
                            : t("navbar.open-menu")
                    }
                >
                    <Icon name={menuOpen ? "x" : "menu"} size={20} />
                </button>

                {/* Menú principal */}
                <ul id="main-menu" className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <li className="nav-links">
                        <ul>
                            {menus.map((menu) => (
                                <li key={menu.id}>
                                    <button
                                        className={`nav-item ${active === menu.href ? "active" : ""}`}
                                        aria-current={active === menu.href ? "true" : undefined}
                                        onClick={() => {
                                            handleScroll(menu.href);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        {menu.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="nav-tools">
                        <LanguageSelector />
                        <ThemeToggle />
                        <a
                            href={getWhatsAppUrl(t("contact.whatsapp-message"))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm nav-cta"
                        >
                            <Icon name="whatsapp" size={15} />
                            {t("navbar.talk")}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
