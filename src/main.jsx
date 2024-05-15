import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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
import User2 from './components/Services/All Services/AllServices';
import { HelmetProvider } from 'react-helmet-async';

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
        path:'/service-to-do/:providerEmail',
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
        //   return fetch(`https://counselling-eight.vercel.app/serviceInfo/${id}`).then(response => response.json());
        // }
        loader:({params})=> fetch(`https://counselling-eight.vercel.app/serviceInfo/${params.id}`)
      },
      {
        path:"/book/:id",
        element:<Book></Book>,
        loader:({params})=>fetch(`https://counselling-eight.vercel.app/serviceInfo/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://counselling-eight.vercel.app/serviceInfo/${params.id}`)
      },
      {
        path:'/user2',
        element:<User2></User2>
      },
      
      
      
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} /> 
      </HelmetProvider>
     
     </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>
);