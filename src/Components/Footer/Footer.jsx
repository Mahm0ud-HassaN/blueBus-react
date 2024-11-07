import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`container-fluid ${styles.customFooter}`}>
      <div className="container mx-auto p-3">
        <div className="row">
          <div className="col-md-3">
            <Link className={styles.navbarBrand} to=" "> {}
              Blue <strong style={{ color: 'aquamarine' }}>Bus</strong>
            </Link>
          </div>
          <div className="col-md-9">
            <div className="row d-flex align-items-center">
              <div className="col-8">
                <div className="row">
                  <ul className="col-md-6 list-unstyled">
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="/">Book Your Trip</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="#">Services</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="destinations">Destinations</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="faqs">FAQs</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="contact">Contact Us</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="#">Blog</Link></li>
                  </ul>
                  <ul className="col-md-6 list-unstyled">
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="about">About Us</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="busses">Buses</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="station">Stations</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="terms">Terms and Conditions</Link></li>
                    <li><Link className={`${styles.footerLink} h5 text-white`} to="#">Delete Account</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h5 className="h2 text-white">Contact Us</h5>
                  <h5 className="h2 ">
                    <Link className="mx-2 my-4 text-white" to="#">
                      <i className="fas fa-phone">
                        <strong className="mx-2 ">16128</strong>
                      </i>
                    </Link>
                  </h5>
                  <ul className="d-flex list-unstyled my-3 text-center">
                    <li><Link className="m-3 fs-5 text-info" to="#"><i className="fab fa-facebook"></i></Link></li>
                    <li><Link className="m-3 fs-5 text-info" to="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link className="m-3 fs-5 text-info" to="#"><i className="fab fa-linkedin"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
