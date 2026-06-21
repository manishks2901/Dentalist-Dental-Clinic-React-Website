import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBanner.scss';
import serviceBanner from '../../assets/servicePage/1.png';

const ServiceBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Our Dental Services</h2>
                                    <p>From routine dental check-ups and root canal treatments to teeth whitening, cosmetic dentistry, and personalised homoeopathic care — Veloura Dental provides comprehensive healthcare under one roof at Nikol, Ahmedabad.</p>
                                    <div className="theme-btn">
                                        <Link to="/contact">Book an appointment</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                                    <img src={serviceBanner} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;