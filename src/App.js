import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Home/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import NotFoundPage from './NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/react-portfolio/',
    element: <><Header /><HomePage /></>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/react-portfolio/Portfolio',
    element: <><Header /><Portfolio /></>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
