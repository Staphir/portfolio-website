import "./style.scss";
import Slideshow from "../slideshow";

function Card({srcPictures, cardTitle, link}) {

    return (
        <article className="card">
            {/* <a href={link}> */}
                <h3 className="project-title">{cardTitle}</h3>
                <Slideshow className="project-slideshow" pictures={srcPictures}></Slideshow>
            {/* </a> */}
        </article>
    )
}

export default Card;