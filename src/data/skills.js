import { backend, bd, devops, frontend } from "../assets/images";

export const skills = [
    {
        id : "01",
        icon : frontend,
        altIcon : "skill.skill1.alt-icon",
        title : "skills.skill1.title",
        skills : [
            "React · ", "Primefaces · ", "HTML5 · ", "CSS3 · ", "JavaScript · ", 
            "XHTML · ", "2+",
        ]
    },
    {
        id : "02",
        icon : backend,
        altIcon : "skill.skill2.alt-icon",
        title : "skills.skill2.title",
        skills : [
            "Java EE · ", "Spring · ", "Spring boot · ", "Restful · ", "APIs · ",
             "JavaScript · ", "JWT · ", "OAuth 2.0 · ", "5+",
        ]
    },
    {
        id : "03",
        icon : bd,
        altIcon : "skill.skill2.alt-icon",
        title : "skills.skill3.title",
        skills : [
            "MySQL · ", "SQL Server",
        ]
    },
    {
        id : "04",
        icon : devops,
        altIcon : "skill.skill4.alt-icon",
        title : "skills.skill4.title",
        skills : [
            "Docker · ", "Git · ", "CI/CD · ", "Linux · ", "AWS",
        ]
    }

]
