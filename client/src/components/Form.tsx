import * as React from 'react';
import { userContext } from '../context/user.state';

interface Props {

}

const Form: React.FC<Props> = () => {
  const { postEmail } = React.useContext(userContext);
  const [email, setEmail] = React.useState({
    email: '',

  });
  const { email: emailVal } = email;

  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailVal.match(regEx)) {
      alert('please fill in the fields');
    } else {
      postEmail(emailVal);
      console.log(emailVal, ' Submitted!');
      setEmail({ email: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {' '}
        <div className="form-group for-input">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={emailVal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
