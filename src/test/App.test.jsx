import { beforeEach, describe, expect, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import i18n from 'i18next';
import '../utils/translate';
import App from '../App';

describe('App', () => {
    beforeEach(async () => {
        await act(() => i18n.changeLanguage('es'));
    });

    it('traduce la página y el atributo lang al cambiar de idioma', async () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Habilidades blandas' })).toBeTruthy();
        expect(screen.getByRole('heading', { name: 'Herramientas' })).toBeTruthy();

        await act(() => i18n.changeLanguage('en'));

        expect(screen.getByRole('heading', { name: 'Soft skills' })).toBeTruthy();
        expect(document.documentElement.lang).toBe('en');
        expect(localStorage.getItem('selectedLanguage')).toBe('en');
    });

    it('muestra el formato de las descripciones como HTML', () => {
        const { container } = render(<App />);
        expect(container.querySelectorAll('.experience-description ul > li')).toHaveLength(10);
        expect(container.querySelector('.experience-description strong')).toBeTruthy();
        expect(container.textContent).not.toMatch(/<\/?(ul|li|strong)>/);
    });

    it('usa el tema del sistema y solo lo guarda cuando el usuario lo cambia', () => {
        window.matchMedia.mockImplementation((query) => ({ matches: query.includes('dark') }));
        render(<App />);
        expect(document.body.className).toBe('dark');
        expect(localStorage.getItem('theme')).toBeNull();

        fireEvent.click(screen.getByRole('button', { name: /tema oscuro o claro/ }));
        expect(document.body.className).toBe('light');
        expect(localStorage.getItem('theme')).toBe('light');
    });
});
