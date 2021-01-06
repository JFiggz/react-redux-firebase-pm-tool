import { useState } from 'react';

export default function SignUp(){

    const [data, updateData] = useState({
        email:'',
        pwd:'',
        fName:'',
        lName:'',
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
        <section className='container signup'>
            <form className='signup__form' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='signup__header'>Sign Up</h1>
                <label className='signup__label' >
                    Email
                    <input className='signup__input' onChange={(e)=> handleChange(e)} type='email' name='email' placeholder="Enter your email" />
                </label>
                <label className='signup__label' >
                    Password
                    <input className='signup__input' onChange={(e)=> handleChange(e)} type='password' name='pwd' placeholder="Enter your password" />
                </label>
                <label className='signup__label' >
                    First Name
                    <input className='signup__input' onChange={(e)=> handleChange(e)} type='text' name='fName' placeholder="Enter your first name" />
                </label>
                <label className='signup__label' >
                    Last Name
                    <input className='signup__input' onChange={(e)=> handleChange(e)} type='text' name='lName' placeholder="Enter your last name" />
                </label>
                <button className='btn' type='submit'>Sign Up</button>
            </form>
        </section>
    );
};