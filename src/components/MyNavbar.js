import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyNavbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = !!token;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <span className="ms-2">Users</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span className="ms-2">Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span className="ms-2">Sign Up</span>
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ms-2">Logout</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
