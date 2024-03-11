import "./Hero.scss"
import Cutomize from "../Img/Customize.png"
import Brat from "../Img/Brat.png"
import Bratan from "../Img/Bratan.png"
import Framae from "../Img/Frame.png"
import Hammasi from "../Img/hammasi.png"
import BestOption from "../Img/BestOption.png";
import BestOptinImg from "../Img/bestOptionn.png"
import Abetlik from "../Img/Abetlik.png"
import Languages from "../Localization/Lacalization";
import { Context as LocalizationContext } from "../../Context/Localization";
import { Context as ThemeContext } from "../../Context/Theme"
import React from "react";

function Hero() {

  const {lang, setLang} = React.useContext(LocalizationContext)

  const {theme, setTheme} = React.useContext(ThemeContext)


  // console.log(theme);

  return(
    <>
    <section className="hero">
      {/* <hr className="line"/> */}
      <div className="hero__info">
         <h1 className="hero__heading">{Languages[lang].hero.hh.hero__heading}</h1>


<div className="div">

    <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
      <option value="default">Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
   </select> 

        <select value={lang} onChange={(evt) => setLang(evt.target.value)}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

        <img src={Cutomize} alt="Cutomize" />
        </div>
      </div>

      <hr className="line0"/>

      <ul className="hero__list">
        <div className="div">
        <li className="hero__item">
          <img src={Bratan} alt="Bratan"  width={60} height={60}/>
        </li>

        <li className="hero__item">
          <h2 className="hero__h2">{Languages[lang].hero.hh.hero__h2}</h2>

          <picture>
            <img src={Framae} alt="Framae"  width={200} height={20}/>
          </picture>
        </li>
        </div>

        <li className="hero__item">
          <button className="hero__button">{Languages[lang].header.nav.Headr__button}</button>
        </li>
      </ul>

      <hr className="separateLine"/>

      {/* Brat Line */}
      <div className="fisrtBrat">
        <picture>
          <img src={Brat} alt="Brat" width={60} height={60} />
        </picture>

        <div className="disign__own">
          <h3 className="design__heading">Designsta 
            <span className="design__span">@inner · 25m</span>
          </h3>
          <p className="design__text">{Languages[lang].hero.hh.design__text}</p>

          <picture>
            <img className="hammasi__img" src={Hammasi} alt="Hammasi" />
          </picture>

        </div> 
          <button className="design__button">...</button>
      </div>

      <hr className="best__line"/>

      {/* Best Line */}

      <div className="bestBrat">
        <picture>
          <img src={BestOption} alt="Best__Brat" width={60} height={60} />
        </picture>

        <div className="best__own">
          <h3 className="best__heading">cloutexhibition 
            <span className="best__span">@RajLahoti · 22m</span>
          </h3>
          <p className="best__text">{Languages[lang].hero.hh.best__text}</p>

          <picture>
            <img className="best__img" src={BestOptinImg} alt="Hammasi" />
          </picture>

        </div> 
          <button className="design__button best__button">...</button>
      </div>


      <hr className="best__line"/>



      <div className="photobrat">
        <picture>
          <img src={BestOption} alt="photo__Brat" width={60} height={60} />
        </picture>

        <div className="photo__own">
          <h3 className="photo__heading">CreativePhoto 
            <span className="photo__span">@cloutexhibition · 1h</span>
          </h3>
          <p className="photo__text">Обетда.....  <br/>
          Кечиринглар</p>

          <picture className="photo__pic">
            <img className="photo__img" src={Abetlik} alt="Abetlik" width={586} height={24} />
            <img src={Hammasi} alt="" />
          </picture>

        </div> 
          <button className="design__button photo__button">...</button>
      </div>
      
      <hr className="finish__line"/>

    </section>
    </>
  )
}

export default Hero