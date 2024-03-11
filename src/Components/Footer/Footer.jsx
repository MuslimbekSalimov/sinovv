import './Footer.scss'
import Search from "../Img/search.png"
import Settings from "../Img/settings.png"
import Mushhi from "../Img/Musshu.png"
import Bratana from "../Img/bratana.png"
import Languages from "../Localization/Lacalization";
import { Context as LocalizationContext } from "../../Context/Localization";
import React from "react";


function Footer( ) {

    const {lang} = React.useContext(LocalizationContext)

    return (
        <>
        <section className='footer'>
            <div className="footer__info">
                <div className="serach__div">
                    <img className='img' src={Search} alt="Search" width={24} height={24}/>
                    <input className='footer__input' type="search"  placeholder='Search Twitter'/>
                </div>

                <ul className='footer__list'>
                    <li className='footer__item'>
                        <h4 className='footer__heading'>{Languages[lang].footer.ffo.footer__heading}</h4>
                        <img className='settings' src={Settings} alt="Settings" width={24} height={24}/>      
                    </li> 

                    <li className='footer__item1'>
                        <div className="trend">
                            <h4 className='trend__heading plusss'>{Languages[lang].footer.ffo.trend__heading} 
                            </h4>
                            <h4 className='trend__text'>{Languages[lang].footer.ffo.trend__text}</h4>
                            <h4 className='trend__heading'>{Languages[lang].footer.ffo.trend__headingsss}</h4>
                        </div>
                        <p className='trend__nuqta'>...</p>
                    </li>

                    <li className='footer__item1'>
                        <div className="trend">
                            <h4 className='trend__heading'>{Languages[lang].footer.ffo.trend__heading}</h4>
                            <h4 className='trend__text'>{Languages[lang].footer.ffo.trend__text}</h4>
                            <h4 className='trend__heading'>{Languages[lang].footer.ffo.trend__headingsss}</h4>
                        </div>
                        <p className='trend__nuqta'>...</p>
                    </li>
                    <li className='footer__item1'>
                        <div className="trend">
                            <h4 className='trend__heading'>{Languages[lang].footer.ffo.trend__heading}</h4>
                            <h4 className='trend__text'>{Languages[lang].footer.ffo.trend__text}</h4>
                            <h4 className='trend__heading'>{Languages[lang].footer.ffo.trend__headingsss}</h4>
                        </div>
                        <p className='trend__nuqta'>...</p>
                    </li>

                    <button className='footer__button'>{Languages[lang].footer.ffo.footer__button}</button>
                </ul>

                <ul className='list'>
                    <h5 className='heading'>You might like</h5>
                    <li className='item__plus'>
                        <img src={Mushhi} alt="Mushhi" width={50} height={50}/>
                        <h5 className='mushhhu__heading'>Mushtariy <br/>
                            <span className='mushh_span'>@Mushtar565266</span>
                        </h5>

                        <button className='mushh__follow'>Follow</button>
                    </li>

                    <li className='item__plus'>
                        <img src={Bratana} alt="Mushhi" width={50} height={50}/>
                        <h5 className='mushhhu__heading'>Shuhratbek <br/>
                            <span className='mushh_span'>@mrshukhrat</span>
                        </h5>

                        <button className='mushh__follow'>Follow</button>
                    </li>


                    <button className='footer__button nsss'>{Languages[lang].footer.ffo.footer__button}</button>
                </ul>

                <p className='texxxxt'>Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
            </div>
        </section>
        </>
    )
}

export default Footer