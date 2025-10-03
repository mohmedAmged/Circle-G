import React from 'react'
import HeroPageSec from '../../components/heroPageSec/HeroPageSec'
import MyServices from '../../components/MyServices/MyServices'
import WorkProcess from '../../components/workProcess/WorkProcess'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'

export default function MyAllServices({servicesArray}) {

    return (
        <div>
            <HeroPageSec title="Services" 
                linkItem={{ to: '/', text: 'Home' }} />
            <MyServices servicesArray={servicesArray}/>
            <WorkProcess />
            <LetsTalkSec />
        </div>
    )
}
