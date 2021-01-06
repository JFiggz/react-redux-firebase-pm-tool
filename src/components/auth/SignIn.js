import { useState } from 'react';

export default function SignIn(){

    const [data, updateData] = useState({
        email:'',
        pwd:'',
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
        <section className='container signin'>
            <form className='signin__form' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='signin__header'>Sign In</h1>
                <label className='signin__label' >
                    Email
                    <input className='signin__input' onChange={(e)=> handleChange(e)} type='email' name='email' placeholder="Enter your email" />
                </label>
                <label className='signin__label' >
                    Password
                    <input className='signin__input' onChange={(e)=> handleChange(e)} type='password' name='pwd' placeholder="Enter your password" />
                </label>
                <button className='btn' type='submit'>Sign In</button>
            </form>
        </section>
    );
};