import PropTypes from "prop-types";
import { Trans } from "react-i18next";

// Etiquetas permitidas dentro de las traducciones
const COMPONENTS = { ul: <ul />, li: <li />, strong: <strong /> };

const RichText = ({ i18nKey, className }) => (
    <div className={className}>
        <Trans i18nKey={i18nKey} components={COMPONENTS} />
    </div>
);

RichText.propTypes = {
    i18nKey : PropTypes.string.isRequired,
    className : PropTypes.string,
};

export default RichText;
