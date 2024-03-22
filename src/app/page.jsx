'use client'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from './layouts';
import HomePage from './homepage/HomePage';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://graphql.eng.meridiancapital.com/graphql',
  cache: new InMemoryCache(),
});

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
export default App;
