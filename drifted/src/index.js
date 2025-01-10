import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import './pages/css/comment.css';
import Main from './pages/main';
import Blog from './pages/blog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/blog', element: <Blog />}
  // Add more routes as needed...
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);