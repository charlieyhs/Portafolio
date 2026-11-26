import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// jsdom no implementa matchMedia
window.matchMedia = vi.fn();

beforeEach(() => {
    localStorage.clear();
    window.matchMedia.mockImplementation((query) => ({ matches: false, media: query }));
});

afterEach(cleanup);
