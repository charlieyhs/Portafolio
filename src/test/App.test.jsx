import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import i18n from 'i18next';
import '../utils/translate';
import App from '../App';
import { projects } from '../data/projects';

const mailMock = vi.hoisted(() => vi.fn());
vi.mock('../utils/contact', async (importOriginal) => ({
    ...(await importOriginal()),
    openMailClient: mailMock,
}));

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

    it('filtra los proyectos por categoría', () => {
        const { container } = render(<App />);
        expect(container.querySelectorAll('.project-card')).toHaveLength(projects.length);

        fireEvent.click(screen.getByRole('button', { name: /^Full Stack/ }));
        const fullstack = projects.filter((p) => p.category === 'fullstack');
        expect(container.querySelectorAll('.project-card')).toHaveLength(fullstack.length);
        expect(screen.getByRole('button', { name: /^Full Stack/ }).getAttribute('aria-pressed')).toBe('true');
    });

    it('abre el detalle de un proyecto, navega y lo cierra con Escape', () => {
        render(<App />);
        fireEvent.click(screen.getByRole('button', { name: /Ver detalle: Gimnasio Valhalla/ }));

        const dialog = screen.getByRole('dialog');
        expect(within(dialog).getByRole('heading', { name: 'Gimnasio Valhalla' })).toBeTruthy();
        expect(within(dialog).getByText(`1 / ${projects.length}`)).toBeTruthy();

        fireEvent.click(within(dialog).getByRole('button', { name: /Siguiente/ }));
        expect(within(dialog).getByRole('heading', { name: 'Fondo de ahorro' })).toBeTruthy();

        fireEvent.keyDown(document, { key: 'Escape' });
        expect(screen.queryByRole('dialog')).toBeNull();
    });

    describe('formulario de contacto', () => {
        beforeEach(() => mailMock.mockClear());

        it('muestra errores accesibles y no envía si hay campos inválidos', () => {
            render(<App />);
            fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

            expect(screen.getByRole('alert').textContent).toMatch(/Revisa los campos/);
            const email = screen.getByLabelText('Tu correo');
            expect(email.getAttribute('aria-invalid')).toBe('true');
            expect(email.getAttribute('aria-describedby')).toBe('contact-email-error');
            expect(mailMock).not.toHaveBeenCalled();
        });

        it('abre el correo con los datos y muestra el estado de éxito', () => {
            render(<App />);
            fireEvent.change(screen.getByLabelText('Tu nombre'), { target: { name: 'name', value: 'Ana Pérez' } });
            fireEvent.change(screen.getByLabelText('Tu correo'), { target: { name: 'email', value: 'ana@empresa.com' } });
            fireEvent.change(screen.getByLabelText('Mensaje'), { target: { name: 'message', value: 'Quiero hablar de un proyecto nuevo.' } });
            fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/ }));

            expect(mailMock).toHaveBeenCalledTimes(1);
            expect(mailMock.mock.calls[0][0]).toMatch(/^mailto:/);
            expect(screen.getByText(/Todo listo/)).toBeTruthy();

            fireEvent.click(screen.getByRole('button', { name: /Escribir otro mensaje/ }));
            expect(screen.getByLabelText('Tu nombre').value).toBe('');
        });
    });
});
