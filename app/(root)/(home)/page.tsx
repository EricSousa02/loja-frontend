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
    </div>
  )
}

export default home