export const createProject = (project, firestore) => {
    return((dispatch, getState)=>{

        const userData = getState().firebase;
        
        //Making an async call to add the data to the Firestore DB prior to changing state in store
        firestore.add(
            {
                collection: 'projects'
            },
            {
            ...project,
            authorFirstName: userData.profile.firstName,
            authorLastName: userData.profile.lastName,
            authorId: userData.auth.uid,
            createdOn: new Date(),
            },
        )
        .then(resp => {

            //Add a notification to the notification collection in Firestore reflecting this event
            const notificationObj = {
                firstName: userData.profile.firstName,
                lastName: userData.profile.lastName,
                authorId: userData.auth.uid,
                createdOn: new Date(),
                type: 'Added',
            };

            firestore.add(
                {
                    collection: 'notifications'
                },
                notificationObj
            )
            .then( resp => { 
                dispatch({
                    type: 'CREATE_NOTIFICATION',
                    notification: notificationObj,
                });
            });

            dispatch({
                type: 'CREATE_PROJECT',
                project,
            });
        })
        .catch(err => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            });
        });
    });
};


export const deleteProject = (projectId, firestore) => {
    return ((dispatch, getState) => {

        const userData = getState().firebase;

        firestore.delete(
            {
                collection: 'projects',
                doc: projectId
            },
        )
        .then(resp => {
            
            //Add a notification to the notification collection in Firestore reflecting this event
            const notificationObj = {
                firstName: userData.profile.firstName,
                lastName: userData.profile.lastName,
                authorId: userData.auth.uid,
                createdOn: new Date(),
                type: 'Deleted',
            };

            firestore.add(
                {
                    collection: 'notifications'
                },
                notificationObj
            )
            .then( resp => { 
                dispatch({
                    type: 'CREATE_NOTIFICATION',
                    notification: notificationObj,
                });
            });

            dispatch({
                type: 'DELETE_PROJECT',
                projectId
            });
        })
        .catch(err => {
            dispatch({
                type: 'DELETE_PROJECT_ERROR',
                err
            });
        });
    });
};

export const editProject = (projectId, project, firestore) => {
    return((dispatch, getState) => {

        const userData = getState().firebase;

        firestore.update(
            {
                collection: 'projects',
                doc: projectId
            },
            {
                ...project
            }
        )
        .then( resp => {

            //Add a notification to the notification collection in Firestore reflecting this event
            const notificationObj = {
                firstName: userData.profile.firstName,
                lastName: userData.profile.lastName,
                authorId: userData.auth.uid,
                createdOn: new Date(),
                type: 'Edited',
            };

            firestore.add(
                {
                    collection: 'notifications'
                },
                notificationObj
            )
            .then( resp => { 
                dispatch({
                    type: 'CREATE_NOTIFICATION',
                    notification: notificationObj,
                });
            });

            dispatch({
                type: 'EDIT_PROJECT',
                projectId,
                project
            });
        })
        .catch( err => {
            dispatch({
                type: 'EDIT_PROJECT_ERROR',
                err
            });
        });
    });
};