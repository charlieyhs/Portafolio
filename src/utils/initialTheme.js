// El tema guardado manda; si no existe, se respeta el del sistema
export const getInitialTheme = () =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
