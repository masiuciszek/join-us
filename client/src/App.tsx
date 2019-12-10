/* eslint-disable import/extensions */
import React from 'react';
import JoinUs from './components/JoinUs';
import './App.css';
import UserProvider from './context/user.state';

const App: React.FC = () => (
  <>
    <UserProvider>
      <JoinUs />
    </UserProvider>
  </>
);

export default App;