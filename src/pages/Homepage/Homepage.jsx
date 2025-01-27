import React, { useState } from 'react'
import "./Homepage.css"
import Navbar from '../../components/Navbar/Navbar'
import HomepageHeader from './HomepageHeader/HomepageHeader'
import HomepageCategories from './HomepageCategories/HomepageCategories'
import Sidebar from '../../components/ui/Sidebar/Sidebar'
import Offers from './Offers/Offers'
import Brands from './Brands/Brands'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'

const Homepage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <div className='homepage'>
        <HomepageHeader setSidebarVisible={setSidebarVisible}/>
        <Sidebar setSidebarVisible={setSidebarVisible} visible={sidebarVisible}/>
        <h1 className='greeting'>Hello</h1>
        <h2>Choose Your Top Brands</h2>
        <HomepageCategories/>
        <Offers/>
        <Brands/>
        <FeaturedProducts/>
    </div>
  )
}

export default Homepage