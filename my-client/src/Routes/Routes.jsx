import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home'; // Home page
import Menu from '../pages/Menu/Menu';
// import Order from '../pages/Home/ceif-recom/Order';
import OrderFood from '../pages/OrderFood/OrderFood';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout component
    children: [
      {
        path: '/', // Home route
        element: <Home />, // Home component
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order',
        element:<OrderFood></OrderFood>
      }
    ],
  },
]);
