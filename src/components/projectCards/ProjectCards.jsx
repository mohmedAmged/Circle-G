import React from 'react'
import './projectCards.css'
import { NavLink } from 'react-router-dom'
import searchIcon from '../../assets/svgIcons/search-interface-symbol.png'
export default function ProjectCards({ projcetCards }) {
    return (
        <div className='projectCards__handler sec_margin'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 col-xl-7">
                        <div className="main__title black">
                            <span>Case Study</span>
                            <h2>A diversified resilient portfolio.</h2>
                        </div>
                    </div>
                </div>
                <div className="project__items__handler">
                    <div className="row g-4">
                        {
                            projcetCards?.map((el, index)=>(
                            <div key={index} className="col-md-6 col-lg-4 col-xl-4">
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
                                            <NavLink to={`/projects/${el.title.toLowerCase()}`} className="nav-link case__btn">
                                                Case Study
                                            </NavLink>
                                            <NavLink to={`/projects/${el.title.toLowerCase()}`} className="nav-link">
                                                <img src={searchIcon} alt="icon" />
                                            </NavLink>
                                        </div>
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
