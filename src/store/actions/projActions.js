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
        firestore.delete(
            {
                collection: 'projects',
                doc: projectId
            },
        )
        .then(resp => {
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