import * as React from 'react';
import { userContext } from '../context/user.state';

interface Props {

}

const Form: React.FC<Props> = () => {
  const { postEmail } = React.useContext(userContext);
  const [formData, setFormData] = React.useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.length === 0) {
      alert('please fill in the fields');
    } else {
      postEmail(formData);
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {' '}
        <div className="form-group">
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
