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
                                    <h2>Empowering Businesses with Smart Solutions.</h2>
                                </div>
                                <p>
                                    Circle G was built on the vision of helping businesses grow through innovation, creativity,
                                    and strategy. What started as a small team of passionate creators has evolved into a
                                    full-service solutions partner. Today, we specialize in delivering <strong>software solutions</strong>,
                                    <strong>branding & design</strong>, <strong>business strategies</strong>, and <strong>marketing & content</strong>
                                    that empower our clients to achieve lasting success in an ever-changing digital world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our__team__handler sec_margin">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content__item">
                                <div className="main__title black">
                                    <span>Our Team</span>
                                    <h2>Meet the Minds Driving Innovation.</h2>
                                </div>
                                <p>
                                    At Circle G, our team is the heart of everything we do. From visionary
                                    strategists and creative designers to skilled developers and marketing
                                    experts, each member brings unique expertise and passion to the table.
                                    Together, we blend technology, creativity, and business insight to craft
                                    solutions that empower brands, accelerate growth, and shape meaningful
                                    digital experiences.
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
                                    <h2>Principles That Drive Us Forward.</h2>
                                </div>
                                <p>
                                    At Circle G, our values are the foundation of everything we create and the way we connect with our partners and clients:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Innovation:</strong> We embrace change, explore bold ideas, and
                                        deliver solutions that shape the future.
                                    </li>
                                    <li>
                                        <strong>Excellence:</strong> We go beyond quality, ensuring every detail
                                        reflects our commitment to perfection.
                                    </li>
                                    <li>
                                        <strong>Integrity:</strong> We build trust through honesty, transparency,
                                        and accountability in every interaction.
                                    </li>
                                    <li>
                                        <strong>Collaboration:</strong> We thrive on teamwork, uniting creativity,
                                        strategy, and technology to achieve impact.
                                    </li>
                                    <li>
                                        <strong>Client Success:</strong> We measure our success by the growth,
                                        satisfaction, and long-term value we bring to our clients.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsSec />
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
                            <div className="content__item">
                                <div className="main__title black">
                                    <span>Our Achievements</span>
                                    <h2>Milestones That Define Our Journey.</h2>
                                </div>
                                <p>
                                    At Circle G, every milestone tells a story of innovation, dedication, and
                                    the trust our clients place in us. Here are some highlights that showcase
                                    our growth and impact:
                                </p>
                                <ul>
                                    <li>
                                        Successfully delivering a wide range of software, branding, and digital
                                        solutions that empower businesses across multiple industries.
                                    </li>
                                    <li>
                                        Earning recognition for our forward-thinking strategies, creative design,
                                        and outstanding customer experiences.
                                    </li>
                                    <li>
                                        Establishing strong, long-term partnerships with clients built on
                                        reliability, transparency, and shared success.
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
