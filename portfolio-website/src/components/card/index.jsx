import "./style.scss";
import Slideshow from "../slideshow";
import { Link } from "react-router-dom";

function Card({srcPictures, cardTitle, link, projectDatas}) {

    return (
        <article className="card">
            <Link to={link} state={projectDatas}>
                <h3 className="project-title">{cardTitle}</h3>
            </Link>
                <Slideshow className="project-slideshow" pictures={srcPictures}></Slideshow>
        </article>
    )
}

export default Card;