import React from 'react';
import '/src/css/sideNav.css'
import { Link } from 'react-router-dom';


function sideNav() {
  return (
    <div>
        <div className="sideNav-css">
            <Link to={'/'}>Home</Link>
            <Link to={"/create"}>Create a team!</Link>
            <Link to={"/view"}>Team Gallery!</Link>
           
            <img className="single-img" src="/src/assets/overcooked.gif" />
           
        </div>
        
        

      
    </div>
  )
}

export default sideNav
