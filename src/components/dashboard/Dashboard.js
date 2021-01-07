import React, { Component } from 'react';
import ProjectList from '../project/ProjectList';
import NotificationList from './NotificationList';
import { connect } from 'react-redux';

class Dashboard extends Component{
    render(){
        return(
            <main className='container dashboard'>
                    <NotificationList />
                    <ProjectList projects={this.props.projects} />
            </main>
        );
    }
};

const mapStateToProps = (state) => {
    return ({
        projects: state.project.projects,
    });
};

export default connect(mapStateToProps)(Dashboard);