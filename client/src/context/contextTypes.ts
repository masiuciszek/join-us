
interface DefaultActionsTypes {
  GET_USERS_COUNT: string;
  USER_ERROR: string;
  ADD_EMAIL: string;
  GET_EMAILS: string;
}


const contextActions: DefaultActionsTypes = {
  GET_USERS_COUNT: 'GET_USERS_COUNT',
  USER_ERROR: 'USER_ERROR',
  ADD_EMAIL: 'ADD_EMAIL',
  GET_EMAILS: 'GET_EMAILS',
};


export default contextActions;
