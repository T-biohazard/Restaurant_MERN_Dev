import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home'; // Home page

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />, // Main layout component
    children: [
      {
        path: '/', // Home route
        element: <Home />, // Home component
      },
    ],
  },
]);
