import React from 'react'
import Banner from '../../components/banner/banner'
import BannerTitle from '../../components/bannerTitle/bannerTitle'
import BannerDescription from '../../components/bannerDescription/bannerDescription'


const Service = () => {
    return (
        <div>
            <Banner bgColor='red'>
                <BannerTitle title= {'titllll'}/>
                <BannerDescription description={'this is description'} />
                
            </Banner>
        </div>
    )
}

export default Service