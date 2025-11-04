import { useTranslation } from 'react-i18next';
import '../../css/projects.css'
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    const {t} = useTranslation();

    return (
        <section className="section section-light" id="projects">
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

            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <a href="https://github.com/charlieyhs" target='_blank'
                    className='btn btn-secondary'>
                    {t('projects.see-more')}
                </a>
            </div>
        </section>
    );
}

export default ProjectsSection;