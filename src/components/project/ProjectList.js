import ProjectSummary from './ProjectSummary';
import convertUNIX from '../../utils/convertUNIX';

export default function ProjectList({projects}){
    return(
        <section className='projects'>
            <ul className='projects__list'>
                {projects ? projects.map(proj => {
                    return <ProjectSummary key={proj.id} id={proj.id} title={proj.title} poster={`${proj.authorFirstName} ${proj.authorLastName}`} date={convertUNIX(proj.createdOn.toDate())} />
                })
                :
                    <h2 className='projects__title'>No Project Data</h2>
                }
            </ul>
        </section>
    );
};