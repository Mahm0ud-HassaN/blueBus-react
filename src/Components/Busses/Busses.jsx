import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Busses.module.css'

export default function Busses() {
  return<> 
  
  <div className={`container  text-center p-5 ${styles.container}`}>
 
        <div className="row ">
            <h3 className="h1 text-center py-4">Bus classNamees</h3>

            <nav className=" d-flex justify-content-center w-100 ">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className={` active nav-link ${styles.navLink}`}  id="First-Prime-tab" data-bs-toggle="tab"
                        data-bs-target="#First-Prime" type="button" role="tab" aria-controls="First-Prime"
                        aria-selected="true">First Prime</button>
                    <button className={`nav-link ${styles.navLink}`} id="nav-Business-Prime-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-Business-Prime" type="button" role="tab" aria-controls="nav-Business-Prime"
                        aria-selected="false">BusinessPrime</button>
                    <button className={`nav-link ${styles.navLink}`} id="nav-First-tab" data-bs-toggle="tab" data-bs-target="#nav-First"
                        type="button" role="tab" aria-controls="nav-First" aria-selected="false">First</button>
                    <button className={`nav-link ${styles.navLink}`} id="nav-Business-tab" data-bs-toggle="tab" data-bs-target="#nav-Business"
                        type="button" role="tab" aria-controls="nav-Business" aria-selected="false">Business</button>
                    <button className={`nav-link ${styles.navLink}`} id="nav-Comfort-tab" data-bs-toggle="tab" data-bs-target="#nav-Comfort"
                        type="button" role="tab" aria-controls="nav-Comfort" aria-selected="false">Comfort</button>
                </div>
            </nav>
            <div className="tab-content pt-5" id="nav-tabContent">
                <div className="tab-pane fade show active" id="First-Prime" role="tabpanel"
                    aria-labelledby="First-Prime-tab" tabindex="0">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row row-cols-6">
                                <div className="col "><img className="w-100" src="/img/i1.png" alt=""/>
                                    <p>Luxurious and more spacious seats</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i2.png" alt=""/>
                                    <p>Direct trips</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i3.png" alt=""/>
                                    <p>Air Conditioner</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i4.png" alt=""/>
                                    <p>Individual in seat screen</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i5.png" alt=""/>
                                    <p>Snacks and drinks</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i6.png" alt=""/>
                                    <p>WC</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i7.png" alt=""/>
                                    <p>USB Charging Portal</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i8.png" alt=""/>
                                    <p >Wi Fi</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i9.png" alt=""/>
                                    <p>GPS tracking system</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i10.png" alt=""/>
                                    <p>Refrigerator</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i11.png" alt=""/>
                                    <p>Spacious cabin</p>
                                </div>

                            </div>
                            <br/><br/>
                           <Link className=" pt-5" to="/"><button className="btn btn-outline-primary w-75 rounded-pill"> Book now</button></Link>



                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className={`carousel-inner ${styles.inner}`}>
                                  <div className="carousel-item active">
                                    <img src="/img/bus/firstPrime-7.8f13f5be.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/firstPrime-6.9e647434.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/firstPrime-5.3297bacb.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/firstPrime-3.be63b90e.jpg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/firstPrime-2.40491c70.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                              

                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-Business-Prime" role="tabpanel"
                    aria-labelledby="nav-Business-Prime-tab" tabindex="0">
                     <div className="row">
                        <div className="col-md-6">
                            <div className="row row-cols-6">
                                <div className="col "><img className="w-100" src="/img/i1.png" alt=""/>
                                    <p>Luxurious and more spacious seats</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i2.png" alt=""/>
                                    <p>Direct trips</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i3.png" alt=""/>
                                    <p>Air Conditioner</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i4.png" alt=""/>
                                    <p>Individual in seat screen</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i5.png" alt=""/>
                                    <p>Snacks and drinks</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i6.png" alt=""/>
                                    <p>WC</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i7.png" alt=""/>
                                    <p>USB Charging Portal</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i8.png" alt=""/>
                                    <p >Wi Fi</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i9.png" alt=""/>
                                    <p>GPS tracking system</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i10.png" alt=""/>
                                    <p>Refrigerator</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i11.png" alt=""/>
                                    <p>Spacious cabin</p>
                                </div>

                            </div>
                            <br/><br/>
                           <Link className=" pt-5" to="/"><button className="btn btn-outline-primary w-75 rounded-pill"> Book now</button></Link>



                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className={`carousel-inner ${styles.inner}`}>
                                  <div className="carousel-item active">
                                    <img src="/img/bus/businessPrime-2.693c3fd4 (1).jpg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/businessPrime-4.de0275d6.jpg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/businessPrime-3.61eea26e.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/businessPrime-2.693c3fd4.jpg" className=" w-100" alt="..."/>
                                  </div>
                                  
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                              

                        </div>
                    </div></div>
                <div className="tab-pane fade" id="nav-First" role="tabpanel" aria-labelledby="nav-First-tab" tabindex="0">
                     <div className="row">
                        <div className="col-md-6">
                            <div className="row row-cols-6">
                                <div className="col "><img className="w-100" src="/img/i1.png" alt=""/>
                                    <p>Luxurious and more spacious seats</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i2.png" alt=""/>
                                    <p>Direct trips</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i3.png" alt=""/>
                                    <p>Air Conditioner</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i4.png" alt=""/>
                                    <p>Individual in seat screen</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i5.png" alt=""/>
                                    <p>Snacks and drinks</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i6.png" alt=""/>
                                    <p>WC</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i7.png" alt=""/>
                                    <p>USB Charging Portal</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i8.png" alt=""/>
                                    <p >Wi Fi</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i9.png" alt=""/>
                                    <p>GPS tracking system</p>
                                </div>
                                

                            </div>
                            <br/><br/>
                           <Link className=" pt-5" to="/"><button className="btn btn-outline-primary w-75 rounded-pill"> Book now</button></Link>



                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className={`carousel-inner ${styles.inner}`}>
                                  <div className="carousel-item active">
                                    <img src="/img/bus/first-1.d639e324.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/first-2.a88c1bde.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/first-3.491a648e.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                              

                        </div>
                    </div></div>
                <div className="tab-pane fade" id="nav-Business" role="tabpanel" aria-labelledby="nav-Business-tab"
                    tabindex="0"> <div className="row">
                        <div className="col-md-6">
                            <div className="row row-cols-6">
                                <div className="col "><img className="w-100" src="/img/i1.png" alt=""/>
                                    <p>Luxurious and more spacious seats</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i2.png" alt=""/>
                                    <p>Direct trips</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i3.png" alt=""/>
                                    <p>Air Conditioner</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i4.png" alt=""/>
                                    <p>Individual in seat screen</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i5.png" alt=""/>
                                    <p>Snacks and drinks</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i6.png" alt=""/>
                                    <p>WC</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i7.png" alt=""/>
                                    <p>USB Charging Portal</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i8.png" alt=""/>
                                    <p >Wi Fi</p>
                                </div>
                                
                                

                            </div>
                            <br/><br/>
                           <Link className=" pt-5" to="/"><button className="btn btn-outline-primary w-75 rounded-pill"> Book now</button></Link>



                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className={`carousel-inner ${styles.inner}`}>
                                  <div className="carousel-item active">
                                    <img src="/img/bus/business-1.542db289.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/business-2.0cc6f5a1.jpeg" className=" w-100" alt="..."/>
                                  </div>
                                  
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                              

                        </div>
                    </div></div>
                <div className="tab-pane fade" id="nav-Comfort" role="tabpanel" aria-labelledby="nav-Comfort-tab"
                    tabindex="0"> <div className="row">
                        <div className="col-md-6">
                            <div className="row row-cols-6">
                                
                                <div className="col "><img className="w-100" src="/img/dvd.png" alt=""/>
                                    <p>DVD</p>
                                </div>
                               
                                <div className="col "><img className="w-100" src="/img/i3.png" alt=""/>
                                    <p>Air Conditioner</p>
                                </div>
                               
                                <div className="col "><img className="w-100" src="/img/i5.png" alt=""/>
                                    <p>Snacks and drinks</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i6.png" alt=""/>
                                    <p>WC</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i7.png" alt=""/>
                                    <p>USB Charging Portal</p>
                                </div>
                                <div className="col "><img className="w-100" src="/img/i8.png" alt=""/>
                                    <p >Wi Fi</p>
                                </div>
                                

                            </div>
                            <br/><br/>
                           <Link className=" pt-5" to="/"><button className="btn btn-outline-primary w-75 rounded-pill"> Book now</button></Link>



                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                                <div className={`carousel-inner ${styles.inner}`}>
                                  <div className="carousel-item active">
                                    <img src="/img/bus/comfort-1.91d39d27.jfif" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/comfort-2.c5174279.jfif" className=" w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="/img/bus/comfort-4.d581eac1.jpg" className=" w-100" alt="..."/>
                                  </div>
                                  
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                            

                        </div>
                    </div>
                    </div>
                    


            </div>
        </div>

    </div>
    </>
}
