import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() { 

  return <div>
  <nav>
   <NavLink
    to="/" className="navbar"
   > Home
   </NavLink>
   <NavLink
     to="/Cryptids/:id"
     className="navbar"
   > Cryptids
   </NavLink>
   <NavLink
     to="/Form"
     className="navbar"
   > Submissions
   </NavLink>
 </nav>
</div>

};

export default NavBar; 