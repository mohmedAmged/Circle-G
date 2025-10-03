import React from 'react'
import './singleServicePage.css'
import { useParams } from 'react-router-dom';
import HeroPageSec from '../../components/heroPageSec/HeroPageSec';
import ServiceDetailSec from '../../components/serviceDetailSec/ServiceDetailSec';
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec';
export default function SingleServicePage({ servicesArray, servicesInformation }) {
    const { serviceName } = useParams();
    const service = servicesInformation?.find(service => service?.serviceName?.toLowerCase() === serviceName?.toLowerCase());
    return (
        <div>
            <HeroPageSec title={serviceName}
                linkItem={{ to: '/', text: 'Home' }} />
            <ServiceDetailSec service={service}/>
            <LetsTalkSec />
        </div>
    )
}
