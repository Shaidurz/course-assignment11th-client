import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './nav.css'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <div>
      <nav class="navbar navbar-expand-lg main-menu ">
        <div class="container-fluid">
          <Link to='/'> <h3 style={{ color: 'Black' }} class="navbar-brand" href="#">Design Station</h3></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto ">
              <Link to='/'>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </Link>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
              </li>
              <Link to='/dashboard'><li class="nav-item">
                <a class="nav-link" href="#">Dashboard</a>
              </li></Link>
              <li class="nav-item">{loggedInUser.name}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;