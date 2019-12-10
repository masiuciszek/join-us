import contextActions from './contextTypes';

export default (state: IState, action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case contextActions.GET_USERS_COUNT:

      return {
        ...state,
      };

    default:
      return state;
  }
};
