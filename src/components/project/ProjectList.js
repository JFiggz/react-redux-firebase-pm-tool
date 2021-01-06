export default function ProjectList(){
    return(
        <section className='projects'>
            <ul className='projects__list'>
                <li className='projects__list-item'>
                    <h2 className='projects__title'>Project Title 1</h2>
                    <p className='projects__text'>Posted by me!</p>
                    <p className='projects__text projects__text--date'>January 6th 2021</p>
                </li>
                <li className='projects__list-item'>
                    <h2 className='projects__title'>Project Title 2</h2>
                    <p className='projects__text'>Posted by me!</p>
                    <p className='projects__text projects__text--date'>January 6th 2021</p>
                </li>
                <li className='projects__list-item'>
                    <h2 className='projects__title'>Project Title 3</h2>
                    <p className='projects__text'>Posted by me!</p>
                    <p className='projects__text projects__text--date'>January 6th 2021</p>
                </li>
            </ul>
        </section>
    );
};