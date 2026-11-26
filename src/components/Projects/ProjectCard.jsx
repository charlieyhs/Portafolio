import PropTypes from "prop-types";
import '../../css/projects.css'
import { useTranslation } from "react-i18next";
import Badge from "../Badge";
import RichText from "../RichText";
import Icon from "../Icon";
import { projectPropType } from "./projectPropType";

const MAX_BADGES = 6;

const ProjectCard = ({project, onOpen}) => {
    const {t} = useTranslation();
    const hidden = project.skills.length - MAX_BADGES;

    return (
        <article className="card project-card">
            <div className="project-image">
                <img src={project.img}
                    alt={t(project.altImg)}
                    loading="lazy"
                />
                <span className={`project-status project-status-${project.status}`}>
                    <span className="status-dot" aria-hidden="true" />
                    {t(`projects.status-${project.status}`)}
                </span>
            </div>

            <div className="mono-label project-meta">
                {project.id} · {t(`projects.category-${project.category}`)}
            </div>
            <h3 className="project-title">{t(project.name)}</h3>
            <RichText className="project-description" i18nKey={project.description} />

            <div className="project-tech">
                {project.skills.slice(0, MAX_BADGES).map(skill => (
                    <Badge key={skill.id} name={skill.name} />
                ))}
                {hidden > 0 && <Badge name={`+${hidden}`} />}
            </div>

            <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary btn-sm">
                    {t('projects.view-project')}
                </a>

                {project.frontend && (
                    <a href={project.frontend} target="_blank" rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm">
                        <Icon name="github" size={14} />
                        {t('projects.frontend')}
                    </a>
                )}
                {project.backend && (
                    <a href={project.backend} target="_blank" rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm">
                        <Icon name="github" size={14} />
                        {t('projects.backend')}
                    </a>
                )}

                <button type="button"
                    className="project-detail-btn"
                    onClick={() => onOpen(project.id)}
                    aria-label={`${t('projects.view-detail')}: ${t(project.name)}`}>
                    {t('projects.view-detail')}
                    <Icon name="expand" size={14} />
                </button>
            </div>
        </article>
    );
};
ProjectCard.propTypes = {
    project : projectPropType.isRequired,
    onOpen : PropTypes.func.isRequired,
};

export default ProjectCard;
