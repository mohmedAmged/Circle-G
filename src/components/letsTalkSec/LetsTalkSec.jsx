import React from 'react'
import './letsTalkSec.css'
import { NavLink } from 'react-router-dom'
import {handleGetInTouch} from '../../functions/getInTouch'
export default function LetsTalkSec() {
    return (
        <div className='letsTalk__handler sec_padding'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-9 col-lg-8 col-xl-7">
                        <div className="main__title special">
                                <span>
                                    Let’s Talk
                                </span>
                                <h2>
                                    About Your Next <br/> 
                                    <b>
                                    Project 
                                    </b>
                                    <p>
                                        in your mind
                                    </p>
                                </h2>
                            </div>
                        </div>
                    <div className="col-md-3 col-lg-4 col-xl-5 text-end">
                    <NavLink target="_blank" className='nav-link talk_btn'>
                                <div onClick={handleGetInTouch} className="get__touch__btn hover__effect">
                                    get in touch
                                </div>
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
