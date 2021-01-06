import React, { Component } from 'react';
import ProjectList from '../project/ProjectList';
import NotificationList from './NotificationList';

class Dashboard extends Component{
    render(){
        return(
            <main className='dashboard'>
                <div className="container">
                    <ProjectList />
                    <NotificationList />
                </div>
            </main>
        );
    }
};

export default Dashboard;