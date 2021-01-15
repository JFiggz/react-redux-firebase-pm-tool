import { connect } from 'react-redux';
import { firestoreConnect, useFirestore} from 'react-redux-firebase';
import { compose } from 'redux';
import DeleteIcon from '../../assets/icons/delete.svg';
import EditIcon from '../../assets/icons/edit.svg';
import { deleteProject } from '../../store/actions/projActions';
import { editProject } from '../../store/actions/projActions';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import convertUNIX from '../../utils/convertUNIX';

function ProjectDetail({project, deleteProj, editProj}){

    const history = useHistory();
    const firestore = useFirestore();

    const [editMode, changeMode] = useState(false);

    const [data, updateData] = useState({
        title: '',
        details: '',
    });

    const triggerEdit = () => {
        changeMode(true);
        updateData({
            title: project.title,
            details: project.details,
        });
    };

    const handleChange = (e) => {
        const name = e.target.name;

        updateData({
            ...data,
            [name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editProj(project.id, data, firestore);
        changeMode(false);
    };

    const handleDelete = () => {
        const id = project.id;
        deleteProj(id, firestore, history);
    };

    return project ? (
        <section className='container proj-detail'>
            <div className='proj-detail__container'>
                <span className='proj-detail__action-container'>
                    {!editMode ? <button type='button' className='proj-detail__btn' onClick={() => triggerEdit()} ><img src={EditIcon} alt='Edit project icon' className='proj-detail__icon' /></button> : ''}
                    <button type='button' className='proj-detail__btn' onClick={() => editMode ? changeMode(false) : handleDelete()} ><img src={DeleteIcon} alt='Delete project icon' className='proj-detail__icon' /></button>
                </span>
            {editMode ? 
                <form className='proj-detail__form' onSubmit={(e) => handleSubmit(e)}>
                    <label className='proj-detail__label' >
                        Title
                        <input className='proj-detail__input' onChange={(e)=> handleChange(e)} type='text' name='title' placeholder="Enter the title of the project" value={data.title} />
                    </label>
                    <label className='proj-detail__label' >
                        Project Details
                        <textarea className='proj-detail__txt-area' onChange={(e)=> handleChange(e)} type='text' name='details' placeholder="Enter project details" cols='30' row='30' value={data.details} ></textarea>
                    </label>
                    <button className='btn proj-detail__edit-btn' type='submit'>Submit Edit</button>
                </form>
            :
                <>
                    <h1 className='proj-detail__title'>{`${project.title} - ${project.id}`}</h1>
                    <p className='proj-detail__details'>{project.details}</p>
                </>
            }
                <p className='proj-detail__text'>{`Posted by: ${project.authorFirstName} ${project.authorLastName}`}</p>
                <p className='proj-detail__text'>{convertUNIX(project.createdOn.toDate())}</p>
            </div>
        </section>
    )
    :
        <h1 className='container proj-detail__title'>Loading Project...</h1>;
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const fsProjects = state.firestore.ordered.projects;

    return fsProjects ? ({
        project: fsProjects.filter(proj => proj.id === id)[0],
    }) : {};

};

const mapDispatchToProps = (dispatch) => {
    return({
        deleteProj: (id, firestore, history) => dispatch(deleteProject(id, firestore, history)),
        editProj: (projectId, project, firestore) => dispatch(editProject(projectId, project, firestore)),
    });
};

export default compose(
    firestoreConnect([{collection: 'projects'}]),
    connect( mapStateToProps, mapDispatchToProps )
)(ProjectDetail);