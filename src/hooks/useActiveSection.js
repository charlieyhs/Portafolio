import { useEffect, useState } from "react";

// Devuelve el id de la sección que está en la franja central de la pantalla.
export function useActiveSection(ids) {
    const [active, setActive] = useState("");

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) setActive(visible[0].target.id);
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids.join("|")]);

    return active;
}
