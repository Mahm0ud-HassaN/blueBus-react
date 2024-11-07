import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Destinations.module.css';

export default function Destinations() {
  return (
    <div className="container-fluid">
      <div className="top text-center">
        <h4 className="h1 my-5">Seasonal Destinations</h4>
        <h4 className="h2">Our Destinations</h4>
      </div>
      <div className="row g-3 my-5">
      <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver1}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Giza/Cairo</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver2}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Alexandria</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver3}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Sharm El Sheikh</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver1}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Giza/Cairo</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver2}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Alexandria</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver3}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Sharm El Sheikh</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver1}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Giza/Cairo</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver2}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Alexandria</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 col-12">
          <div className={`${styles.over} ${styles.imgOver3}`}>
            <div className={styles.overlay}>
              <div className={styles.text}>
                <h4>Sharm El Sheikh</h4>
                <Link className="h5 text-white" to="/">Book now</Link>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
}
