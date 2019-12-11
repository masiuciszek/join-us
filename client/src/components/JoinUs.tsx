import * as React from 'react';
import WelcomeMsg from './WelcomeMsg';
import Form from './Form';
import { userContext } from '../context/user.state';

interface Props {

}

const JoinUs: React.FC<Props> = () => {
  const { getUserCount, count } = React.useContext(userContext);

  React.useEffect(() => {
    getUserCount();
  }, []);


  return (
    <div className="JoinUs">
      {' '}
      <div className="wrapper">
        <WelcomeMsg title="Join" subTitle="us" amount={count.data} />
        <Form />
      </div>
      {' '}
    </div>
  );
};
export default JoinUs;
