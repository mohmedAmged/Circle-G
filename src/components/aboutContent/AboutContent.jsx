import React from 'react'
import './aboutContent.css'
import story1 from '../../assets/heroImgs/about-bottom.jpg'
import team1 from '../../assets/heroImgs/hero-slider-4.jpg'
import value1 from '../../assets/heroImgs/hero-slider-1.png'
import achive1 from '../../assets/heroImgs/hero-slider-6.jpg'
import AboutUsSec from '../aboutUsSec/AboutUsSec'
export default function AboutContent() {
    return (
        <div className='about__content__handler sec_margin'>
            <div className="container">
                <div className="our__story__handler">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image__item">
                                <div className="group__img">
                                    <img src={story1} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content__item">
                                <div className="main__title black">
                                    <span>INSIDE STORY</span>
                                    <h2>Crafting Innovative Solutions for Success.</h2>
                                </div>
                                <p>
                                    Holitech was founded with a vision to revolutionize the digital landscape by providing cutting-edge technology solutions. Our journey began with a small team of dedicated individuals passionate about innovation and creativity. Over the years, we've grown into a leading tech company, serving clients worldwide with our expertise in web and mobile application development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our__team__handler sec_margin">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content__item ">
                                <div className="main__title black">
                                    <span>Our Team</span>
                                    <h2>Meet Our Dedicated Team.</h2>
                                </div>
                                <p>
                                Our team is the backbone of Holitech, comprising talented developers, designers, and strategists who share a common goal of delivering excellence. We foster a culture of collaboration, creativity, and continuous learning, empowering each team member to contribute their unique skills and expertise to our projects.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image__item">
                                <div className="group__img">
                                    <img src={team1} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our__value__handler sec_margin">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image__item">
                                <div className="group__img">
                                    <img src={value1} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content__item">
                                <div className="main__title black">
                                    <span>Our Values</span>
                                    <h2>Guiding Principles.</h2>
                                </div>
                                <p>
                                    At Holitech, we are guided by a set of core values that define who we are and how we operate:
                                </p>
                                <ul>
                                    <li>
                                    <strong>Innovation:</strong> We constantly strive to push boundaries and explore new possibilities.
                                    </li>
                                    <li>
                                    <strong>Quality:</strong> We are committed to delivering products and services of the highest quality.
                                    </li>
                                    <li>
                                    <strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical integrity.
                                    </li>
                                    <li>
                                    <strong>Collaboration:</strong> We believe in the power of teamwork and collaboration to achieve success.
                                    </li>
                                    <li>
                                    <strong>Customer Satisfaction:</strong> We prioritize the needs and satisfaction of our clients above all else.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsSec/>
            <div className="container">
                <div className="our__achive__handler">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="image__item">
                                <div className="group__img">
                                    <img src={achive1} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content__item ">
                                <div className="main__title black">
                                    <span>Our Achievements</span>
                                    <h2>Milestones and Recognition.</h2>
                                </div>
                                <p>
                                Over the years, Holitech has achieved significant milestones and accolades, reflecting our commitment to excellence and customer satisfaction. Some of our notable achievements include:
                                </p>
                                <ul>
                                    <li>
                                    Successfully launching and maintaining a diverse portfolio of web and mobile applications for clients across various industries.
                                    </li>
                                    <li>
                                    Receiving recognition and awards for our innovative solutions and exceptional service delivery.
                                    </li>
                                    <li>
                                    Building long-lasting partnerships with clients based on trust, reliability, and mutual success.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
