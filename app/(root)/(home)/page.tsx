"use client";
import React from "react";
import "./home.css";
import Image from 'next/image'
import Card from "@/components/Card/Card";
import Banner from "@/components/Banner/Banner";
import { useEffect,useState } from "react";
import { animateHome } from "@/app/utils/animation";
import { bestSellers } from "@/constants/bestSellers";

const Home = () => {

  const [dateParts, setDateParts] = useState<{ day: string; month: string; year: string }>({
    day: '00', 
    month: '00',
    year: '00', 
  });

   useEffect(() => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear().toString().slice(-2);

    setDateParts({ day, month, year });
  }, []); 

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
                <h1 className="casual_title_f">Casual</h1>
                <h1 className="casual_title_s">Wear</h1>
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
           <Image
            className="new_collection_image"
              src={"/assets/homeImages/newCollection-image.jpg"}
              width={1000}
              height={1000}
              alt={"woman purple outfit"}
            />
        </div>
        <div className="best_sellers">
          <h2>Bestsellers</h2>
          <div className="best_sellers_products">
            {bestSellers.map(sellers=>(
                 <Card  key={sellers.id}
                 productImage={sellers.productImage}
                 productName={sellers.productName}
                 productPrice={sellers.productPrice}
                 />
            ))}
         </div> 
        </div>
        <div className="on_sale">
            <div className="banner_container">
              <Banner/>
            </div>
            <div className="date">
              <h3>{dateParts.day}/</h3>
              <h3>{dateParts.month}/</h3>
              <h3>{dateParts.year}</h3>
            </div>
            <div className="on_sale_text">
              <h1>Promotion</h1>
              <h1>Of the</h1>
              <h1>Day</h1>
            </div>
        </div>
        <div className="options">
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
