import React from 'react'
import './workProcess.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import { NavLink } from 'react-router-dom';
import brainStorm from '../../assets/bg/brainStorm.jpg'
import design from '../../assets/bg/design.jpg'
import develop from '../../assets/bg/developing.jpg'
import testing from '../../assets/bg/oo.jpeg'
import deploy from '../../assets/bg/deploy.jpg'
import support from '../../assets/bg/support.jpg'
export default function WorkProcess() {
    const workProcess = [
        {
            mainImg: brainStorm,
            num: "01",
            mainTitle: "Brainstorm & Wirefirm",
            description: "We kickstart projects with wireframing & brainstorming sessions. Our team collaborates to outline project goals, functionalities, and user flows, ensuring a solid foundation for the design and development phases. Through wireframes and creative brainstorming, we refine ideas and lay the groundwork for a successful project."
        },
        {
            mainImg: design,
            num: "02",
            mainTitle: "Design & Prototyping",
            description: "Once the wireframes are approved, our design team creates high-fidelity mockups and prototypes. This phase focuses on refining the visual aspects of the project, including UI elements, color schemes, and branding, ensuring a cohesive and visually appealing design."
        },
        {
            mainImg: develop,
            num: "03",
            mainTitle: "Development & Iteration",
            description: "Our development team brings the designs to life, coding functional components and integrating features. Throughout the development process, we prioritize collaboration and communication, allowing for iterative improvements based on client feedback and testing."
        },
        {
            mainImg: testing,
            num: "04",
            mainTitle: "Testing & Quality Assurance",
            description: "Before deployment, we conduct rigorous testing to ensure the functionality, usability, and performance of the project. Our QA team meticulously checks for bugs, errors, and inconsistencies, guaranteeing a seamless user experience across devices and platforms."
        },
        {
            mainImg: deploy,
            num: "05",
            mainTitle: "Deployment & Launch",
            description: "Once the project passes testing and receives final approval, we proceed with deployment and launch. Our team handles the setup, configuration, and deployment of the project, ensuring a smooth transition to the production environment."
        },
        {
            mainImg: support,
            num: "06",
            mainTitle: "Maintenance & Support",
            description: "Even after launch, our commitment to our clients continues. We provide ongoing maintenance and support services to address any issues, implement updates, and ensure the long-term success and performance of the project."
        },
    ]
    return (
        <div className='workProcess__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xl-4">
                        <div className="main__title black">
                            <span>
                                How We Work
                            </span>
                            <h2>
                                Our Unique Work Process.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="workProcess__slider">
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={1}
                        effect={"fade"}
                        speed={200}
                        autoplay={{ delay: 6000 }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay, EffectFade]}

                        className="mySwiper"
                    >
                        {
                            workProcess.map((item, index)=>(
                                <SwiperSlide key={index}>
                                <>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="work__slider__img">
                                                <img src={item?.mainImg} alt="img" />
                                                <div className="work__process__inner">
                                                    <b>{item?.num}</b>
                                                    <h4>
                                                        {item?.mainTitle}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                                            <div className="work__process__content">
                                                <p>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
