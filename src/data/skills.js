import { backend, bd, devops, frontend, softSkills, tools } from "../assets/images";

export const skills = [
    {
        id : "01",
        icon : frontend,
        altIcon : "skills.skill1.alt-icon",
        title : "skills.skill1.title",
        skills : [
            "React", "Primefaces", "HTML5", "CSS3", "JavaScript", "XHTML", "2+",
        ]
    },
    {
        id : "02",
        icon : backend,
        altIcon : "skills.skill2.alt-icon",
        title : "skills.skill2.title",
        skills : [
            "Java EE", "Spring", "Spring boot", "Restful", "APIs", "JavaScript", "JWT", "OAuth 2.0", "5+",
        ]
    },
    {
        id : "03",
        icon : bd,
        altIcon : "skills.skill3.alt-icon",
        title : "skills.skill3.title",
        skills : [
            "MySQL", "SQL Server",
        ]
    },
    {
        id : "04",
        icon : devops,
        altIcon : "skills.skill4.alt-icon",
        title : "skills.skill4.title",
        skills : [
            "Docker", "Git", "CI/CD", "Linux", "Azure", "AWS",
        ]
    },
    {
        id : "05",
        icon : softSkills,
        altIcon : "skills.skill5.alt-icon",
        title : "skills.skill5.title",
        translatable : true,
        skills : [
            "skills.soft.leadership", "skills.soft.communication", "skills.soft.teamwork", "skills.soft.problem-solving",
        ]
    },
    {
        id : "06",
        icon : tools,
        altIcon : "skills.skill6.alt-icon",
        title : "skills.skill6.title",
        skills : [
            "IntelliJ IDEA", "VS Code", "MyEclipse", "Postman", "JasperSoft",
        ]
    },
]
export const learning = ["skills.learning1","skills.learning2", "skills.learning3"]
