import React from 'react'
import '../App.css'
import { NavLink as Link } from "react-router-dom";

const Navbar = ({data}) => {
  return (
    <nav className='navbar'>
        <div>
            <img src={data.avatar_url} alt={data.login} />
        </div>
        <h2>
          <span className='text-light'>Welcome,</span> {data.login}
        </h2>
        <div className="links">
            <Link to="/" className='link'>
              Overview
            </Link>
            <Link to="/repo" className='link'>
              Repos
            </Link>
          </div>

    </nav>
  )
}

export default Navbar