import '../styles/about.scss';
import Collapse from '../components/collapse';

function About() {

    const collapsesContent = {
        "Qui suis-je ?": "Cras erat mi, congue a cursus a, porttitor a tellus. Donec sodales lectus a dui porta elementum. Curabitur sed libero eu ante molestie sollicitudin eget ac odio. Fusce feugiat sodales mi, mattis hendrerit velit rhoncus sed. In ac ullamcorper erat. Ut at mauris odio. Cras quis purus vitae tellus fringilla accumsan. Vivamus et sapien in odio pulvinar pulvinar id eu lectus. Nunc et eros felis. Pellentesque mollis gravida lectus eu imperdiet. Nulla facilisi. Phasellus semper mauris vestibulum, vulputate dolor sed, fringilla elit. Praesent eget risus metus.",
        "Formations": "Curabitur id feugiat nunc. Nam accumsan diam quis aliquam dictum. Quisque volutpat quam sit amet lacus laoreet, vitae porttitor massa sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam dapibus hendrerit sodales. Quisque viverra lacus vitae massa maximus, id fermentum felis aliquam. Quisque malesuada sapien libero, nec accumsan metus tempor id. Donec euismod in est id tincidunt. Suspendisse varius ligula in erat vulputate tempor. Etiam convallis, risus et pretium imperdiet, turpis dui aliquet augue, et efficitur nisi massa ut mauris. Pellentesque id sem tincidunt, dapibus tortor sit amet, ultrices eros.",
        "Expériences professionnelles": "Etiam posuere eros id ligula fermentum, nec blandit diam faucibus. Mauris eu felis sem. Ut suscipit molestie nisl ut rhoncus. Fusce suscipit at dui quis cursus. Morbi ac dapibus ex, in vehicula elit. Nunc imperdiet, justo sed scelerisque dictum, justo ex elementum nunc, ac rhoncus odio risus vel turpis. Nam eleifend elementum vestibulum. Morbi justo nisl, sodales eu ultricies id, aliquam quis dolor. Pellentesque pharetra ex id arcu gravida, et mattis lacus porta."
    }

    return( 
        <main>
            <section className="about-collapses">
                {Object.keys(collapsesContent).map((collapseContent) => <Collapse key={collapseContent} title={collapseContent} content={collapsesContent[collapseContent]}></Collapse>)}
            </section>
        </main>
    )
}

export default About;