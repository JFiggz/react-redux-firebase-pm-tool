import { Link } from 'react-router-dom';

export default function ProjectSummary({id, title, poster, date}){
    return(
        <li className='projects__list-item'>
            <Link to={`/project/${id}`} className='projects__link'>
                <h2 className='projects__title'>{title}</h2>
                <p className='projects__text'>Posted by: {poster}</p>
                <p className='projects__text projects__text--date'>{date}</p>
            </Link>
        </li>
    );
};