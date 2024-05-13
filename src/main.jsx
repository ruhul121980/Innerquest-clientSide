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
import AllServices from './components/Services/All Services/AllServices';
import SingleServiceDetails from './components/HomePage/PopularServices/SingleServiceDetails';
import Book from './components/Services/Booked Services/Book';
import Update from './components/Services/Manage Service/Update';

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
        path: '/manage-service/:email',
        element: <PrivateRoute><ManageService/></PrivateRoute>,
       
    },
    
      {
        path:'/booked-services/:email',
        element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>
      },
      {
        path:'/service-to-do',
        element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>

      },
      {
        path:'/allServices',
        element:<AllServices></AllServices>
      },
      {
        path: '/singleServiceDetails/:id',
        element: <SingleServiceDetails></SingleServiceDetails>,
        // loader: ({ params }) => {
        //   const { id } = params;
        //   return fetch(`http://localhost:5000/serviceInfo/${id}`).then(response => response.json());
        // }
        loader:({params})=> fetch(`http://localhost:5000/serviceInfo/${params.id}`)
      },
      {
        path:"/book/:id",
        element:<Book></Book>,
        loader:({params})=>fetch(`http://localhost:5000/serviceInfo/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/serviceInfo/${params.id}`)
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
