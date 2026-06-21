import React from 'react';
import './Faq.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Faq = () => {
    return (
        <section className='faq-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="FAQ"
                    title="Frequently Asked Questions"
                    description="Have questions about our dental and homoeopathic services? We have answers."
                />

                <div className="accordian-area">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How often should I visit Veloura Dental for a check-up?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We recommend visiting us every 6 months for a routine dental check-up and cleaning. Regular visits allow our team to detect any issues early, prevent tooth decay, and keep your smile healthy. Patients with specific dental conditions may need more frequent visits — our team will advise you accordingly.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Is root canal treatment painful?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Modern root canal treatment at Veloura Dental is virtually painless. We use advanced techniques and local anaesthesia to ensure your complete comfort throughout the procedure. Most patients are surprised by how comfortable the experience is. Post-treatment discomfort is minimal and manageable with over-the-counter pain relief.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What homoeopathic treatments do you offer alongside dental care?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Veloura Dental and Homoeopathy is unique in offering personalised homoeopathic treatments that complement your dental care plan. We address concerns like tooth sensitivity, gum inflammation, oral ulcers, and general oral wellness through natural homoeopathic remedies — tailored specifically to your health profile.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Do you offer teeth whitening and cosmetic dentistry?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes! We offer professional teeth whitening, cosmetic bonding, smile makeovers, and a full range of cosmetic dentistry services. Our treatments are safe, effective, and tailored to give you a brighter, more confident smile. Visit us at Omkar Plaza, Nikol, Ahmedabad, or call +91 7802083597 to book a consultation.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
