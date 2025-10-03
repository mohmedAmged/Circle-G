import './myMainHome.css'
import HomeHeroSlider from '../../components/homeHeroSlider/HomeHeroSlider'
import MyServices from '../../components/MyServices/MyServices'
import AboutUsSec from '../../components/aboutUsSec/AboutUsSec'
// import HomeProjects from '../../components/homeProjects/HomeProjects'
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs'
import LetsTalkSec from '../../components/letsTalkSec/LetsTalkSec'
import OurPartnerSec from '../../components/ourPartnerSec/OurPartnerSec'
export default function MyMainHome({servicesArray,  partnerArr}) {

    return (
        <>
            <HomeHeroSlider />
            <MyServices servicesArray={servicesArray?.slice(0,4)}/>
            <AboutUsSec />
            <OurPartnerSec partnerArr={partnerArr}/>
            {/* <HomeProjects projcetCards={projcetCards}/> */}
            <WhyChooseUs />
            <LetsTalkSec />
        </>
    )
}
