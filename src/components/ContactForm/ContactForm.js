import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Dental Check-up</option>
                            <option>Root Canal Treatment</option>
                            <option>Teeth Whitening</option>
                            <option>Cosmetic Dentistry</option>
                            <option>Homoeopathic Treatment</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Department</label>
                        <select class="form-control">
                            <option>Dental Department</option>
                            <option>Homoeopathy Department</option>
                            <option>Cosmetic Dentistry</option>
                            <option>Preventive Care</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <a className="appointment-call" href="tel:7802083597" style={{textDecoration:'none'}}>
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Call Us Now</p>
                            <h6>+91 7802083597</h6>
                        </div>
                    </a>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;