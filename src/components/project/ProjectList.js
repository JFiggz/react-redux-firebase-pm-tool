import ProjectSummary from './ProjectSummary';

export default function ProjectList({projects}){
    return(
        <section className='projects'>
            <ul className='projects__list'>
                {projects ? projects.map(proj => {
                    return <ProjectSummary key={proj.id} id={proj.id} title={proj.title} poster={`${proj.authorFirstName} ${proj.authorLastName}`} date={proj.createdOn.toDate().toLocaleDateString('en-US')} />
                })
                :
                    <h2 className='projects__title'>No Project Data</h2>
                }
            </ul>
        </section>
    );
};