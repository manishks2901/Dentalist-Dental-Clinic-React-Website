import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps?q=Veloura+Dental+and+Homoeopathy,+Omkar+Plaza,+Bhakti+Cir+Rd,+Nikol,+Ahmedabad,+Gujarat+380049&output=embed'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>1st Floor, Omkar Plaza, Bhakti Cir Rd, Nikol, Ahmedabad, Gujarat 380049</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Veloura Dental and Homoeopathy is our pleasure"
                            description="Book an appointment with our expert team. We offer dental and homeopathic treatments with compassion and professional excellence for patients of all ages."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;