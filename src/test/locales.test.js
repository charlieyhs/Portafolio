import { describe, expect, it } from 'vitest';
import english from '../locales/english.json';
import spanish from '../locales/spanish.json';

const flatten = (obj, prefix = '') => Object.entries(obj).flatMap(([key, value]) =>
    typeof value === 'object' ? flatten(value, `${prefix}${key}.`) : [`${prefix}${key}`]
);

const sources = import.meta.glob(
    ['../components/**/*.jsx', '../data/*.js'],
    { query: '?raw', import: 'default', eager: true }
);

// Cadenas con forma de clave de traducción, p. ej. "skills.skill1.title"
const KEY_PATTERN = /["']([a-z][\w-]*(?:\.[\w-]+)+)["']/g;
const IGNORED = /\.(css|jsx?|json|webp|svg)$/;

describe('traducciones', () => {
    const esKeys = flatten(spanish);

    it('español e inglés tienen las mismas claves', () => {
        expect(flatten(english).sort()).toEqual([...esKeys].sort());
    });

    it('encuentra archivos fuente que revisar', () => {
        expect(Object.keys(sources).length).toBeGreaterThan(10);
    });

    it.each(Object.entries(sources))('%s solo usa claves existentes', (_, code) => {
        const used = [...code.matchAll(KEY_PATTERN)]
            .map(([, key]) => key)
            .filter((key) => !IGNORED.test(key));
        expect(used.filter((key) => !esKeys.includes(key))).toEqual([]);
    });
});
