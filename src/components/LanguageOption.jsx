import PropTypes from "prop-types";
import React from "react";

const LanguageOption = ({ lang, isActive, onSelect }) => (
    <li>
        <button
            type="button"
            onClick={() => onSelect(lang.code)}
            className={`menu-item ${isActive ? "selected" : ""}`}
        >
            <img src={lang.flag} alt={lang.name} className="flag-option" />
            <span className="lang-option-name">{lang.name}</span>
            {isActive && (
            <svg
                className="check-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                />
            </svg>
            )}
        </button>
    </li>
);
const LangPropType = PropTypes.shape({
    code: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
});

LanguageOption.propTypes = {
    lang : LangPropType.isRequired,
    isActive : PropTypes.bool,
    onSelect : PropTypes.func,
};


export default React.memo(LanguageOption);