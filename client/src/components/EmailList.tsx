import * as React from 'react';
import { userContext } from '../context/user.state';
import './email.css';
import EmailItem from './EmailItem';
import { Link } from 'react-router-dom';

interface P {

}

const EmailList: React.FC<P> = () => {
  const { emails, getEmails, loading } = React.useContext(userContext);
  const [state, setState] = React.useState(1);

  React.useEffect(() => {
    getEmails();
  }, [state]);

  console.log(emails);


  return (
    <div className="EmailList">
      {' '}
      <div className="emails">
        <h1> Last 6 Emails Added </h1>
        <div className="emailItems">
          {emails && !loading && emails.length > 0 && emails.map((email) => <EmailItem key={email.email} email={email} />) }
        </div>
        <Link to="/">
          <span className="back">Back ←</span>
        </Link>
      </div>
      {' '}
    </div>
  );
};
export default EmailList;
// {emails && !loading && emails.length > 0 && emails.map((email) => <EmailItem key={email} email={email} />)}
