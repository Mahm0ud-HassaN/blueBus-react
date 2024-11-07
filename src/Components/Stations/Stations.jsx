import React from 'react';
import { Link } from 'react-router-dom';

export default function Stations() {
  return (
    <>
      <div className="container-fluid bg-light ">
        <div className="row">
          <h3 className="h1 text-center py-4" style={{color:"#122659"}}>Stations</h3>
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed rounded-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Minya
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body bg-light">
                    <div className="row row-cols-2 g-3">
                      <div className="col dir rounded-4 py-3 bg-white d-flex justify-content-between">
                        <Link to="#"><i className="fas fa-map-marker-alt"></i>Bani mazar</Link>
                        <Link to="#">Directions<i className="fa fa-directions"></i></Link>
                      </div>
                      <div className="col dir rounded-4 py-3 bg-white d-flex justify-content-between">
                        <Link to="#"><i className="fas fa-map-marker-alt"></i>Mataye</Link>
                        <Link to="#">Directions<i className="fa fa-directions"></i></Link>
                      </div>
                      <div className="col dir rounded-4 py-3 bg-white d-flex justify-content-between">
                        <Link to="#"><i className="fas fa-map-marker-alt"></i>Maghagha</Link>
                        <Link to="#">Directions<i className="fa fa-directions"></i></Link>
                      </div>
                      <div className="col dir rounded-4 py-3 bg-white d-flex justify-content-between">
                        <Link to="#"><i className="fas fa-map-marker-alt"></i>samalot</Link>
                        <Link to="#">Directions<i className="fa fa-directions"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional accordion items omitted for brevity */}
              
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.713847710457!2d31.392219024130114!3d30.016371919899704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dc45a23ddd9%3A0x6e50ed1068a803b0!2sblue%20bus%20station!5e0!3m2!1sar!2seg!4v1729976614310!5m2!1sar!2seg"
              width="600"
              title='Bus Station'
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
