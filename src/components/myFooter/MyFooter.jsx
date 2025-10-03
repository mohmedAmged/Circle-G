import React from 'react'
import './myFooter.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo-03.png'
import { scrollToTop } from '../../functions/scrollToTop';
export default function MyFooter() {
    return (
        <footer className='myFooter__handler'>
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer__box">
                                <div className="footer__logo">
                                    <NavLink onClick={()=>scrollToTop()} to={'/'}>
                                        <img src={logo} loading='lazy' alt="logo" />
                                    </NavLink>
                                </div>
                                <ul className='footer__socialMedia'>
                                    <li>
                                        <a href="" target='blank' title='facebook'>
                                            <i class="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" target='blank' title='instagram'>
                                            <i class="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" target='blank' title='linkedin'>
                                            <i class="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li >
                                        <a href="" target='blank' title='twitter'>
                                            <i class="bi bi-twitter-x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer__box">
                                <h4>
                                    our services
                                </h4>
                                <ul className='footer__menu'>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services/Web Development'}>
                                            Web Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services/App Development'}>
                                            App Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services/Ai Development'}>
                                            Ai Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services/Backend'}>
                                            Backend Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services/Technical Support'}>
                                        Technical Support
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer__box">
                                <h4>
                                Company
                                </h4>
                                <ul className='footer__menu'>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/about-us'}>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/services'}>
                                            Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>scrollToTop()} to={'/projects'}>
                                            Projects
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="footer__box">
                                <h4>
                                Contacts
                                </h4>
                                <div className="phone__numbers">
                                    <div className="phone__icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="phone">
                                        <a href="tel:01005322028">+20 100 5322 028</a>
                                        <a href="tel:01554145010">+20 155 4145 010</a>
                                    </div>
                                </div>
                                <div className="official__mail">
                                    <div className="mail__icon">
                                        <i className="bi bi-envelope-at"></i>
                                    </div>
                                    <div className="email">
                                        <a href="mailto:mohamedamged55555@gmail.com">
                                        circle-G@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                        <div class="copy__text text-center">
                            <span>
                                Copyright 2024 <b>HOLITECH</b> | Design By <a rel="noopener noreferrer" href="https://www.egenslab.com/" target="_blank" >Egens Lab</a>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
