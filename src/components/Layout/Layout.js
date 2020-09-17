import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import Navbar from '../Navbar/Navbar'
import NavModal from '../NavModal/NavModal'
import {ReactComponent as Facebook} from '../../assets/icon-facebook.svg'
import {ReactComponent as Pinterest} from '../../assets/icon-pinterest.svg'
import {ReactComponent as Twitter} from '../../assets/icon-twitter.svg'
import {ReactComponent as Instagram} from '../../assets/icon-instagram.svg'
import './Layout.scss'


const Layout = props => {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNavHandler = () => {
        setNavOpen(prevState => !prevState)
    }

    let burgerClass = "Burger"
    if(navOpen) {
        burgerClass += ' Burger--open'
    }

    return(
        <div className="Layout">
            <div className="Header__outer">
                <div className="Header">
                    <img src={Logo} alt="Logo" className="Header__logo"/>
                        <Navbar desktop/>
                        <NavModal show={navOpen} clicked={toggleNavHandler} mobile />
                    <div className={burgerClass} onClick={toggleNavHandler}>
                        <div className="Line"></div>
                    </div>
                </div>
            </div>
            {props.children}
            <div className="Footer">
                <div className="Footer__inner">
                    <img src={Logo} alt="Logo" className="Footer__logo"/>
                    <div className="Footer__lists">
                        <ul className="Footer__list">
                            <li className="Footer__list-title">Features</li>
                            <li className="Footer__list-item">Link shortening</li>
                            <li className="Footer__list-item">Branded Links</li>
                            <li className="Footer__list-item">Analytics</li>
                        </ul>
                        <ul className="Footer__list">
                            <li className="Footer__list-title">Resources</li>
                            <li className="Footer__list-item">Blog</li>
                            <li className="Footer__list-item">Developers</li>
                            <li className="Footer__list-item">Support</li>
                        </ul>
                        <ul className="Footer__list">
                            <li className="Footer__list-title">Company</li>
                            <li className="Footer__list-item">About</li>
                            <li className="Footer__list-item">Our Team</li>
                            <li className="Footer__list-item">Careers</li>
                            <li className="Footer__list-item">Contact</li>
                        </ul>
                    </div>
                    <div className="Footer__socials">
                        <Facebook className="icon-facebook"/>
                        <Twitter className="icon-twitter"/>
                        <Pinterest className="icon-pinterest"/>
                        <Instagram className="icon-instagram"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout