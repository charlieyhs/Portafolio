import { useTranslation } from "react-i18next";
import { email, github, linkedin, whatsapp } from "../../assets/images";
import '../../css/contact.css'
import { urlWhatsApp } from "../../data/personal";

const ContactSection = () => {
    
    const {t} = useTranslation();

    return (
        <section id="contact" className="section section-light">
            <h2 className="contact-tile">{t('contact.we-talk')}</h2>
            <p className="contact-subtitle">
                {t('contact.available')}
            </p>

            <div className="contact-links">
                <a href="mailto:carlossanchez25fasa@gmail.com" 
                    className="btn btn-contact">
                    <img src={email} alt={t('contact.alt-email')}></img>
                    {t('contact.email')}
                </a>

                <a href="https://www.linkedin.com/in/carlosyhs" 
                    target="_blank"
                    className="btn btn-contact">
                    <img src={linkedin} alt={t('contact.alt-linkedin')}></img>
                    {t('contact.linkedin')}
                </a>

                <a href="https://github.com/charlieyhs/Presentacion-Skills/blob/main/README.md" 
                    target="_blank"
                    className="btn btn-contact">
                    <img src={github} alt={t('contact.alt-github')}></img>
                    {t('contact.github')}
                </a>

                <a href={urlWhatsApp}
                    target="_blank"
                    className="btn btn-contact">
                    <img src={whatsapp} alt={t('contact.alt-whatsapp')}></img>
                    {t('contact.whatsapp')}
                </a>
            </div>
        </section>
    );
}

export default ContactSection;