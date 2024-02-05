import React, {  useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
const handleClick=() =>{
  localStorage.removeItem('token')
  navigate('/login');
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/home" ? "active" :""}`} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" :""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success mx-1" type="submit">
                Search
              </button>
              {!localStorage.getItem('token')?<><Link to="/login" className="btn btn-primary mx-1" role="button">Login</Link>
              <Link to="/signup" className="btn btn-primary mx-1" role="button">SignUp</Link></>:<button className="btn btn-primary" onClick={handleClick}>Logout</button>}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
