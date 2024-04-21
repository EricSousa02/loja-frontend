import React from 'react'
import "./home.css"
import { logoIcon } from '@/constants'
import Image from 'next/image'

const home = () => {
  return (
    <div className='home'>
      <header>
        <nav>
          <a href="#">index</a>
          <a href="#">index</a>
          <a className='logo' href="#">
            <Image
              src={logoIcon}
              width={50}
              height={50}
              alt="logo image"
            /></a>
          <a href="#">index</a>
          <a href="#">index</a>
        </nav>
      </header>

      <div className="home_content">
          <div className="home_image"></div>
          <div className="home_circle"></div>
          <div className="home_title">
            <h2> U're in love</h2>
            <h2>with/</h2>
            <h3>Moda</h3>
          </div>
      </div>
    </div>
  )
}

export default home