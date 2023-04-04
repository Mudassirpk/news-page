import React from "react";
import "./Hero.scss";
type Props = {};
import HeroDesktopImage from "./../../assets/images/image-web-3-desktop.jpg";
function Hero({}: Props) {
  return (
    <section className="hero">
      <div className="left">
        <div className="left-top">
          <img src={HeroDesktopImage} alt="" />
        </div>
        <div className="left-bottom">
          <div className="left-bottom-left">
            <h1>The Bright Future of Web3?</h1>
          </div>
          <div className="left-bottom-right">
            <p>
              {" "}
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>New</h1>
        <div className="content-box">
          <div className="content">
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="content">
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="content">
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding VC firms is down 50% YOY.We take a look at what
              that means
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
