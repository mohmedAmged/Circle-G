import React from 'react'
import HeroPageSec from '../../components/heroPageSec/HeroPageSec'
import ProjectCards from '../../components/projectCards/ProjectCards'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'

export default function MyProjectsPage({projcetCards}) {
    return (
        <div>
            <HeroPageSec title="Our projects"
                linkItem={{ to: '/', text: 'Home' }} />
            <ProjectCards projcetCards={projcetCards}/>
            <LetsTalkSec />
        </div>
    )
}
