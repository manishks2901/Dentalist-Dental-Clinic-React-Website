import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/dr_shashin_desai.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle
                                subTitle="EXPERTS IN DENTAL & HOMOEOPATHY"
                                title="Top-notch dentistry and homeopathic care from Ahmedabad's trusted clinic."
                                description="Our expert team at Veloura Dental and Homoeopathy delivers preventive, cosmetic, and restorative dental care alongside personalized homeopathic treatments."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Expert dental and homeopathic team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Modern, state-of-the-art dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Comprehensive care for patients of all ages
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="Dr. Shashin Desai" />
                            <div className="expert-name-badge">
                                <h5>Dr. Shashin Desai</h5>
                                <p>Lead Dentist, Veloura Dental</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;