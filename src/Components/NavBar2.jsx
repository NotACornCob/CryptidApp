import React from "react";
import { NavLink } from "react-router-dom";

function NavBar2() { 

  return <div>
     <nav>
      <NavLink
       to="/" className="navbar"
      > Home
      </NavLink>
      <NavLink
        to="/Cryptids"
        className="navbar"
      > Cryptids
      </NavLink>
      <NavLink
        to="/Submissions"
        className="navbar"
      > Submissions
      </NavLink>
    </nav>
  </div>
   
};

export default NavBar2; 