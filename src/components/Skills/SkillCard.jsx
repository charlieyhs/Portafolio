import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Badge from "../Badge";

const SkillCard = ({skill}) => {
    const {t} = useTranslation();

    return (
        <div className="card">
            
            <img className="skill-icon" src={skill.icon} alt={t(skill.altIcon)}></img>
            

            <h3 className="skill-title">{t(skill.title)}</h3>

            <ul className="skill-list">
                {skill.skills.map(s => {
                    const name = skill.translatable ? t(s) : s;
                    return <li key={s}><Badge name={name} /></li>;
                })}
            </ul>
        </div>
    );
};

SkillCard.propTypes = {
    skill : PropTypes.shape({
        icon : PropTypes.string.isRequired,
        altIcon : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        translatable : PropTypes.bool,
        skills : PropTypes.arrayOf(PropTypes.string).isRequired
    })
};

export default SkillCard;