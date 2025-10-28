import PropTypes from "prop-types";
import '../css/projects.css'

const Badge = ({name}) => {
    return (
        <span className="tech-badge">
            {name}
        </span>
    );
};

Badge.propTypes = {
    name : PropTypes.string.isRequired
};

export default Badge;