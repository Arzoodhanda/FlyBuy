import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    // domain={'dev-apvkndwn.us.auth0.com'}
    // clientId={'5Fj4bgY6MnQEw9hSg6wiyW5I1wHQzV1f'}
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);