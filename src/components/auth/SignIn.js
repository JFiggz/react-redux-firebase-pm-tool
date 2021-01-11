import { useState } from 'react';
import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { signIn } from '../../store/actions/authActions';

function SignIn({signInUser, authError}){

    const firebase = useFirebase();

    const [data, updateData] = useState({
        email:'',
        password:'',
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
        signInUser(data, firebase);
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
                    <input className='signin__input' onChange={(e)=> handleChange(e)} type='password' name='password' placeholder="Enter your password" />
                </label>
                <button className='btn' type='submit'>Sign In</button>
                {authError ? <p className='signin__error'>No user found with those credentials, please try again.</p>: ''}
            </form>
        </section>
    );
};


const mapStateToProps = (state) => {
    return({
        authError: state.auth.authError,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        signInUser: (data, firebase) => dispatch(signIn(data, firebase)),
    });
};

export default connect( mapStateToProps, mapDispatchToProps )(SignIn);