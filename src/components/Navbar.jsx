import React from "react";

function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
          <ul>
            <li className="active">
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/Admin">Admin</a>
            </li>
            <li>
                <a href="/Medicins">medicines</a>
            </li>
          </ul>
    

    </nav>
}


export default Navbar;