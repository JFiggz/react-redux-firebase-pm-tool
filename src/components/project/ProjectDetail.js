import { connect } from 'react-redux';

function ProjectDetail({project}){

    return project && (
        <section className='container proj-detail'>
            <div className='proj-detail__container'>
                <h1 className='proj-detail__title'>Project - {project.id}</h1>
                <p className='proj-detail__details'>{project.details}</p>
                <p className='proj-detail__text'>Posted by Jim</p>
                <p className='proj-detail__text'>Jan 6, 2021</p>
            </div>
        </section>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    return({
        project: state.project.projects.filter(proj => proj.id === id)[0],
    });

};

export default connect(mapStateToProps)(ProjectDetail);