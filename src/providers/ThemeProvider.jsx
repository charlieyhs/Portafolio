import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import PropTypes from "prop-types";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        // Se usa el tema guardado en caso de que exista
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme])

    const value = useMemo(() => 
        ({theme, setTheme})
    , [theme]);
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children : PropTypes.node.isRequired,
};

export default ThemeProvider;