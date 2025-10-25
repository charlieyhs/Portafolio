import PropTypes from "prop-types";
import '../../css/projects.css'

const ProjectBadge = ({name}) => {
    return (
        <span className="tech-badge">
            {name}
        </span>
    );
};

ProjectBadge.propTypes = {
    name : PropTypes.string.isRequired
};

export default ProjectBadge;