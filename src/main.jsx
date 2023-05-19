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
import ToysDetails from './Pages/DetailsModal/ToysDetails';
import ViewToys from './Pages/ViewToys/ViewToys';
import ViewMyToys from './Pages/ViewMyToys/ViewMyToys';

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
        path: "/add-toys",
        element: <Private><AddToy></AddToy></Private>
      },
      {
        path: "/my-toys",
        element: <Private><ViewMyToys></ViewMyToys></Private>
      },
      {
        path: "/toy-details/:id",
        element: <Private><ToysDetails></ToysDetails></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
