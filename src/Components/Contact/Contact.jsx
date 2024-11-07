import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="container-fluid contact" style={{
        backgroundColor:' #F6F7F9',
        padding: '50px 20px',
        overflow: 'hidden',
      }} >
        <div className="row">
          <div className="col-md-6 my-md-1 my-5">
            <div className="contact-us" style={{
                backgroundColor: '#fff',
                padding:  '20px 10px',
                 borderRadius: '10px'
            }}>
              <h4 className=" mb-5" style={{color:" #002D59"}}>Contact Us</h4>
              <form>
                <label htmlFor="Name" className="mt-2">Name : </label>
                <input className="form-control mb-5 mt-2" type="text" name="Name" id="Name" />
                
                <label htmlFor="Number" className="mt-2">Number : </label>
                <input className="form-control mb-5 mt-2" type="number" name="Number" id="Number" />
                
                <label htmlFor="categories" className="mt-2">Contact Reason : </label>
                <select className="form-control mb-5 mt-2 form-select" id="categories" name="categories">
                  <option selected>choose reason from here</option>
                  <option value="cairo">Bus</option>
                  <option value="alexandria">Driver</option>
                  <option value="giza">Policy</option>
                  <option value="luxor">Meal</option>
                  <option value="luxor">Policy</option>
                  <option value="luxor">Technical</option>
                  <option value="luxor">Payment</option>
                </select>

                <label htmlFor="details">Details :</label>
                <textarea style={{maxHeight: '300px' }} name="details" id="details" className="form-control mb-5 mt-2" maxLength="50"></textarea>
                
                <button className="btn btn-info w-50 rounded-pill">Send</button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="hot">
              <h6>Hotline</h6>
              <h6><i className="fas fa-phone"><strong className="mx-2">16128</strong></i></h6>
              <h6>Email : <a href="mailto:info@bluebus.com.eg">info@bluebus.com.eg</a></h6>
              <h4>Our location: Cairo – Downtown</h4>
              <hr style={{ width: '95%' }} />
              <h6>Book Bus Charter</h6>
              <p>You can order a private bus that fits your needs from below</p>
              <button className="btn btn-outline-primary w-50 rounded-pill">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
