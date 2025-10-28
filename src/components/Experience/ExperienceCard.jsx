import PropTypes from "prop-types";
import Badge from "../Badge";
import '../../css/experience.css';
import { useTranslation } from "react-i18next";

const ExperienceCard = ({experience}) => {
    const {t} = useTranslation();

    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <div className="experience-date">{t(experience.date)}</div>
                <h3 className="experience-title">{t(experience.position)}</h3>
                <div className="experience-company">{experience.company}</div>

                <p className="experience-description"
                    dangerouslySetInnerHTML={{ __html: t(experience.description) }}>
                </p>

                <div className="experience-tags">
                    {experience.skills.map(skill => (
                        <Badge key={skill.id} name={skill.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};
const skillPropType = PropTypes.shape({
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
});
const experiencePropType = PropTypes.shape({
    date : PropTypes.string.isRequired,
    position : PropTypes.string.isRequired,
    company : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skills : PropTypes.arrayOf(skillPropType)
});

ExperienceCard.propTypes = {
    experience : experiencePropType.isRequired,
}

export default ExperienceCard;