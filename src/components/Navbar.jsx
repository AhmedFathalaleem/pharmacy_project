import React, { Children } from "react";
import { Link, UseMatch, useMatch, useResolvedPath } from "react-router-dom";


function Navbar(){
    
    return <nav className="nav">
        <Link to="/" className="site-title">Site Name</Link>
          <ul>
            <CustomLink to="/">Patients</CustomLink>
            <CustomLink to="/Admin">Admin</CustomLink>
            <CustomLink to="/Medicines">Medicines</CustomLink>
            
            
            
          </ul>
    

    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath =useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })
    const path = window.location.pathname
    return (
        <li className={isActive ? "active" : "" }>
        <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default Navbar;