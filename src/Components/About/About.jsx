import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="container" style={{ color: '#002D59' }}>
        <h3 className="h1 text-center py-3">About Blue Bus</h3>
        <img src="./img/about.png" alt="" className="w-100" />
        <p className="h5 fw-semibold pt-3">
          Blue Bus is a premier public transport company, providing luxurious yet affordable
          long distance travel in Egypt connecting Greater Cairo with the most famous destinations
          along The Nile River and both The Mediterranean & Red sea. As the Middle Eastern most
          promising transportation company, we believe in making a difference through our values.
          We aspire to make the traveling experience with us a memorable and joyful one. BlueBus
          adopts technology that enriches our customer experience, from booking till reaching
          destinations. Our highly trained staff deliver a luxurious service. As well as, our
          professional drivers ensure safe and punctual trips, with the quality our passengers
          deserve.
        </p>

        <div className="row py-5">
          <div className="col-md-4">
            <h3 className="py-3 text-center">Our Mission</h3>
            <img src="./img/mission.png" alt="" className="w-100" />
            <p className="pt-2">
              Ensuring a satisfactory and outstanding level of service, which participates with elevating the
              quality standards of transportation industry in Egypt.​ We believe that as part of our social
              responsibility, its our duty to introduce a new concept of leisure travel to the Egyptian market.
              BlueBus considers that retaining the existing customers’ satisfaction is quite important since with
              the same amount of care, it will attract new customers.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="py-3 text-center">Our Vision</h3>
            <img src="./img/vision.png" alt="" className="w-100" />
            <p className="pt-2">
              Delivering a public transportation service that complies with the highest quality standards. We
              intend to extend over all travel networks among the Egyptian governorates, which increases the
              opportunities to better serve our customers.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="py-3 text-center">Our Goals</h3>
            <img src="./img/goals.png" alt="" className="w-100" />
            <p className="pt-2">
              To extend over all travel networks among the Egyptian governorates, which elevates the company’s
              opportunities to grow, and increases its ability to better serve its customers. Blue Bus believes
              that retaining the existing customers’ satisfaction is quite important, since with the same amount
              of care, it will attract new ones. We believe that, as a part of our social responsibility, it’s our
              duty to introduce a new concept of leisure travel to the Egyptian market, which enriches the latter.
            </p>
          </div>

          <div className="text-center pt-5">
            <Link to="/">
              <button className="btn btn-outline-primary w-25 rounded-pill">Book now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
