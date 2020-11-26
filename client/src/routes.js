import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import LinksPage from './pages/LinksPage';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" component={LinksPage} exact />
        <Route path="/create" component={CreatePage} exact />
        <Route path="/detail/:id" component={DetailsPage} />

        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={AuthPage} exact />

      <Redirect to="/" />
    </Switch>
  );
};
