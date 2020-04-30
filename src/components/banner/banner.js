import React from 'react'
import './banner.css'
const Banner = ({ children, image,bgColor}) => {
  // const imagestyle={
  // backgroundImage:'url('+ image +')',
  // backgroundSize: '100% 100%',
  // backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  // height:'500px'

  // }
  return image ? (
    <div
      className="image-container"
      style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  ) : (
    <div className="banner-container" style={{background:bgColor}}>
      {children}
    </div>
  )
}

export default Banner
