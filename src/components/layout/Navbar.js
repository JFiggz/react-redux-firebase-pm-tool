import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function Navbar(){
    return(
        <header>
            <nav className='container nav'>
                <Link to='/' className='nav__logo-link'>Pro Manage</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </nav>
        </header>
    );
};