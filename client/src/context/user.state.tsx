/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { number, string } from 'prop-types';
import userReducer from './user.reducer';
import contextActions from './contextTypes';

interface Props {
  children: React.ReactNode;
}

const initialState: IState = {
  count: { data: 0 },
  loading: true,
  emails: [],
  getUserCount: () => number,
  postEmail: (email: string) => string,
  getEmails: () => string,
};

export const userContext = React.createContext<IState>(initialState);

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

  const postEmail = async (email: string) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      dispatch({
        type: contextActions.ADD_EMAIL,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.USER_ERROR, payload: err.message,
      });
    }
  };


  const getEmails = async () => {
    try {
      const res = await fetch('api/users/amount?count=6');
      // const res = await fetch(`api/users/amount?count=${n}`);
      const data = await res.json();

      dispatch({ type: contextActions.GET_EMAILS, payload: data });
    } catch (err) {
      dispatch({
        type: contextActions.USER_ERROR, payload: err.message,
      });
    }
  };

  return (
    <userContext.Provider value={{
      count: state.count,
      loading: state.loading,
      emails: state.emails,
      getUserCount,
      postEmail,
      getEmails,
    }}
    >

      {children}

    </userContext.Provider>
  );
};
export default UserProvider;
