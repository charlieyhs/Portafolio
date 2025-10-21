import PropTypes from "prop-types";
import { LanguageContext } from "../context/LanguageContext";
import { useMemo, useState } from "react";

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('es');

    const contextValue = useMemo(() => 
        ({language, setLanguage})
    , [language]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children : PropTypes.node.isRequired,
}