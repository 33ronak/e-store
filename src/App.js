import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from './pages/Home';
import StorePage from './pages/Store';
import AboutUsPage from './pages/AoutUs';
import RootLayout from './pages/Root';

const router = createBrowserRouter([  
  { 
    path: "/", 
    element: <RootLayout/>,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/about", element: <AboutUsPage /> }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
