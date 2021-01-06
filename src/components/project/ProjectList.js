import ProjectSummary from './ProjectSummary';

export default function ProjectList(){
    return(
        <section className='projects'>
            <ul className='projects__list'>
                <ProjectSummary id="1" title='Project Title 1' poster="Jim" date="January 6th 2021" />
                <ProjectSummary id="2" title='Project Title 2' poster="Jim" date="January 6th 2021" />
                <ProjectSummary id="3" title='Project Title 3' poster="Jim" date="January 6th 2021" />
                <ProjectSummary id="4" title='Project Title 4' poster="Jim" date="January 6th 2021" />
            </ul>
        </section>
    );
};