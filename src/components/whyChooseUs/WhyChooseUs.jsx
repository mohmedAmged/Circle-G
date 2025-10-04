import React from 'react'
import './whyChooseUs.css'
import demoImg from '../../assets/heroImgs/hero-slider-5.jpg'
import demoImg2 from '../../assets/heroImgs/hero-slider-6.jpg'
export default function WhyChooseUs() {
    return (
        <div className='whyChooseUs__handler sec_margin'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className="main__title black">
                            <span>
                                Why Choose Circle g
                            </span>
                            <h2>
                                success is just around the next online corner.
                            </h2>
                        </div>
                        <div className="image__left__demo">
                            <img src={demoImg2} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <div className="skills__info__handler">
                            <img src={demoImg} alt="skills demo" />
                            <div className="skills__bar__handler">

                                <div className="single__skill__bar pt-0">
                                    <h6>Software Solutions</h6>
                                    <div
                                        className="parrent__div"
                                        dir="ltr"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="90"
                                        aria-valuetext="90%"
                                    >
                                        <div className="first__div">
                                            <div className="second__div width_90"></div>
                                        </div>
                                        <span className="bar__tit">90%</span>
                                    </div>
                                </div>

                                <div className="single__skill__bar">
                                    <h6>Branding & Design</h6>
                                    <div
                                        className="parrent__div"
                                        dir="ltr"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="85"
                                        aria-valuetext="85%"
                                    >
                                        <div className="first__div">
                                            <div className="second__div width_85"></div>
                                        </div>
                                        <span className="bar__tit">85%</span>
                                    </div>
                                </div>

                                <div className="single__skill__bar">
                                    <h6>Business Solutions</h6>
                                    <div
                                        className="parrent__div"
                                        dir="ltr"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="80"
                                        aria-valuetext="80%"
                                    >
                                        <div className="first__div">
                                            <div className="second__div width_80"></div>
                                        </div>
                                        <span className="bar__tit">80%</span>
                                    </div>
                                </div>

                                <div className="single__skill__bar">
                                    <h6>Marketing & Content</h6>
                                    <div
                                        className="parrent__div"
                                        dir="ltr"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow="75"
                                        aria-valuetext="75%"
                                    >
                                        <div className="first__div">
                                            <div className="second__div width_75"></div>
                                        </div>
                                        <span className="bar__tit">75%</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
