import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./personal";

export const socialMedia = [
    {
        id: "linkedin",
        link : LINKEDIN_URL,
        icon : "linkedin",
        altIcon : "hero.alt-linkedin",
    },
    {
        id: "github",
        link : GITHUB_URL,
        icon : "github",
        altIcon : "hero.alt-github",
    },
    {
        id: "email",
        link : `mailto:${EMAIL}`,
        icon : "mail",
        altIcon : "hero.alt-email",
    }
]
