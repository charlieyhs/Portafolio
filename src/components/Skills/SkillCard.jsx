import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SkillCard = ({skill}) => {
    const {t} = useTranslation();

    return (
        <div className="skill-category">
            
            <img className="skill-icon" src={skill.icon} alt={t(skill.altIcon)}></img>
            

            <h3 className="skill-title">{t(skill.title)}</h3>

            <p className="skill-list">
                {skill.skills.map(s => s )}
            </p>
        </div>
    );
};

SkillCard.propTypes = {
    skill : PropTypes.shape({
        icon : PropTypes.string.isRequired,
        altIcon : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        skills : PropTypes.arrayOf(PropTypes.string).isRequired
    })
};

export default SkillCard;