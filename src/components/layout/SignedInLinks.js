import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { useFirebase } from 'react-redux-firebase';

function SignedInLinks({signOutUser}){

    const firebase = useFirebase();

    const handleSignOut = () => {
        signOutUser(firebase);
    };

    return(
        <ul className='nav__link-list'>
            <li className='nav__list-item'>
                <NavLink to='/create' className='nav__link'>New Project</NavLink>
            </li>
            <li className='nav__list-item'>
                <button type="button" className='nav__link' onClick={() => handleSignOut()} >Log Out</button>
            </li>
            <li className='nav__list-item'>
                <NavLink to='/' className='nav__link'>JF</NavLink>
            </li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return({
        signOutUser: (firebase) => dispatch(signOut(firebase)),
    });
};

export default connect( null, mapDispatchToProps )(SignedInLinks);