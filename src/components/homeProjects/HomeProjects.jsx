import React from 'react'
import './homeProjects.css'
import { NavLink } from 'react-router-dom'
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import searchIcon from '../../assets/svgIcons/search-interface-symbol.png'
import { scrollToTop } from '../../functions/scrollToTop';

export default function HomeProjects({projcetCards}) {
    return (
        <div className='homeProjects__handler sec_padding'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 col-xl-7">
                        <div className="main__title black">
                            <span>Case Study</span>
                            <h2>A diversified resilient portfolio.</h2>
                            <NavLink onClick={()=>scrollToTop()} to={'/projects'} className='nav-link'>
                                <div className="get__touch__btn hover__effect">
                                    view all projects
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="projects__slider__handler">
                            <Swiper
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: false
                                }}
                                // loop
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    480: {

                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    600: {

                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    767: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1181: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    }
                                }}
                                className="mySwiper">
                                {projcetCards?.map((el) => (
                                    <SwiperSlide>

                                        <div className="single__project__card">
                                            <div className="project__data">
                                                <NavLink className="nav-link">
                                                    <img src={el?.img} alt="" />
                                                </NavLink>
                                            </div>
                                            <div className="project__inner">
                                                <span>{el?.subTitle}</span>
                                                <h4>
                                                    {el?.title}
                                                </h4>
                                                <div className="project__hover">
                                                    <NavLink onClick={()=>scrollToTop()} to={`/projects/${el.title.toLowerCase()}`} className="nav-link case__btn">
                                                        View Details
                                                    </NavLink>
                                                    <NavLink onClick={()=>scrollToTop()} to={`/projects/${el.title.toLowerCase()}`}className="nav-link">
                                                        <img src={searchIcon} alt="icon" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
