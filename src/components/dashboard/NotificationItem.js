import setTime from '../../utils/setTime';

export default function NotificationItem({notification}){
    return(
        <li className='notifications__list-item'>
            <span>
                <p className='notifications__text notifications__text--name'>{`${notification.firstName} ${notification.lastName}`}</p>
                <p className='notifications__text'>{`${notification.type} a project`}</p>
            </span>
            <p className='notifications__text notifications__text--date'>{setTime(notification.createdOn)}</p>
        </li>
    );
};