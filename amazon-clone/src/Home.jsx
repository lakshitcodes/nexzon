import React from "react";
import "./Home.css";
import alexaImage from "./assets/alexa.jpeg";
import Product from "./Product";
import atomicHabits from "./assets/atomichabits.jpg";
import iphone from "./assets/iphone.jpg";
import speaker from "./assets/speaker.jpg";
import monitor from "./assets/monitor.jpg";
import echo from "./assets/echo.jpg";
import ipad from "./assets/ipad.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={alexaImage} alt="Alexa" className="home__image" />
        <div className="home__row">
          <Product
            id={864998723}
            title="Atomic Habits : The life-changing million copy"
            image={atomicHabits}
            price={522}
            rating={5}
          />
          <Product
            id={561157539}
            title="Apple iPhone 15 Pro (256 GB) - Natural Titanium"
            image={iphone}
            price={137990}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="741258974"
            title="Marshall Kilburn II Portable Bluetooth Speaker with 20+ hours of portable playtime, (360° sound), Water-Resistant (IPX2) – Black & Brass."
            image={speaker}
            price={25999}
            rating={3}
          />
          <Product
            id="452785543"
            title="Amazon Echo Dot 4th Gen with clock | Smart speaker with powerful bass, LED display and Alexa (Blue)"
            image={echo}
            rating={3}
            price={5499}
          />
          <Product
            id="965412574"
            title="Apple iPad Pro 11″ (M4): Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space Black"
            image={ipad}
            price={97099}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="324581268"
            title="Samsung 49-inch(124.4cm) Odyssey OLED G9 Dual QHD, 240Hz, 0.03ms Curved Gaming Monitor, USB Hub, HAS, Neo Quantum Processor, Smart TV, AMD FreeSync Premium Pro (LS49CG950SWXXL, Black)"
            price={166099}
            image={monitor}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
