/* eslint-disable import/extensions */
import React from 'react';
import JoinUs from './components/JoinUs';
import EmailList from './components/EmailList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserProvider from './context/user.state';

const App: React.FC = () => (
  <>
    <UserProvider>
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={JoinUs} />
            <Route exact path="/emails" component={EmailList} />
          </Switch>
        </div>
      </main>
    </UserProvider>
  </>
);

export default App;
