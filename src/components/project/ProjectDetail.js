import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetail({project, match}){
    return project ? (
        <section className='container proj-detail'>
            <div className='proj-detail__container'>
                <h1 className='proj-detail__title'>{`${project.title} - ${match.params.id}`}</h1>
                <p className='proj-detail__details'>{project.details}</p>
                <p className='proj-detail__text'>{`Posted by ${project.authorFirstName} ${project.authorLastName}`}</p>
                <p className='proj-detail__text'>{project.createdOn.toDate().toLocaleDateString('en-US')}</p>
            </div>
        </section>
    )
    :
        <h1 className='container proj-detail__title'>Loading Project...</h1>;
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const fsProjects = state.firestore.data.projects;

    return fsProjects ? ({
        project: fsProjects[id],
    }) : null;

};

export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps)
)(ProjectDetail);