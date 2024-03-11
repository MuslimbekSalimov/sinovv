import "./Header.scss"
import Logo from '../Img/Logo.png'
import HomeLogo from "../Img/home.png" 
import ExploreLogo from "../Img/explore.png";
import NotificationLogo from "../Img/notification.png";
import MessagesLogo from "../Img/messages.png";
import BookmarksLogo from "../Img/bookmarks.png";
import ListsLogo from "../Img/lists.png";
import ProfileLogo from "../Img/profile outline.png";
import MoreLogo from "../Img/more.png";
import Ellipse from "../Img/Ellipse.png"
import Languages from "../Localization/Lacalization";
import { Context as LocalizationContext } from "../../Context/Localization";
import React from "react";
// import useTheme from "../../Context/Theme";.

function Header() {

    const {lang} = React.useContext(LocalizationContext)

    return (
        <>
        <header className="header">
            {/* <div className="container"> */}
                <a className="link" href="#logo">
                    <img className="header__img" src={Logo} alt="Logo" />
                </a>


                <ul className="header__list">
                    <li className="header__item">
                        <img src={HomeLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link}</a>
                    </li>

                    <li className="header__item">
                        <img src={ExploreLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link1}</a>
                    </li>

                    <li className="header__item">
                        <img src={NotificationLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link2}</a>
                    </li>

                    <li className="header__item">
                        <img src={MessagesLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link3}</a>
                    </li>

                    <li className="header__item">
                        <img src={BookmarksLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link4}</a>
                    </li>

                    <li className="header__item">
                        <img src={ListsLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link5}</a>
                    </li>

                    <li className="header__item">
                        <img src={ProfileLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link6}</a>
                    </li>

                    <li className="header__item">
                        <img src={MoreLogo} alt="HomeLogo" />
                        <a className="header__link" href="#Home">{Languages[lang].header.nav.header__link7}</a>
                    </li>

                    <button className="header__button">{Languages[lang].header.nav.Headr__button}</button>

                    <li className="header__itemPlus">
                        <img src={Ellipse} alt="HomeLogo" />

                        <div className="item__item">
                            <a className="headerrr__link" href="#Bobur">Bobur</a>
                            <br/>
                            <a className="headerr__heading" href="#@bobur_mavlonov">@bobur_mavlonov</a>
                        </div>

                        <a className="plus__pint" href="#More">...</a>
                    </li>
                </ul>
            {/* </div> */}
        </header>
        </>
    )
}

export default Header