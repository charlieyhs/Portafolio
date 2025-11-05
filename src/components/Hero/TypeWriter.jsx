import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TypeWriter = ({texts, speed = 100, pause = 1000}) => {
    
    const [index, setIndex] = useState(0); // Frase actual
    const [subIndex, setSubIndex] = useState(0); // Letras
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[index];

        // Aún esá "escribiendo"
        if(!deleting && subIndex < currentText.length){
            const timeout = setTimeout(() => {
                setSubIndex(subIndex + 1);
            }, speed)

            return () => clearTimeout(timeout);
        }

        // Texto completo, esperar antes de borrar
        if(!deleting && subIndex === currentText.length){
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        }

        // Borrando el texto
        if(deleting && subIndex > 0){
            const timeout = setTimeout(()=> {
                setSubIndex(subIndex -1);
            }, speed / 2);
            return () => clearTimeout(timeout);
        }

        // Texto borrado completamente -> siguiente palabra
        if(deleting && subIndex === 0){
            setDeleting(false);
            setIndex((index+1)%texts.length);
        }        

    },[deleting, index, pause, speed, subIndex, texts]);

    return (
        <div className="typewriter">
            {texts[index].substring(0, subIndex)}
            <span className="cursor">|</span>
        </div>
    )

};

TypeWriter.propTypes = {
    texts : PropTypes.arrayOf(PropTypes.string).isRequired,
    speed : PropTypes.number,
    pause : PropTypes.number,
}

export default TypeWriter;