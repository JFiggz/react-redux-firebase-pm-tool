import React, { Component } from 'react';
import ProjectList from '../project/ProjectList';
import NotificationList from './NotificationList';

class Dashboard extends Component{
    render(){
        return(
            <main className='container dashboard'>
                    <NotificationList />
                    <ProjectList />
            </main>
        );
    }
};

export default Dashboard;