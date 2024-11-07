import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
      <div className="container-fluid">
        <Link className={styles.navbarBrand} to="/">
          Blue <strong style={{ color: 'aquamarine' }}>Bus</strong>
        </Link>
        <button className={`${styles.toggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${styles.toggler}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} aria-current="page" to="/">Home</Link>
            </li> 
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} aria-current="page" to="privateStation">Private Station</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="station">Stations</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="busses">Buses</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="about">About Blue Bus</Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="faqs">FAQs</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link className="text-white text-decoration-none" to="#">
              <img className="mx-0 mx-md-3" src="/img/egypt.webp" width="40" alt="Egypt Flag" />
            </Link>
            <Link className="text-white text-decoration-none" to="#">
              <i className="fas fa-user fa-2x px-2 text-info"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
