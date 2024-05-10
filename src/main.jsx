import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './components/NotFound';
import AddService from './components/Services/Add Service/AddService';
import ManageService from './components/Services/Manage Service/ManageService';
import BookedServices from './components/Services/Booked Services/BookedServices';
import ServiceToDo from './components/Services/Service To Do/ServiceToDo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },

      {
        path:'/add-service',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      },
      
      {
        path:'/manage-service',
        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
      },
      {
        path:'/booked-services',
        element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>
      },
      {
        path:'/service-to-do',
        element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>

      },
      
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} /> 
     </AuthProvider>
  </React.StrictMode>
);
