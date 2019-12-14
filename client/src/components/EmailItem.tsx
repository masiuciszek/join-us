/* eslint-disable react/prop-types */
import * as React from 'react';

interface P {
  email: Email;
}

const EmailItem: React.FC<P> = ({ email: { email } }) => {
  let a;
  return (
    <div className="styledEmail">
      {' '}
      <h3>
        {' '}
        {email}
        {' '}
      </h3>
      {' '}
    </div>
  );
};
export default EmailItem;
