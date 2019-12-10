import * as React from 'react';

interface Props {
  title: string;
  subTitle: string;
  amount: number;
}

const Welcome: React.FC<Props> = ({ title, subTitle, amount }) => (
  <>
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>
        W got
        {' '}
        {amount}
        {' '}
        emails registered sofar
      </p>
    </div>
  </>
);
export default Welcome;
