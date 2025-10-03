import React from 'react'
import './heroPageSec.css'
import { NavLink } from 'react-router-dom'
import arrow from '../../assets/svgIcons/arrow-right.png'
export default function HeroPageSec({ title, linkItem }) {
    return (
        <div className='heroPageSec__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heroPageSec__content">
                            <h1>
                                {title}
                            </h1>
                            <span>
                                <NavLink to={linkItem?.to} className="nav-link">
                                    {linkItem?.text}
                                </NavLink>
                                <i>
                                    <img src={arrow} alt="icon" />
                                </i>
                                {title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
