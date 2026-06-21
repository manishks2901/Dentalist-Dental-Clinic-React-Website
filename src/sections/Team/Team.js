import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import drShashin from '../../assets/dr_shashin_desai.png';

const Team = () => {

    const teams = [
        {
            'img': drShashin,
            'name': 'Dr. Shashin Desai',
            'role': 'Lead Dentist & Founder'
        }
    ];

    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle
                            subTitle="Meet our Team"
                            title="The expert behind Veloura Dental and Homoeopathy"
                        />
                    </div>
                    <div className="col-lg-5">
                        <p className='pt-5'>Our dedicated professional delivers quality dental and homoeopathic care with compassion, comfort, and excellence for every patient in Nikol, Ahmedabad.</p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {
                        teams.map((team, i) =>
                            <div className="col-lg-3 col-sm-6" key={i}>
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt={team.name} />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <p className="team-role">{team.role}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
