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
import Home from "./Home"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Cryptids",
            element: <Cryptids />,
        },
        {
            path: "/Form",
            element: <Form />,
        },
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
