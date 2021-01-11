export const createProject = (project, firestore) => {
    return((dispatch, getState)=>{
        //Making an async call to add the data to the Firestore DB prior to changing state in store
        firestore.add(
            {
                collection: 'projects'
            },
            {
            ...project,
            authorFirstName: 'Jim',
            authorLastName: 'Figgz',
            authorId: 11234,
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