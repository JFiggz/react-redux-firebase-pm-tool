import { NavLink } from 'react-router-dom';

export default function SignedInLinks(){
    return(
        <ul className='nav__link-list'>
            <li className='nav__list-item'>
                <NavLink to='/create' className='nav__link'>New Project</NavLink>
            </li>
            <li className='nav__list-item'>
                <NavLink to='/' className='nav__link'>Log Out</NavLink>
            </li>
            <li className='nav__list-item'>
                <p>JF</p>
            </li>
        </ul>
    );
};