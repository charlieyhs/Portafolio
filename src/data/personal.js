export const EMAIL = "carlossanchez25fasa@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/carlosyhs";
export const GITHUB_URL = "https://github.com/charlieyhs";
// El README del perfil de GitHub, que es el que ya enlazaba la sección de contacto
export const GITHUB_CONTACT_URL = "https://github.com/charlieyhs/Presentacion-Skills/blob/main/README.md";

const cel = "573213350998";
export const getWhatsAppUrl = (message) =>
    `https://wa.me/${cel}?text=${encodeURIComponent(message)}`;
