import React from "react";
import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom";


function App() {
    return (
        <>
        <header>
        <NavBar />
        <Outlet />
        </header>
        </>
    );
  }
  
export default App;