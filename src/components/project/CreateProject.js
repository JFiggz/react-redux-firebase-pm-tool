import { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projActions';
import { useHistory } from 'react-router-dom';

function CreateProject({createProj}){

    const history = useHistory();

    const [data, updateData] = useState({
        title:'',
        details:'',
    });

    const handleChange = (e) => {
        const name = e.target.name;

        updateData({
            ...data,
            [name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createProj(data);
        history.push('/');
    };

    return(
        <section className='container create-proj'>
            <form className='create-proj__form' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='create-proj__header'>Create New Project</h1>
                <label className='create-proj__label' >
                    Title
                    <input className='create-proj__input' onChange={(e)=> handleChange(e)} type='text' name='title' placeholder="Enter the title of the project" />
                </label>
                <label className='create-proj__label' >
                    Project Details
                    <textarea className='create-proj__details' onChange={(e)=> handleChange(e)} type='text' name='details' placeholder="Enter project details" cols='30' row='30'></textarea>
                </label>
                <button className='btn' type='submit'>Create Project</button>
            </form>
        </section>
    );
};


const mapDispatchToProps = (dispatch) => {
    return({
        createProj: (project) => dispatch(createProject(project)),
    });
};

export default connect(null, mapDispatchToProps)(CreateProject);