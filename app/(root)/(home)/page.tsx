"use client"
import React from 'react'
import "./home.css"
import { logoIcon } from '@/constants'
import Image from 'next/image'
import { useEffect } from 'react'
import { animateHome } from '@/app/utils/animation'



const Home = () => {
  useEffect(()=>{
    animateHome()
  },[])

  return (
    <div className='home'>
      <header>
         <Image
              src={logoIcon}
              width={50}
              height={50}
              alt="logo image"
            />     
        <nav>
          <a href="#">Index</a>
          <a href="#">Index</a>
          <a href="#">Index</a>
        </nav>
        <div className="btn_translate">
          <p>translate</p>
        </div>
      </header>
      <div className="home_content_container">
        <div className="home_content">
          <div className="home_circle">
            <div className="home_title">
              <h2> U're in love</h2>
              <h2>with/</h2>
              <h3>Moda</h3>
            </div>
          </div>
          <div className="home_texts">
            <h3>Moda</h3>
            <h3>Elegance</h3>
            <h3>Style</h3>
          </div>
        </div>
      </div>
      <div className="style_container">
        <div className="style_slider">
          <section>
            <div className="formal_image">
              <p> boost confidence and project a sense of authority.</p>
              <p>Elevate your style with our stunning formal wear collection.</p>
            </div>
            <div className="formal_title">
              <h1>Formal</h1>
              <h1>Atteri</h1>

              <div className="formal_subTitle">
              <p>New Generations</p>
              <p>Beautiful Styles</p>
            </div>
            </div>
          </section>
          <section>
            Deuxiéme Section
          </section>
          <section>
            Troisiem Section
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home;