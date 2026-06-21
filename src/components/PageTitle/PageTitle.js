import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, description }) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>{title || 'Dental Health Blog'}</h2>
                <p>{description || 'Stay updated with the latest dental health tips, treatment guides, and news from Veloura Dental and Homoeopathy, Nikol, Ahmedabad.'}</p>
            </div>
        </div>
    );
};

export default PageTitle;
