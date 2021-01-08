import { v4 as uuidv4 } from 'uuid';

const initState = {
    projects: [
        {
            id:'1',
            title: 'Code More!',
            details: 'No scraps hit the floor player-coach slow-walk our commitment and drink from the firehose my capacity is full. Table the discussion work flows i dont care if you got some copy, why you dont use officeipsumcom or something like that ? baseline or teams were able to drive adoption and awareness'
        },
        {
            id:'2',
            title: 'Exercise',
            details: 'put a pin in that and make it look like digital, so commitment to the cause synergestic actionables eat our own dog food creativity requires you to murder your children. Pulling teeth drill down, but blue money not the long pole in my tent five-year strategic plan.'
        },
        {
            id:'3',
            title: 'Learn Redux',
            details: 'Can you put it into a banner that is not alarming, but eye catching and not too giant what do you feel you would bring to the table if you were hired for this position.'
        },
    ],
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
            console.log('Create proj error:', action.err);
            return state;

        default:
            return state;
    }; 
};

export default projReducer;