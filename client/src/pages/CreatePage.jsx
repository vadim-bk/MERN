import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useFetch } from '../hooks/useFetch';

const CreatePage = () => {
  const auth = useContext(AuthContext);
  const { request } = useFetch();
  const [link, setLink] = useState('');

  const history = useHistory();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const handleChangeLink = (e) => setLink(e.target.value);

  const handleKeyPressLink = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );
        history.push(`/detail/${data.link._id}`);
        console.log(data);
      } catch (error) {}
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
        <div className="input-field">
          <input
            placeholder="Paste link"
            id="link"
            type="text"
            value={link}
            onChange={handleChangeLink}
            onKeyPress={handleKeyPressLink}
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
