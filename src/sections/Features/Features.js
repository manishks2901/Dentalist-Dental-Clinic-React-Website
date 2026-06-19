import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import IconList from '../../components/IconList/IconList';
import featuresData from './FeaturesData';

const Features = () => {
    return (
        <section className='section-bg section-common features-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="Features" title="Specialized dental and homeopathic care through experience" description="Veloura Dental and Homoeopathy combines expert dental treatments with holistic homeopathic care, delivering comprehensive health solutions for every patient."/>

                <div className="row align-items-center">
                    {
                        featuresData.map(singleFeature => 
                            <IconList 
                                icon={singleFeature.icon} 
                                title={singleFeature.title}
                                description={singleFeature.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;