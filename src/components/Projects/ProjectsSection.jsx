import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/projects.css'
import { projects } from '../../data/projects';
import { GITHUB_URL } from '../../data/personal';
import Icon from '../Icon';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Solo se muestran los filtros que tienen al menos un proyecto
const FILTERS = ["all", ...new Set(projects.map((p) => p.category))];

const ProjectsSection = () => {
    const {t} = useTranslation();
    const [filter, setFilter] = useState("all");
    const [openId, setOpenId] = useState(null);

    const visible = projects.filter((p) => filter === "all" || p.category === filter);
    const openIndex = visible.findIndex((p) => p.id === openId);

    const close = useCallback(() => setOpenId(null), []);
    const move = useCallback((step) => {
        setOpenId((current) => {
            const index = visible.findIndex((p) => p.id === current);
            if (index === -1) return current;
            return visible[(index + step + visible.length) % visible.length].id;
        });
    }, [visible]);
    const prev = useCallback(() => move(-1), [move]);
    const next = useCallback(() => move(1), [move]);

    return (
        <section className="section" id="projects">
            <div className="section-header">
                <div className="section-label">{t('projects.featured-work')}</div>
                <h2 className="section-title">{t('projects.selected-projects')}</h2>
            </div>

            <div className="section-inner">
                <div className="project-filters" role="group" aria-label={t('projects.filters')}>
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            type="button"
                            className={`filter-chip ${filter === f ? "active" : ""}`}
                            aria-pressed={filter === f}
                            onClick={() => setFilter(f)}
                        >
                            {t(`projects.filter-${f}`)}
                            <span className="filter-count">
                                {f === "all" ? projects.length : projects.filter((p) => p.category === f).length}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {visible.map(project => (
                        <ProjectCard key={project.id}
                            project={project}
                            onOpen={setOpenId}
                        />
                    ))}
                </div>

                <div className="projects-more">
                    <a href={GITHUB_URL} target='_blank' rel="noopener noreferrer"
                        className='btn btn-secondary'>
                        <Icon name="github" size={15} />
                        {t('projects.see-more')}
                    </a>
                </div>
            </div>

            {openIndex !== -1 && (
                <ProjectModal
                    project={visible[openIndex]}
                    position={openIndex + 1}
                    total={visible.length}
                    onClose={close}
                    onPrev={prev}
                    onNext={next}
                />
            )}
        </section>
    );
}

export default ProjectsSection;
