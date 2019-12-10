/* eslint-disable react/prop-types */
import * as React from 'react';
import { number } from 'prop-types';
import userReducer from './user.reducer';
import contextActions from './contextTypes';

interface Props {
  children: React.ReactNode;
}

const initialState: IState = {
  count: 0,
  getUserCount: () => number,
};

const userContext = React.createContext<IState>(initialState);

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const getUserCount = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      dispatch({ type: contextActions.GET_USERS_COUNT, payload: data });
    } catch (err) {
      dispatch({
        type: contextActions.USER_ERROR, payload: err.message,
      });
    }
  };


  return (
    <userContext.Provider value={{
      count: state.count,
      getUserCount,
    }}
    >

      {children}

    </userContext.Provider>
  );
};
export default UserProvider;
