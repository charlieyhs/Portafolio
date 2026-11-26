import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Badge from "../Badge";
import Icon from "../Icon";
import RichText from "../RichText";
import { projectPropType } from "./projectPropType";

const ProjectModal = ({ project, position, total, onClose, onPrev, onNext }) => {
    const { t } = useTranslation();
    const closeRef = useRef(null);
    const dialogRef = useRef(null);

    // Foco al abrir, scroll bloqueado y foco devuelto al cerrar
    useEffect(() => {
        const previous = document.activeElement;
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbar}px`;
        closeRef.current?.focus();
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            previous?.focus?.();
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();

            // Atrapa el foco dentro del diálogo
            if (e.key === "Tab" && dialogRef.current) {
                const focusables = dialogRef.current.querySelectorAll(
                    'a[href], button:not([disabled])'
                );
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose, onPrev, onNext]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                ref={dialogRef}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-top">
                    <span className="mono-label">
                        {project.id} · {t(`projects.category-${project.category}`)}
                    </span>
                    <button
                        type="button"
                        ref={closeRef}
                        className="modal-close"
                        onClick={onClose}
                        aria-label={t("projects.close")}
                    >
                        <Icon name="x" size={18} />
                    </button>
                </div>

                <div className="modal-body">
                    <img
                        className="modal-image"
                        src={project.img}
                        alt={t(project.altImg)}
                    />
                    <span className={`project-status project-status-${project.status}`}>
                        <span className="status-dot" aria-hidden="true" />
                        {t(`projects.status-${project.status}`)}
                    </span>
                    <h3 id="project-modal-title" className="modal-title">
                        {t(project.name)}
                    </h3>
                    <RichText className="project-description modal-description" i18nKey={project.description} />

                    <div className="modal-group">
                        <div className="mono-label">{t("projects.technologies")}</div>
                        <div className="project-tech">
                            {project.skills.map((skill) => (
                                <Badge key={skill.id} name={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className="modal-group">
                        <div className="mono-label">{t("projects.links")}</div>
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary btn-sm">
                                {t("projects.view-project")}
                            </a>
                            {project.frontend && (
                                <a href={project.frontend} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-secondary btn-sm">
                                    <Icon name="github" size={14} />
                                    {t("projects.frontend")}
                                </a>
                            )}
                            {project.backend && (
                                <a href={project.backend} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-secondary btn-sm">
                                    <Icon name="github" size={14} />
                                    {t("projects.backend")}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {total > 1 && (
                    <div className="modal-nav">
                        <button type="button" className="btn btn-secondary btn-sm" onClick={onPrev}>
                            <Icon name="arrow-left" size={14} />
                            {t("projects.previous")}
                        </button>
                        <span className="modal-counter">{position} / {total}</span>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={onNext}>
                            {t("projects.next")}
                            <Icon name="arrow-right" size={14} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

ProjectModal.propTypes = {
    project: projectPropType.isRequired,
    position: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default ProjectModal;
