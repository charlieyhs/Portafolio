import { useTranslation } from "react-i18next";
import '../../css/contact.css'
import { EMAIL, getWhatsAppUrl, GITHUB_CONTACT_URL, LINKEDIN_URL } from "../../data/personal";
import Icon from "../Icon";
import ContactForm from "./ContactForm";

const ContactSection = () => {

    const {t} = useTranslation();

    const links = [
        { id: "email", icon: "mail", label: t('contact.email'), value: EMAIL, href: `mailto:${EMAIL}` },
        { id: "linkedin", icon: "linkedin", label: t('contact.linkedin'), value: "linkedin.com/in/carlosyhs", href: LINKEDIN_URL },
        { id: "github", icon: "github", label: t('contact.github'), value: "github.com/charlieyhs", href: GITHUB_CONTACT_URL },
        { id: "whatsapp", icon: "whatsapp", label: t('contact.whatsapp'), value: t('contact.whatsapp-cta'), href: getWhatsAppUrl(t('contact.whatsapp-message')) },
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="section-inner contact-grid">
                <div className="contact-info">
                    <div className="section-label">{t('contact.label')}</div>
                    <h2 className="section-title">{t('contact.we-talk')}</h2>
                    <p className="contact-subtitle">
                        {t('contact.available')}
                    </p>

                    <ul className="contact-links">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}
                                    target={link.id === "email" ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className="card contact-link">
                                    <span className="contact-link-icon"><Icon name={link.icon} size={18} /></span>
                                    <span className="contact-link-text">
                                        <span className="mono-label">{link.label}</span>
                                        <span className="contact-link-value">{link.value}</span>
                                    </span>
                                    <Icon name="arrow-up-right" size={16} className="contact-link-arrow" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}

export default ContactSection;
