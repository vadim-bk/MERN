import { createContext } from 'react';

const noop = () => {};

export const AuthContext = createContext({
  token: null,
  userId: null,
  logIn: noop,
  logOut: noop,
  isAuthenticated: false,
});
