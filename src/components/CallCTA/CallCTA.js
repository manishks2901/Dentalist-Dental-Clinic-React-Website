import React from 'react';
import './CallCTA.scss';
import { FaPhone } from 'react-icons/fa';

const CallCTA = () => {
    return (
        <a className="call-cta" href="tel:7802083597" aria-label="Call Veloura Dental">
            <FaPhone className="call-cta-icon" />
            <span className="call-cta-label">+91 7802083597</span>
        </a>
    );
};

export default CallCTA;
