import React from 'react';
import { useRoutes } from './routes';

import NavBar from './components/NavBar';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './Context/AuthContext';

import 'materialize-css';

function App() {
  const { token, userId, logIn, logOut } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{ token, userId, logIn, logOut, isAuthenticated }}>
      {isAuthenticated && <NavBar />}
      <div className="container">
        <h1>{routes}</h1>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
