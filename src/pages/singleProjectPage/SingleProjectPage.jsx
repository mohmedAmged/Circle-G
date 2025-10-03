import React from 'react'
import HeroPageSec from '../../components/heroPageSec/HeroPageSec'
import { useParams } from 'react-router-dom';
import ProjectDetailsSec from '../../components/projectDetailsSec/ProjectDetailsSec';
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec';

export default function SingleProjectPage({projectDetails, projcetCards}) {
    const { projectName } = useParams();
    const itemData = projectDetails?.find(itemData => itemData?.projectName?.toLowerCase() === projectName?.toLowerCase());

    return (
        <div>
                <HeroPageSec title={projectName}
                linkItem={{ to: '/', text: 'Home' }} />
                <ProjectDetailsSec projcetCards={projcetCards} itemData={itemData}/>
                <LetsTalkSec />
        </div>
    )
}
