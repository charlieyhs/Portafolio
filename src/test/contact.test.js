import { describe, expect, it } from 'vitest';
import { buildMailtoUrl, MESSAGE_MAX, validateContact } from '../utils/contact';

const valid = { name: 'Ana Pérez', email: 'ana@empresa.com', message: 'Hola, me gustaría hablar de un proyecto.' };

describe('validateContact', () => {
    it('acepta datos válidos', () => {
        expect(validateContact(valid)).toEqual({});
    });

    it('marca nombre, correo y mensaje inválidos', () => {
        const errors = validateContact({ name: ' ', email: 'ana@invalido', message: 'corto' });
        expect(Object.keys(errors).sort()).toEqual(['email', 'message', 'name']);
    });

    it('rechaza mensajes de más de 500 caracteres', () => {
        const errors = validateContact({ ...valid, message: 'a'.repeat(MESSAGE_MAX + 1) });
        expect(errors.message).toBe('contact.error-message-long');
    });
});

describe('buildMailtoUrl', () => {
    it('codifica asunto y cuerpo, y usa el asunto por defecto si va vacío', () => {
        const url = buildMailtoUrl('yo@correo.com', { ...valid, subject: '' }, 'Contacto web');
        expect(url.startsWith('mailto:yo@correo.com?')).toBe(true);
        const params = new URLSearchParams(url.split('?')[1].replace(/%20/g, '+'));
        expect(params.get('subject')).toBe('Contacto web');
        expect(params.get('body')).toContain('Ana Pérez (ana@empresa.com)');
        expect(url).not.toContain('+');
    });
});
