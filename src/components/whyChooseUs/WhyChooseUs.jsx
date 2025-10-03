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
                                Why Choose HoliTech
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
                            <img src={demoImg} alt="img" />
                            <div className="skills__bar__handler">
                                <div className="single__skill__bar pt-0">
                                    <h6>
                                        web development
                                    </h6>
                                    <div className='parrent__div' dir='ltr' role='progressbar' aria-valuemin='85' aria-valuemax='100' aria-valuetext='85%'>
                                        <div className="first__div">
                                            <div className="second__div width_85">
                                            </div>
                                        </div>
                                        <span className='bar__tit'>85%</span>
                                    </div>
                                </div>
                                <div className="single__skill__bar">
                                    <h6>
                                        backend
                                    </h6>
                                    <div className='parrent__div' dir='ltr' role='progressbar' aria-valuemin='80' aria-valuemax='100' aria-valuetext='80%'>
                                        <div className="first__div">
                                            <div className="second__div width_80">
                                            </div>
                                        </div>
                                        <span className='bar__tit'>80%</span>
                                    </div>
                                </div>
                                <div className="single__skill__bar">
                                    <h6>
                                        app development
                                    </h6>
                                    <div className='parrent__div' dir='ltr' role='progressbar' aria-valuemin='70' aria-valuemax='100' aria-valuetext='70%'>
                                        <div className="first__div">
                                            <div className="second__div width_70">
                                            </div>
                                        </div>
                                        <span className='bar__tit'>70%</span>
                                    </div>
                                </div>
                                <div className="single__skill__bar">
                                    <h6>
                                        graphic design
                                    </h6>
                                    <div className='parrent__div' dir='ltr' role='progressbar' aria-valuemin='75' aria-valuemax='100' aria-valuetext='75%'>
                                        <div className="first__div">
                                            <div className="second__div width_75">
                                            </div>
                                        </div>
                                        <span className='bar__tit'>75%</span>
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
