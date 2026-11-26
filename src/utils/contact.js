export const MESSAGE_MAX = 500;
const MESSAGE_MIN = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Devuelve { campo: "clave.de.traduccion" } solo para los campos inválidos
export const validateContact = ({ name, email, message }) => {
    const errors = {};
    if (name.trim().length < 2) errors.name = "contact.error-name";
    if (!EMAIL_PATTERN.test(email.trim())) errors.email = "contact.error-email";
    const length = message.trim().length;
    if (length < MESSAGE_MIN) errors.message = "contact.error-message";
    else if (length > MESSAGE_MAX) errors.message = "contact.error-message-long";
    return errors;
};

// El sitio es estático (GitHub Pages): el formulario arma el correo y lo abre en la app del visitante
export const buildMailtoUrl = (to, { name, email, subject, message }, fallbackSubject) => {
    const params = new URLSearchParams({
        subject: subject.trim() || fallbackSubject,
        body: `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`,
    });
    // URLSearchParams codifica los espacios como "+", que mailto no interpreta
    return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
};

export const openMailClient = (url) => {
    window.location.href = url;
};
