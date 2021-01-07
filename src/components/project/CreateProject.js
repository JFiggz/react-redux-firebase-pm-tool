import { useState } from 'react';

export default function CreateProject(){

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