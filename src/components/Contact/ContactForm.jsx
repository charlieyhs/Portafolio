import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import { buildMailtoUrl, MESSAGE_MAX, openMailClient, validateContact } from "../../utils/contact";
import { EMAIL, getWhatsAppUrl } from "../../data/personal";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const FIELDS = ["name", "email", "subject", "message"];

const ContactForm = () => {
    const { t } = useTranslation();
    const [values, setValues] = useState(EMPTY);
    const [touched, setTouched] = useState({});
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);

    const errors = validateContact(values);
    const visibleErrors = Object.fromEntries(
        Object.entries(errors).filter(([field]) => touched[field])
    );
    const errorCount = Object.keys(visibleErrors).length;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, subject: true, message: true });

        const firstInvalid = FIELDS.find((field) => errors[field]);
        if (firstInvalid) {
            formRef.current?.elements[firstInvalid]?.focus();
            return;
        }

        openMailClient(buildMailtoUrl(EMAIL, values, t("contact.default-subject")));
        setSent(true);
    };

    const reset = () => {
        setValues(EMPTY);
        setTouched({});
        setSent(false);
    };

    if (sent) {
        return (
            <div className="card contact-form contact-success" role="status">
                <div className="success-icon"><Icon name="check-circle" size={28} /></div>
                <h3>{t("contact.success-title")}</h3>
                <p>{t("contact.success-text", { email: EMAIL })}</p>
                <div className="contact-success-actions">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={reset}>
                        <Icon name="refresh" size={14} />
                        {t("contact.send-another")}
                    </button>
                    <a
                        className="btn btn-primary btn-sm"
                        href={getWhatsAppUrl(t("contact.whatsapp-message"))}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="whatsapp" size={14} />
                        {t("contact.whatsapp")}
                    </a>
                </div>
            </div>
        );
    }

    const fieldProps = (field) => ({
        id: `contact-${field}`,
        name: field,
        value: values[field],
        onChange: handleChange,
        onBlur: handleBlur,
        "aria-invalid": visibleErrors[field] ? "true" : "false",
        "aria-describedby": visibleErrors[field] ? `contact-${field}-error` : undefined,
    });

    const renderError = (field) =>
        visibleErrors[field] && (
            <p className="field-error" id={`contact-${field}-error`}>
                <Icon name="alert" size={13} />
                {t(visibleErrors[field])}
            </p>
        );

    return (
        <form className="card contact-form" onSubmit={handleSubmit} noValidate ref={formRef}>
            {errorCount > 0 && (
                <div className="form-alert" role="alert">
                    <Icon name="alert" size={16} />
                    {t("contact.error-summary")}
                </div>
            )}

            <div className="form-row">
                <div className="field">
                    <label htmlFor="contact-name">{t("contact.field-name")}</label>
                    <input type="text" autoComplete="name" placeholder={t("contact.placeholder-name")} {...fieldProps("name")} />
                    {renderError("name")}
                </div>
                <div className="field">
                    <label htmlFor="contact-email">{t("contact.field-email")}</label>
                    <input type="email" autoComplete="email" placeholder={t("contact.placeholder-email")} {...fieldProps("email")} />
                    {renderError("email")}
                </div>
            </div>

            <div className="field">
                <label htmlFor="contact-subject">{t("contact.field-subject")}</label>
                <input type="text" placeholder={t("contact.placeholder-subject")} {...fieldProps("subject")} />
            </div>

            <div className="field">
                <label htmlFor="contact-message">{t("contact.field-message")}</label>
                <textarea rows={5} placeholder={t("contact.placeholder-message")} {...fieldProps("message")} />
                <div className="field-foot">
                    {renderError("message") || <span />}
                    <span className={`field-counter ${values.message.length > MESSAGE_MAX ? "over" : ""}`}>
                        {values.message.length} / {MESSAGE_MAX}
                    </span>
                </div>
            </div>

            <div className="form-actions">
                <p className="form-note">{t("contact.form-note")}</p>
                <button type="submit" className="btn btn-primary">
                    {t("contact.send")}
                    <Icon name="send" size={15} />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
