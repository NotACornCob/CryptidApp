import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from "./routes/App";
import ErrorPage from "./ErrorPage";
import Form from "./Form";
import Cryptids from "./Cryptids"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/Form",
            element: <Form />,
            errorElement: <ErrorPage /> 
        },
        {
            path: "/Cryptids",
            element: <Cryptids />,
            errorElement: <ErrorPage /> 
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
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
