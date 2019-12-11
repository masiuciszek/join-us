import * as React from 'react';
import { userContext } from '../context/user.state';

interface Props {

}

const Form: React.FC<Props> = () => {
  const { postEmail } = React.useContext(userContext);
  const [formData, setFormData] = React.useState('');

  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.match(regEx)) {
      alert('please fill in the fields');
    } else {
      postEmail(formData);
      console.log(formData, ' Submitted!');
      setFormData('');
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {' '}
        <div className="form-group">
          <input type="email" placeholder="Email" value={formData} onChange={(e) => setFormData(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
