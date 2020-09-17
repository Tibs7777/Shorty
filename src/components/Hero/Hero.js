import React from 'react'
import './Hero.scss'
import HeroImage from '../../assets/illustration-working.svg'
import Button from '../UI/Button/Button'


const Hero = (props) => {

    return(
        <div className="Heading__outer">
            <div className="Heading">
                <div className="Hero">
                    <img src={HeroImage} alt="Working Illustration" className="Hero__image"/>
                </div>
                <div className="Heading__text">
                    <h1 className="Heading__title heading--primary">More than just shorter links</h1>
                    <p className="Heading__paragraph">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <Button size="m" rounded>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero