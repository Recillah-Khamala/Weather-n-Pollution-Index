import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import Home from './Pages/home';
import Contacts from './Pages/contact';
import Store from './Redux/configuration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Contacts', element: <Contacts /> },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
);
