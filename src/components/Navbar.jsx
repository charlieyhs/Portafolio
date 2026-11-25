import { useState } from "react";
import { useTranslation } from "react-i18next";
import { logo, whatsapp, whiteLogo } from "../assets/images";
import "../css/nav-bar.css";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { scrollBehavior } from "../utils/scroll";
import { getWhatsAppUrl } from "../data/personal";

const Navbar = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme } = useTheme();

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
        const offset = 50;

        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: scrollBehavior() });
        }
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <button
                        style={{ background: "transparent", border: "none" }}
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
                    </button>
                </div>

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
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Menú principal */}
                <ul id="main-menu" className={`nav-menu ${menuOpen ? "open" : ""}`}>
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
                    <li><LanguageSelector /></li>
                    <li><ThemeToggle /></li>

                    <li>
                        <a
                            href={getWhatsAppUrl(t("contact.whatsapp-message"))}
                            target="_blank"
                            className="button-theme"
                        >
                            <img
                                src={whatsapp}
                                alt={t("contact.alt-whatsapp")}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
