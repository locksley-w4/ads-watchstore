import React from 'react'
import './SliderList.css'

const SliderList = ({children, ...props}) => {
  return (
    <div className='sliderList' {...props}>
    <ul className='sliderList'>
        {children}
    </ul>
    </div>
  )
}

export default SliderList