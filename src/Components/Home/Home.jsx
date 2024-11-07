import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
export default function Home() {
  return (
    <>
      <div className={styles.bac}>
        <div className={styles.big + " container"} id='Book'>
          <h5 className="h1 text-white text-center mb-4"> Your Blue Bus Trip Now!</h5>
          <form className={`form-control p-4 ${styles.from}`}>
            <label htmlFor="from">From:</label>
            <select className="form-control mt-2" id="from" name="from">
              <option value="" disabled selected hidden>choose departure station</option>
              <optgroup label="مصر">
                <option value="cairo">القاهرة</option>
                <option value="alexandria">الإسكندرية</option>
                <option value="giza">الجيزة</option>
                <option value="luxor">الأقصر</option>
              </optgroup>
              <optgroup label="Minya">
                <option value="Bani-Mazar">Bani Mazar</option>
                <option value="Maghagha">Washing Machines</option>
                <option value="mataye">mataye</option>
              </optgroup>
            </select>

            <label htmlFor="to" className="mt-2">To:</label>
            <select className="form-control mt-2" id="to" name="to">
              <option value="" disabled selected hidden>choose arrival station</option>
              <optgroup label="مصر">
                <option value="cairo">القاهرة</option>
                <option value="alexandria">الإسكندرية</option>
                <option value="giza">الجيزة</option>
                <option value="luxor">الأقصر</option>
              </optgroup>
              <optgroup label="Minya">
                <option value="Bani-Mazar">Bani Mazar</option>
                <option value="Maghagha">Washing Machines</option>
                <option value="mataye">mataye</option>
              </optgroup>
            </select>

            <label htmlFor="departureDate" className="mt-2">Departure Date:</label>
            <input className="form-control mt-2 mb-3" type="date" id="departureDate" />
            <Link to="#">
              <button className="btn btn-outline-primary w-100 rounded-pill">Search</button>
            </Link>
          </form>
        </div>
      </div>

      <div className="transportation container-fluid">
        <div>
          <img src="/img/bus.png" className="w-100" alt="" />
        </div>
        <div className="row mx-auto d-flex flex-column flex-md-row align-items-center">
          <div className="col-md-4">
            <h3 className="fs-4">Get Real Comfort With Blue Bus</h3>
            <p>Extra legroom, full of entertaining features on board.</p>
          </div>
          <div className="col-md-4 py-4 py-md-auto">
            <h3 className="fs-4">Safe & Reliable</h3>
            <p>Your road trip is more safe, peaceful and well served.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="fs-4">Track Your Blue Bus Trip</h3>
            <p>Find bus location online using your booking number.</p>
          </div>
        </div>

        <div className="d-flex justify-content-center w-50 mx-auto flex-column flex-md-row py-3">
          <button className="btn btn-info w-100 my-3 my-md-0 me-md-3 py-2 rounded-pill text-white fw-bolder">Book Now</button>
          <button className="btn btn-outline-info w-100 py-2 rounded-pill text-black">Create Account</button>
        </div>
      </div>

      <div className={styles.about + " d-flex align-content-end"}>
        <img src="/img/bigbus.png" alt="" />
        <div className={styles.aboutCon + " w-25 text-white"}>
          <h3 className="py-3">About Blue Bus</h3>
          <p>Book Your Blue Bus Ticket Online Now! Fast, Easy, and Secure Booking. Explore Egypt's Top Destinations: Hurghada, Sharm El Sheikh, Alexandria & More.</p>
        </div>
      </div>

      <div className={styles.appStore + " py-5"}>
        <div className="row d-flex justify-content-center align-items-center mx-auto mx-5">
          <div className="col-md-4 appicons">
            <h3>Search for Blue Bus Egypt app in the store. Download Blue Bus Egypt app for free. Book your next Blue Bus trip easily.</h3>
            <div className="row d-flex">
              <img className="appimg w-50" src="/img/d1.png" alt="" />
              <img className="appimg w-50" src="/img/d2.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <img className="bacimg w-100" src="/img/app.png" alt="" />
          </div>
        </div>
      </div>

      <div className={`${styles.payment} text-center p-5`}>
        <h4 className="fw-bold">Secure and Convenient Payment Methods</h4>
        <h5 className="my-4">You can pay using</h5>
        <div className="payIcons row d-flex justify-content-evenly align-items-center mx-auto">
          <img src="/img/p1.png" alt="" className="col-4 col-md-2 img-fluid" />
          <img src="/img/p2.png" alt="" className="col-4 col-md-2 img-fluid" />
          <img src="/img/p3.png" alt="" className="col-4 col-md-2 img-fluid" />
          <img src="/img/p4.png" alt="" className="col-4 col-md-2 img-fluid" />
          <img src="/img/p5.png" alt="" className="col-4 col-md-2 img-fluid" />
          <img src="/img/p6.png" alt="" className="col-4 col-md-2 img-fluid" />
        </div>
        <div className="py-3">
          <h4 className="fw-bold h1">Or</h4>
          <h5 className="my-4 h2">Reserve your ticket at one of our stations</h5>
        </div>
        <Link to='station'><button className="btn btn-outline-info rounded-pill w-25 mt-2 fw-bold">Find Us</button></Link>
      </div>
    </>
  );
}
