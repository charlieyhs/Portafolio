import PropTypes from "prop-types";

const skillPropType = PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
});

export const projectPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(skillPropType).isRequired,
    link: PropTypes.string.isRequired,
    frontend: PropTypes.string,
    backend: PropTypes.string,
    altImg: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
});
