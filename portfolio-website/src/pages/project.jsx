import '../styles/project.scss';
import { useLocation } from 'react-router-dom';
import PlayerContainer from '../components/player';
import Slideshow from '../components/slideshow';

function Project() {
    const location = useLocation();
    const projectData = location.state;

    return( 
        <main>
            <h1 className='project-page-title'>{projectData.name}</h1>
            {projectData.description.map((description) => {
                return <section key={description.title} className='project-section'>
                    <div className="project-media-container">
                        {description.videos.length > 0 ? <PlayerContainer className="project-media" video={description.videos[0]}/> : <Slideshow className="project-media" pictures={description.pictures}/>}
                    </div>
                    <div className='project-description'>
                        <h2 className='description-title'>{description.time}</h2>
                        <p className='description-content'>{description.text}</p>
                    </div>
                </section>
            })}
        </main>
        )
    }
    
    export default Project;