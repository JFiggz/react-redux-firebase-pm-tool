import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import NotificationItem from './NotificationItem';


function NotificationList({notifications}){
    return(
        <aside className='notifications'>
            <h2 className='notifications__header'>Notifications</h2>
            <ul className='notifications__list'>
                {notifications ? notifications.map(notification => <NotificationItem key={notification.id} notification={notification} />) : <p className='notifications__text'>Loading notifications...</p>}
            </ul>
        </aside>
    );
};

const mapStateToProps = (state) => {
    return({
        notifications: state.firestore.ordered.notifications,
    });
};

export default compose(
    firestoreConnect([{collection: 'notifications', limit: 5, orderBy: ['createdOn','desc']}]),
    connect(mapStateToProps)
)(NotificationList);