import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillShieldFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { FaUserMd, FaSyringe } from 'react-icons/fa';

const safetyPoints = [
    {
        icon: <BsFillShieldFill />,
        title: 'Strict Sterilisation',
        desc: 'All instruments are autoclaved and single-use items are disposed of after every patient to eliminate any risk of cross-contamination.'
    },
    {
        icon: <FaSyringe />,
        title: 'Modern Safe Equipment',
        desc: 'We use the latest dental technology and digital X-rays with minimal radiation to ensure accurate diagnosis and safe treatment.'
    },
    {
        icon: <FaUserMd />,
        title: 'Qualified Professionals',
        desc: 'Our team led by Dr. Shashin Desai is fully qualified and follows all guidelines set by the Dental Council of India.'
    },
    {
        icon: <BsFillCheckCircleFill />,
        title: 'Hygiene Protocols',
        desc: 'Our clinic at Nikol, Ahmedabad maintains the highest standards of cleanliness — from the waiting area to the treatment room.'
    }
];

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="Safety"
                    title="Your safety is our top priority"
                    description="At Veloura Dental and Homoeopathy, we follow strict safety and hygiene protocols so you can receive care with complete peace of mind."
                />

                <div className="row">
                    {safetyPoints.map((point, i) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                            <div className="safety-card">
                                <div className="safety-icon">{point.icon}</div>
                                <h4>{point.title}</h4>
                                <p>{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Safety;
