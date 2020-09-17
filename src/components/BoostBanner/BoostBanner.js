import React from 'react'
import './BoostBanner.scss'
import '../UI/Button/Button'
import Button from '../UI/Button/Button'


const BoostBanner = props => {
    return(
        <div className="BoostBanner">
            <h2 className="BoostBanner__title heading--secondary">Boost your links today</h2>
            <Button size="m" rounded>Get Started</Button>
        </div>
    )
}

export default BoostBanner