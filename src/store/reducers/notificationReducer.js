const initState = {
    notifications:[],
};

const notificationReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_NOTIFICATION':
            return({
                ...state,
                notifications: [...state.notifications, action.notification],
            });

        default:
            return state;
    };
};

export default notificationReducer;