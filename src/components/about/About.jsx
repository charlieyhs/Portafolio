import { useTranslation } from "react-i18next";
import { highlights } from "../../data/about";
import '../../css/about.css'

const AboutMe = () => {
    const {t} = useTranslation();

    return (
        <section id="aboutme" className="section section-alt">
            <div className="section-inner about-content">
                <div className="about-text">
                    <div className="section-label">{t('about.label')}</div>
                    <h2 className="section-title">{t('about.about')}</h2>
                    <p>{t('about.text1')}</p>
                    <p>{t('about.text2')}</p>
                </div>

                <div className="code-window card" aria-hidden="true">
                    <div className="code-window-bar">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                        <span className="code-window-file">carlos.js</span>
                    </div>
                    <pre><code>
<span className="code-comment">{`// ${t('about.code-comment')}`}</span>{`
`}<span className="code-kw">const</span> <span className="code-var">carlos</span> = {`{
  `}<span className="code-prop">role</span>: <span className="code-str">&apos;Full Stack Developer&apos;</span>{`,
  `}<span className="code-prop">stack</span>: [<span className="code-str">&apos;Java&apos;</span>, <span className="code-str">&apos;Spring Boot&apos;</span>, <span className="code-str">&apos;React&apos;</span>, <span className="code-str">&apos;SQL&apos;</span>]{`,
  `}<span className="code-prop">location</span>: <span className="code-str">&apos;Colombia&apos;</span>{`,
  `}<span className="code-prop">learning</span>: [<span className="code-str">&apos;JUnit&apos;</span>, <span className="code-str">&apos;Golang&apos;</span>]{`,
  `}<span className="code-prop">fuel</span>: <span className="code-str">&apos;coffee&apos;</span>{`,
};

`}<span className="code-var">carlos</span>.<span className="code-fn">ship</span>(); <span className="code-comment">{`// ${t('about.code-stay')}`}</span>
                    </code></pre>
                </div>

                <div className="about-highlights">
                    {highlights.map(highlight => (
                        <div key={highlight.id} className="card">
                            <h3>{t(highlight.title)}</h3>
                            <p>{t(highlight.label)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
