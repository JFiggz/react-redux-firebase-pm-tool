import ProjectSummary from './ProjectSummary';

export default function ProjectList({projects}){
    return(
        <section className='projects'>
            <ul className='projects__list'>
                {projects ? projects.map(proj => {
                    return <ProjectSummary key={proj.id} id={proj.id} title={proj.title} poster="Jim" date="January 6th 2021" />
                }) 
                :
                    <h2 className='projects__title'>No Project Data</h2>
                }
            </ul>
        </section>
    );
};