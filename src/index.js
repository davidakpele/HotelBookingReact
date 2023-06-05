import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/init/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import List from './app/pages/list/List';
import Hotels from './app/pages/hotel/Hotels';

const router = createBrowserRouter([
  {  
    path: "*",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hotels",
    element: <List />,
  },
  {
    path: "/hotels/:id",
    element: <Hotels />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={ router } />
);
reportWebVitals();
