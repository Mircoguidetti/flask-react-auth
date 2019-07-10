const initialAlertReducer = {}

export default (state=initialAlertReducer, action) => {
    switch(action.type){
        case 'ALERT_SUCCESS':
            return {
                message: action.message
            };
        case 'ALERT_FAILURE':
            return {
                message: action.message
            };
        case 'ALERT_CLEAR':
            return {}
        default:
            return state;
    };
};