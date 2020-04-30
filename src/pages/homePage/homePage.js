import React from 'react'
import Banner from '../../components/banner/banner'
import BannerTitle from '../../components/bannerTitle/bannerTitle'
import Button from '../../components/button/Button'
import BannerDescription from '../../components/bannerDescription/bannerDescription'

const HomePage = () => {
    return (
        <div>
            <Banner image = {'https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021_960_720.jpg'}>
                <BannerTitle title= {'titllll'}/>
                <BannerDescription  description={'Hello this is description'}/>
                <Button> click</Button>
              {'this is paragraph'}
            </Banner>
        </div>
    )
}

export default HomePage
