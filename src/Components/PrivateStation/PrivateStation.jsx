import React, { useState } from 'react';
import styles from './PrivateStation.module.css';

export default function PrivateStation() {
  const [isReturnTrip, setIsReturnTrip] = useState(false);

  const handleReturnTripChange = () => {
    setIsReturnTrip(!isReturnTrip);
  };

  return (
    <div className="container mb-5">
      <form action="" className={`p-4 mt-5 ${styles.form}`}>
        <h2 className="h1 text-center py-3">Order a Private Bus</h2>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="number">Number:</label>
            <input type="number" className="form-control" id="number" name="number" />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label htmlFor="busType">Bus type:</label>
            <select className="form-control" id="busType" name="busType">
              <option value="" disabled selected hidden>Select bus type...</option>
              <option value="first-class">First class</option>
              <option value="business-class">Business class</option>
              <option value="economy-class">Economy class</option>
            </select>
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label htmlFor="PassengersNumber">Passengers Number:</label>
            <input type="number" className="form-control" id="PassengersNumber" name="PassengersNumber" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="from">From:</label>
            <select className="form-control" id="from" name="from">
              <option value="" disabled selected hidden>Choose departure station</option>
              <optgroup label="Minya">
                <option value="Bani-Mazar">Bani Mazar</option>
                <option value="Maghagha">Maghagha</option>
                <option value="mataye">Mataye</option>
              </optgroup>
              <optgroup label="مصر">
                <option value="cairo">القاهرة</option>
                <option value="alexandria">الإسكندرية</option>
                <option value="giza">الجيزة</option>
                <option value="luxor">الأقصر</option>
              </optgroup>
            </select>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="to">To:</label>
            <select className="form-control" id="to" name="to">
              <option value="" disabled selected hidden>Choose destination station</option>
              <optgroup label="مصر">
                <option value="cairo">القاهرة</option>
                <option value="alexandria">الإسكندرية</option>
                <option value="giza">الجيزة</option>
                <option value="luxor">الأقصر</option>
              </optgroup>
              <optgroup label="Minya">
                <option value="Bani-Mazar">Bani Mazar</option>
                <option value="Maghagha">Maghagha</option>
                <option value="mataye">Mataye</option>
              </optgroup>
            </select>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="departureDate" className="mt-2">Departure Date</label>
            <input className="form-control mt-2 mb-3" type="date" id="departureDate" name="departureDate" />
          </div>
          <div className={`col-12 col-md-6 mb-3 ${styles.checkboxLabel}`}>
            <label htmlFor="returnTrip">
              <input type="checkbox" name="returnTrip" id="returnTrip" checked={isReturnTrip} onChange={handleReturnTripChange} /> Return Trip
            </label>
          </div>
          {isReturnTrip && (
            <div className="col-12 col-md-6 mb-3" id="returnDate">
              <label htmlFor="returnDate" className="mt-2">Return Date</label>
              <input className="form-control mb-3" type="date" id="returnDate" name="returnDate" />
            </div>
          )}
          <div className="col-12 col-md-8 mb-3">
            <button type="submit" className="btn btn-outline-primary w-50 rounded-pill">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
