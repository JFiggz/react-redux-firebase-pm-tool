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