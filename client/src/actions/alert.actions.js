export const alertFailure = (message) => ({type: 'ALERT_FAILURE', message});
export const alertSuccess = (message) => ({type: 'ALERT_SUCCESS', message});
export const alertClear = () => ({type:'ALERT_CLEAR'});