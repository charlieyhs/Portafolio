import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getInitialTheme } from "../utils/initialTheme";
import PropTypes from "prop-types";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.body.className = theme;
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