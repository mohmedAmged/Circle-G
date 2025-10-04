import React from 'react'
import './homeHeroSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
// import { Pagination } from 'swiper/modules';
import heroSlider1 from '../../assets/heroImgs/hero-slider-4.jpg'
import heroSlider2 from '../../assets/heroImgs/hero-slider-5.jpg'
import heroSlider3 from '../../assets/heroImgs/hero-slider-6.jpg'
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

import { useSpring } from '@react-spring/three';
const AnimatedCamera = () => {
    const { camera } = useThree();
    const { positionZ } = useSpring({
        from: { positionZ: 10 },
        to: { positionZ: 3 },
        config: { mass: 1, tension: 120, friction: 14 },
    });

    useFrame(() => {
        positionZ.get((z) => {
            const scrollOffset = Math.min(scrollY / 500, 1);
            camera.position.z = z + scrollOffset * 5;
            camera.position.y = scrollOffset * 1;
            camera.lookAt(0, 0, 0);
        });
    });

    return null;
};
export default function HomeHeroSlider() {
    // const slidesData = [
    //     {
    //         imgSrc: heroSlider1,
    //         title: "Best solution for your ",
    //         titText: "Business.",
    //         subTitle: "creative",
    //         description: "Holitech: Your premier business solution. Our team crafts innovative software & web-apps & apps tailored to your needs. Streamline operations, enhance customer experiences, & drive growth. Elevate your business with Holitech!",
    //         link1: "/about-us",
    //         link2: "/services",
    //         sliderNum: "01"
    //     },
    //     {
    //         imgSrc: heroSlider2,
    //         title: "Best solution for your ",
    //         titText: "Markets.",
    //         subTitle: "creative",
    //         description: "Holitech excels in market solutions. From research tools to customer engagement platforms, we help you understand markets, reach new territories, & drive sales. Conquer markets confidently with Holitech!",
    //         link1: "/about-us",
    //         link2: "/services",
    //         sliderNum: "02"
    //     },
    //     {
    //         imgSrc: heroSlider3,
    //         title: "Best solution for your ",
    //         titText: "Finance.",
    //         subTitle: "creative",
    //         description: "Unlock financial success with Holitech. Our software optimizes processes, streamlines operations, & maximizes profitability. From budgeting to payment processing, achieve financial excellence with Holitech!",
    //         link1: "/about-us",
    //         link2: "/services",
    //         sliderNum: "03"
    //     },
    // ];

    const slidesData = [
        {
            imgSrc: heroSlider1,
            title: "Innovative solutions for your ",
            titText: "Business.",
            subTitle: "Circle G",
            description:
                "Circle G delivers tailored business solutions to help brands grow and succeed. From strategy to digital transformation, we empower companies to streamline operations, boost customer engagement, and achieve sustainable growth.",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "01",
        },
        {
            imgSrc: heroSlider2,
            title: "Creative strategies for your ",
            titText: "Markets.",
            subTitle: "Circle G",
            description:
                "At Circle G, we design innovative marketing and branding strategies. Our team helps you understand your audience, expand into new markets, and build strong connections that drive measurable results.",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "02",
        },
        {
            imgSrc: heroSlider3,
            title: "Smart solutions for your ",
            titText: "Finance.",
            subTitle: "Circle G",
            description:
                "Circle G provides advanced financial and digital tools to simplify complex workflows. From budgeting to analytics, we enable organizations to optimize processes, reduce costs, and unlock new opportunities.",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "03",
        },
    ];
    return (
        <div className='homeHeroSlider__handler'>

            <div className=" position-absolute top-0 start-0 w-100 h-100">
                <Canvas className='position-absolute ' >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <AnimatedCamera scrollY={scrollX} />
                    <Sphere args={[3, 200, 600]} scale={2.3} position={[-4, 0, 0, -4]} >
                        <MeshDistortMaterial
                            color="#ffb703"
                            attach="material"
                            distort={.5}
                            speed={5}
                            roughness={0.2}
                            metalness={0.2}
                            wireframe={true}
                        //  emissive="#ffb703"
                        // emissiveIntensity={.5}

                        />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={6} />
                </Canvas>
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={1}
                    effect={"fade"}
                    speed={1000}
                    autoplay={{ delay: 6000 }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay, EffectFade]}

                    className="mySwiper"
                >
                    {
                        slidesData?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ zIndex: "100" }} className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="hero__slider__content__handler">
                                                <div className="hero__slider__content">
                                                    <div className="hero__content__img">
                                                        <img src={slide?.imgSrc} alt="hero_slider_img" />
                                                    </div>
                                                    <div className="hero__content">
                                                        <h2>
                                                            {slide?.subTitle}
                                                        </h2>
                                                        <h1>
                                                            {slide?.title}
                                                            <span> {slide?.titText}</span>
                                                        </h1>
                                                        <p>
                                                            {slide?.description}
                                                        </p>
                                                        <NavLink onClick={() => scrollToTop()} to={slide?.link1} className="nav-link hero__link about__btn">
                                                            About Us
                                                        </NavLink>
                                                        <NavLink onClick={() => scrollToTop()} to={slide?.link2} className="nav-link hero__link work__btn">
                                                            How we work
                                                        </NavLink>
                                                        <div className="slider__num">
                                                            <span>
                                                                {slide?.sliderNum}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="hero__socialMedia">
                    <ul className='social__list'>
                        <li>
                            <NavLink className="nav-link" to={''}>
                                FaceBook
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to={''}>
                                Instagram
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to={''}>
                                Linkedin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
