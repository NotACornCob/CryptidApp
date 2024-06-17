import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Form from "./Form";
import Cryptids from "./Cryptids"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Form",
    element: <Form />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "/Cryptids",
    element: <Cryptids />,
    errorElement: <ErrorPage /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
