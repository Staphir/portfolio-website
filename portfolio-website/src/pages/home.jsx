import '../styles/home.scss';
import getAllData from '../database/tools';
import { useEffect, useState } from 'react';
import Card from '../components/card';

function Home() {
    
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getAllData().then((response) => {
            setDatas(response.projects);
        });
    }, []);
    
    return( 
        <main>
            <section className='projects-section'>
                {datas.map((project) => {
                    return <Card key={project.id} srcPictures={project.cover} cardTitle={project.name} link={'project/' + project.id} projectDatas={project}></Card>
                })}
            </section>
        </main>
        )
    }
    
    export default Home;