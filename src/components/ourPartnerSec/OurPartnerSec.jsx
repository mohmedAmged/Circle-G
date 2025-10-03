import React from 'react'
import './ourPartnerSec.css'
import { NavLink } from 'react-router-dom'
export default function OurPartnerSec({partnerArr}) {
    return (
        <div className='partnerSec__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main__title">
                                <span>Our partner</span>
                                <h2>Join our HoliTech community.</h2>
                            </div>
                        </div>
                </div>
                <div className="our__community">
                    <div className="row">
                        {
                            partnerArr?.map((el, index)=>(
                            <div key={index} className="col-lg-4">
                                <div className="single__commun">
                                    <img src={el?.logo} alt="" />
                                    <div className="single__hover">
                                        <span>
                                            <NavLink target='blank' to={el?.link} className="nav-link">
                                                {el?.link}
                                            </NavLink>
                                        </span>
                                    </div>
                                </div>
                        </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
