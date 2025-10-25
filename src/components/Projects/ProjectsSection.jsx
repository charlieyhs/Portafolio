import { useTranslation } from 'react-i18next';
import '../../css/projects.css'
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    const {t} = useTranslation();

    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <div className="section-label">{t('projects.featured-work')}</div>
                <h2 className="section-title">{t('projects.selected-projects')}</h2>
            </div>
            <div className="projects-grid">
                {projects.map(project => ( 
                    <ProjectCard key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;