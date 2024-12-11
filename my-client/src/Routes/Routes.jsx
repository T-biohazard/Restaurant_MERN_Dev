// import { createBrowserRouter } from 'react-router-dom';
// import Main from '../Layout/Main';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main></Main>, // Wrap all routes with the main App component
//     children:[
//         path:'/',
//         element:<Home></Home>
//     ]
//   },
// ]);


import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home'; // Ensure Home is correctly imported

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />, // Main layout component
    children: [
      {
        path: '/', // Correctly structured child route object
        element: <Home></Home>// Child component
      },
    ],
  },
]);
