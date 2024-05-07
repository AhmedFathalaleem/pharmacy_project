import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function PatientNavbar(){
    
    return <nav className="nav">
        <Link to="/Request" className="site-title">Pharmacy</Link>
          <ul>
            <CustomLink to="/Request">Request medicine</CustomLink>
            <CustomLink to="/">Logout</CustomLink>
            
            
            
            
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


export default PatientNavbar;