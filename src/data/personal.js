const cel = "573213350998";
export const getWhatsAppUrl = (message) =>
    `https://wa.me/${cel}?text=${encodeURIComponent(message)}`;
