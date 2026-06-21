import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const blogContent = {
    'new-technology-make-for-dental-operation': {
        category: 'TECHNOLOGY',
        paragraphs: [
            'At Veloura Dental and Homoeopathy, we stay at the forefront of modern dentistry by investing in the latest dental technology. From digital X-rays that reduce radiation exposure by up to 90% to intraoral cameras that give patients a clear view of their own dental health — technology is transforming the patient experience.',
            'Digital impressions have replaced traditional messy moulds, making procedures like crown fitting and teeth alignment faster, more comfortable, and more accurate. Our patients at Nikol, Ahmedabad benefit directly from these advances through shorter appointment times and better treatment outcomes.',
            'Laser dentistry is another breakthrough we use at Veloura Dental. Lasers allow us to treat gum disease, remove decay, and perform soft-tissue procedures with minimal pain, less bleeding, and faster healing — often without the need for anaesthesia.',
        ],
        quote: '" Modern dental technology means better accuracy, less discomfort, and faster recovery — making every visit to Veloura Dental a better experience than the last. "'
    },
    'regular-dental-care-make-your-smile-brighter': {
        category: 'DENTAL',
        paragraphs: [
            'Regular dental check-ups are the foundation of lifelong oral health. At Veloura Dental and Homoeopathy, we recommend visiting us every six months — not just to clean your teeth, but to screen for early signs of decay, gum disease, oral cancer, and other conditions that are far easier to treat when caught early.',
            'During a routine visit, our team performs a thorough examination, professional cleaning to remove plaque and tartar buildup, and a personalised oral health assessment. We also discuss your diet, hygiene habits, and any concerns you may have about your smile.',
            'Many patients wait until they feel pain before visiting the dentist. But by the time a toothache begins, decay or infection may already be advanced. Preventive care at our Nikol clinic saves you from complex, costly treatments down the line — and keeps your smile bright all year round.',
        ],
        quote: '" A brighter smile begins with regular care. Six-monthly visits to Veloura Dental are the single most effective step you can take for long-term oral health. "'
    },
    'dental-hygiene-for-all-age-to-make-smile': {
        category: 'HYGIENE',
        paragraphs: [
            'Good dental hygiene is a lifelong commitment that begins in childhood. At Veloura Dental and Homoeopathy, we see patients of all ages — from toddlers getting their first teeth to seniors managing dentures. Each life stage brings unique oral health needs, and we are here to guide every patient through them.',
            'For children, establishing brushing and flossing habits early prevents decay and sets the tone for healthy teeth into adulthood. We recommend parents bring children in for their first dental visit by age one. Our gentle approach helps children feel comfortable and builds a positive relationship with dental care.',
            'For adults and seniors, gum health becomes increasingly important. Gum disease is linked not only to tooth loss but also to systemic health conditions like diabetes and heart disease. Our homoeopathic treatments at Veloura Dental complement conventional dental care by supporting gum health and reducing inflammation naturally.',
        ],
        quote: '" Healthy teeth at every age are possible with the right guidance. Our team at Veloura Dental is here for your family from the first tooth to the last. "'
    }
};

const SingleBlog = () => {
    const { url } = useParams();
    const blog = BlogData.find(b => b.url === url);
    if (!blog) return null;

    const { title, img } = blog;
    const content = blogContent[url] || {
        category: blog.category,
        paragraphs: [blog.description],
        quote: '"Quality dental care changes lives — one smile at a time."'
    };

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <main className="single-blog-area">
                                <p className="single-blog-category">{content.category}</p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt={title} />

                                {content.paragraphs.map((para, i) => (
                                    <p className="single-blog-text" key={i}>{para}</p>
                                ))}

                                <blockquote className='single-post-quote'>{content.quote}</blockquote>

                                <p className="single-blog-text">
                                    To learn more or to book an appointment with Dr. Shashin Desai and the Veloura Dental team, visit us at 1st Floor, Omkar Plaza, Bhakti Cir Rd, Nikol, Ahmedabad, Gujarat 380049, or call us at <strong>+91 7802083597</strong>. Follow us on Instagram <strong>@VELOURADENTAL</strong> for daily tips and updates.
                                </p>
                            </main>
                        </div>

                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Stay Updated</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Your email address' />
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categories</h3>
                                    <ul>
                                        <li><Link to="/blogs">Technology</Link></li>
                                        <li><Link to="/blogs">Root Canal</Link></li>
                                        <li><Link to="/blogs">Teeth Whitening</Link></li>
                                        <li><Link to="/blogs">Oral Hygiene</Link></li>
                                        <li><Link to="/blogs">Homoeopathy</Link></li>
                                    </ul>
                                </div>

                                <div className="sidebar-contact mt-4">
                                    <h3 className="sidebar-heading">Book Appointment</h3>
                                    <p style={{fontSize:'14px'}}>Call us at <strong>+91 7802083597</strong> or visit Veloura Dental at Nikol, Ahmedabad.</p>
                                    <Link to="/contact" className="btn btn-primary w-100 mt-2" style={{borderRadius:'10px',background:'#1A253E',border:'none',fontWeight:600}}>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SingleBlog;
