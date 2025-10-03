import React from 'react'
import './aboutUsPage.css'
import HeroPageSec from '../../components/heroPageSec/HeroPageSec'
import AboutContent from '../../components/aboutContent/AboutContent'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'
export default function AboutUsPage() {
    return (
        <div>
            <HeroPageSec title="About Us"
                linkItem={{ to: '/', text: 'Home' }} />
            <AboutContent />
            <LetsTalkSec />
        </div>
    )
}
