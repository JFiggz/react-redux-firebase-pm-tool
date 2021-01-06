export default function NotificationList(){
    return(
        <aside className='notifications'>
            <h2 className='notifications__header'>Notifications</h2>
            <ul className='notifications__list'>
                <li className='notifications__list-item'>
                     <p className='notifications__text notifications__text--name'>Jim Figs</p>
                    <p className='notifications__text'>Added a new project</p>
                    <p className='notifications__text notifications__text--date'>A few seconds ago</p>
                </li>
                <li className='notifications__list-item'>
                     <p className='notifications__text notifications__text--name'>Jim Figs</p>
                    <p className='notifications__text'>Added a new project</p>
                    <p className='notifications__text notifications__text--date'>A minute ago</p>
                </li>
                <li className='notifications__list-item'>
                     <p className='notifications__text notifications__text--name'>Jim Figs</p>
                    <p className='notifications__text'>Added a new project</p>
                    <p className='notifications__text notifications__text--date'>4 days ago</p>
                </li>
            </ul>
        </aside>
    );
};