'use client'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts'; 
import HomePage from './homepage/HomePage';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
