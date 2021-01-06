import { NavLink } from 'react-router-dom';

export default function SignedOutLinks(){
    return(
        <ul className='nav__link-list'>
            <li className='nav__list-item'>
                <NavLink to='/signup' className='nav__link'>Sign Up</NavLink>
            </li>
            <li className='nav__list-item'>
                <NavLink to='/signin' className='nav__link'>Sign In</NavLink>
            </li>
        </ul>
    );
};