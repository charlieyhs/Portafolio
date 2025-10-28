import PropTypes from "prop-types";
import '../../css/projects.css'
import { useTranslation } from "react-i18next";
import Badge from "../Badge";

const ProjectCard = ({project}) => {
    const {t} = useTranslation();
    return (
        <div className="project-card">
            <div className="project-number">{project.id}</div>
            <h3 className="project-title">{t(project.name)}</h3>
            <p className="project-description"
                dangerouslySetInnerHTML={{ __html: t(project.description) }}>
            </p>
            <div className="project-tech">
                {project.skills.map(skill => (
                    <Badge key={skill.id} name={skill.name} />
                ))}
            </div>
            <a href={project.link} target="_blank" className="project-link">
                {t('projects.view-project')}
            </a>
        </div>
    );
};
const skillPropType = PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
});

const projectPropType = PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skills : PropTypes.arrayOf(skillPropType).isRequired,
    link : PropTypes.string.isRequired,
});

ProjectCard.propTypes = {
    project : projectPropType.isRequired,
};

export default ProjectCard;