import React from 'react'
import HomeContent from './HomeContent/HomeContent'
import Target from './Target/Target'
import "./home.css"
import HomeProd from './HomeProd/HomeProd'


const Home = () => {
  return (
    <div>
        <div className='box-home'>
          <HomeContent/>
          <Target/>
        </div>
        <HomeProd/>
    </div>
  )
}

export default Home