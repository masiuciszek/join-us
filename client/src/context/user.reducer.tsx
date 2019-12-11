import contextActions from './contextTypes';

export default (state: IState, action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case contextActions.GET_USERS_COUNT:
      return {
        ...state,
        count: payload,
        loading: false,
      };
    case contextActions.ADD_EMAIL:
      return {
        ...state,
        emails: [...state.emails, payload],
        loading: false,
      };
    default:
      return state;
  }
};
