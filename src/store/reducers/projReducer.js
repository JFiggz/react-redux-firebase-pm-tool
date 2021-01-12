import { v4 as uuidv4 } from 'uuid';

const initState = {
    projects: [],
};

const projReducer = (state = initState, action) => {

    switch(action.type){
        case 'CREATE_PROJECT':
            return({
                ...state,
                projects:[
                    ...state.projects,
                    {
                        id: uuidv4(),
                        ...action.project
                    }
                ],
            });
        
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error:', action.err);
            return state;

        case 'DELETE_PROJECT':
            return({
               ...state,
               projects: state.projects.filter(project => project.id !== action.projectId)
            });
        
        case 'DELETE_PROJECT_ERROR':
            console.log('Delete project error:', action.err);
            return state;

        case 'EDIT_PROJECT':
            const prevProjectState = state.filter(project => project.id === action.projectId)[0]; 
            const updatedProjectState = {
                ...prevProjectState,
                ...action.project
            };

            return({
                ...state,
                projects: state.projects.filter(project => project.id !== action.projectId).push(updatedProjectState),
            });

        default:
            return state;
    }; 
};

export default projReducer;