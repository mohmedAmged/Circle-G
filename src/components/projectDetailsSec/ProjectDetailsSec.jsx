import React from 'react'
import './projectDetailsSec.css'
import { NavLink } from 'react-router-dom'
import overview1 from '../../assets/projectcardDetails/overview-1.jpg'
import launch from '../../assets/bg/deploy.jpg'
import HomeProjects from '../homeProjects/HomeProjects'
export default function ProjectDetailsSec({itemData, projcetCards}) {
    return (
        <div className='projectDetailsSec__handler sec_margin'>
            <div className="container">
                <div className="project__main__details">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 col-md-2 col-sm-12 my-sm-3">
                            <div className="project__item__detail">
                                <h4>
                                    client:
                                </h4>
                                <span>
                                    {itemData?.clientName}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 my-sm-3">
                            <div className="project__item__detail">
                                <h4>
                                Services:
                                </h4>
                                <span>
                                    {itemData?.servicesMade}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 my-sm-3">
                            <div className="project__item__detail">
                                <h4>
                                Link:
                                </h4>
                                <span>
                                    <NavLink className="nav-link link__view" to={itemData?.websiteLink} target="_blank">
                                        view project
                                        <i className="bi bi-arrow-up-right-circle"></i>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 my-sm-3">
                            <div className="project__item__detail">
                                <h4>
                                Start Date:
                                </h4>
                                <span>
                                    {itemData?.startDate}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 my-sm-3">
                            <div className="project__item__detail">
                                <h4>
                                End Date:
                                </h4>
                                <span>
                                    {itemData?.endDate}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="project__banner">
                                <img src={itemData?.projectImg} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="project__overview">
                        <h3>
                        OVERVIEW
                        </h3>
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-5">
                                <div className="overview__img">
                                    <img src={overview1} alt="img" />
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-7">
                                <div className="overview__content">
                                    <h3>
                                    Our Client Work Brief
                                    </h3>
                                    <p>
                                        {itemData?.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project__process">
                        <h3>
                        PROJECT PROCESS
                        </h3>
                        <div className="row">
                            {
                                itemData.workProcess.map((el, index)=>(
                                    <div key={index} className="col-md-6 col-lg-3 col-xl-3">
                                        <div className="project__single__process">
                                            <h4>
                                                <span>
                                                    {el?.processNum}
                                                </span>
                                                {el?.processName}
                                            </h4>
                                            <div className="project__process__img">
                                                <img src={el?.processImg} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="project__launch">
                        <h3>
                            check & launch
                        </h3>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="overview__content">
                                    <p>
                                        {itemData?.checkAndLaunch}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="overview__img">
                                    <img src={launch} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="related__projects">
                    <HomeProjects projcetCards={projcetCards}/>
                </div> */}
        </div>
    )
}
