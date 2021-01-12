import React, { Component } from 'react';
import ProjectList from '../project/ProjectList';
import NotificationList from './NotificationList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
        projects: state.firestore.ordered.projects,
    });
};

export default compose(
    firestoreConnect([{collection: 'projects', orderBy: ['createdOn','desc']}]),
    connect(mapStateToProps)
)(Dashboard);