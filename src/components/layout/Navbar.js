import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Navbar({auth, profile}){
    return(
        <header>
            <nav className='container nav'>
                <Link to='/' className='nav__logo-link'>Pro Manage</Link>
                {/* Only display signed in nav links if the user is signed in i.e. has a uid assign in the auth state */}
                {auth.uid ? 
                    <SignedInLinks initials={profile.initials} />
                :
                    <SignedOutLinks />
                }
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => {
    return({
        auth: state.firebase.auth,
        profile: state.firebase.profile
    });
};

export default connect(mapStateToProps)(Navbar);