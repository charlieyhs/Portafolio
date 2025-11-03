import { useTranslation } from "react-i18next";
import { certifications } from "../../data/certifications";
import { useState } from "react";
import '../../css/certification.css'

const CertificationsSections = () => {
    
    const {t} = useTranslation();
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (certId, imageType) => {
        setImageErrors(prev => ({
            ...prev,
            [`${certId}-${imageType}`]: true
        }));
    };

    return (
        <section id="certification" className="certification-section"
            aria-labelledby="certification-title">
            <div className="section-header">
                <div className="section-label">{t('certification.label')}</div>
                <h2 id="certification-title" className="section-title">
                    {t('certification.title')}
                </h2>
            </div>

            <div className="cert-grid">
                {certifications.map(cert => {
                    const hasInstitution = cert.imgInstitution && !imageErrors[`${cert.id}-institution`];
                    const hasTitle = cert.imgTitle && !imageErrors[`${cert.id}-title`];
                    const imageCount = (hasInstitution ? 1 : 0) + (hasTitle ? 1 : 0);

                    return (
                        <div key={cert.id} className="cert-card">
                            <div className={`cert-icon cert-icon-count-${imageCount}`}>
                                {hasInstitution && (
                                    <div className="cert-icon_image-wrapper">
                                        <img 
                                            src={cert.imgInstitution} 
                                            alt={t(cert.altImgInstitution)}
                                            loading="lazy"
                                            onError={() => handleImageError(cert.id, 'institution')}
                                        />
                                    </div>
                                )}
                                {hasTitle && (
                                    <div className="cert-icon_image-wrapper">
                                        <img 
                                            src={cert.imgTitle} 
                                            alt={t(cert.altImgTitle)}
                                            loading="lazy"
                                            onError={() => handleImageError(cert.id, 'title')}
                                        />
                                    </div>
                                )}
                            </div>

                            <h3 className="cert-title">{t(cert.title)}</h3>
                            <p className="cert-issuer">{t(cert.institution)}</p>
                            <p className="cert-date">{t(cert.date)}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CertificationsSections;