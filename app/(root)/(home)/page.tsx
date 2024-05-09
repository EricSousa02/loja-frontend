"use client";
import React from "react";
import "./home.css";
import { useEffect } from "react";
import { animateHome } from "@/app/utils/animation";

const Home = () => {
  useEffect(() => {
    animateHome();
  }, []);

  return (
    <div className="home">
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
              <p>
                Elevate your style with our stunning formal wear collection.
              </p>
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
            <div className="casual_content">
              <div className="casual_title">
                <h1>Casual</h1>
                <h1>Wear</h1>
              </div>
              <div className="casual_sentences">
                <div className="sentence">
                  <p> where comfort and </p>
                  <p>confidence intertwine.</p>
                </div>
                <div className="m_sentence">
                  <h2>Positive</h2>
                  <h2>MOOD</h2>
                </div>
                <div className="sentence">
                  <p> the unofficial uniform of </p>
                  <p>cozy nights under the stars.</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="vixen_title">
              <h1>Vixen - Attire</h1>
              <p>emobides allure and sophistication</p>
            </div>

            <div className="vixen_subtitles">
              <span>Confident</span>
              <span>Captivating</span>
              <span>Alluring</span>
            </div>

            <div className="vixen_image">
              <h1 className="vixen_image_text">Discover the allure</h1>
            </div>
          </section>
        </div>
      </div>
      <div className="products_container">
        <div className="new_collection">
          <h1>New Collection</h1>
          <h3 className="new_collection-hl">This is fashion</h3>
          <img
            className="new_collection_image"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8821a6195279779.660b13f55b527.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
