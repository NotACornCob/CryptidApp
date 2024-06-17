import React from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";


function App() {
    return (
        <>
        <header>
        <NavBar />
        </header>
        <Outlet />
        <body>
          
        </body>
        </>
    );
  }
  
export default App;