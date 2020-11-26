import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { useNotification } from '../hooks/useNotification';

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useFetch();
  const notification = useNotification();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    notification(error);
    clearError();
  }, [error, notification, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const handleChangeInput = ({ target: { name, value } }) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...fields });
      notification(data.message);
    } catch (error) {}
  };

  const handleLogIn = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...fields });
      auth.logIn(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter Email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={fields.email}
                  onChange={handleChangeInput}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Enter Password"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={fields.password}
                  onChange={handleChangeInput}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              onClick={handleLogIn}
              disabled={loading}
            >
              Log in
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={handleSignUp}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
