import * as React from 'react';

interface Props {

}

const Form: React.FC<Props> = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    msg: '',
  });
  return (
    <form>
      {' '}
      <div className="form-group"><input type="text" /></div>
      <div className="form-group">
        {' '}
        <input type="text" />
        {' '}
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Form;
