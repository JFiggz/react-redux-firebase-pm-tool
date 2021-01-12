import { useState } from 'react';
import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { signUp } from '../../store/actions/authActions';

function SignUp({signUpUser, authError, errMessage}){

    const firebase = useFirebase();

    const [data, updateData] = useState({
        email:'',
        password:'',
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
        signUpUser(data, firebase);
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
                    <input className='signup__input' onChange={(e)=> handleChange(e)} type='password' name='password' placeholder="Enter your password" />
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
                {authError ? <p className='signin__error'>{errMessage}</p>: ''}
            </form>
        </section>
    );
};

const mapStateToProps = (state) => {
    return({
        authError: state.auth.authError,
        errMessage: state.auth.errMessage,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        signUpUser: (userData, firebase) => dispatch(signUp(userData, firebase)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);