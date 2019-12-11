import * as React from 'react';

interface Props {
  title: string;
  subTitle: string;
  amount: number;
}

const Welcome: React.FC<Props> = ({ title, subTitle, amount }) => (
  <>
    <div className="Welcome">
      <div className="head">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      <p>
        W got
        {' '}
        {amount}
        {' '}
        emails registered
      </p>
    </div>
  </>
);
export default Welcome;
