import React from "react";
import NavBar from "../Components/NavBar"

function App() {
    return (
        <>
        <header>
         <div className="navbar">
          <NavBar />
          </div> 
        </header>
        <main>
        <h1>Home Page</h1>
       <p>Welcome to Cryptid Crawler!</p>
        </main>
        </>
    );
  }
  
export default App;