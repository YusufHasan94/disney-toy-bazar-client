import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './providers/AuthProvider';
import '@smastrom/react-rating/style.css'
import NotFound from './Pages/PageNotFound/NotFound';
import AddToy from './Pages/AddToy/AddToy';
import Private from './Shared/Route/Private';
import ViewToys from './Pages/ViewToys/ViewToys';
import ViewMyToys from './Pages/ViewMyToys/ViewMyToys';
import ToyDetails from './Pages/ViewToys/ToyDetails';
import UpdateAToy from './Pages/UpdateAToy/UpdateAToy';
import Blogs from './Pages/Blogs/Blogs';
import ViewSubcategoryToys from './Pages/ViewSubcategoryToys/ViewSubcategoryToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/all-toys",
        element: <ViewToys></ViewToys>
      },
      {
        path: "/all-toys/:id",
        element: <Private><ToyDetails></ToyDetails></Private>,
        loader: ({params})=> fetch(`https://disney-toy-bazar-server.vercel.app/toys/${params.id}`)
      },
      {
        path: "/add-toys",
        element: <Private><AddToy></AddToy></Private>
      },
      {
        path: "/my-toys",
        element: <Private><ViewMyToys></ViewMyToys></Private>
      },
      {
        path: "/my-toys/:id",
        element: <Private><UpdateAToy></UpdateAToy></Private>,
        loader: ({params}) => fetch(`https://disney-toy-bazar-server.vercel.app/toys/${params.id}`) 
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/subcategory",
        element: <Private><ViewSubcategoryToys></ViewSubcategoryToys></Private>
      } 
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-14'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
