import React from 'react'
import './StatisticsCard.scss'


const StatisticsCard = props => {


    return (
        <div className="StatisticsCard">
            <div className="StatisticsCard__image-container">
                <img src={props.img} alt="Icon" className="StatisticsCard__image"/>
            </div>
            <h4 className="StatisticsCard__title heading--tertiary">{props.title}</h4>
            <p className="StatisticsCard__paragraph">{props.children}</p>
        </div>
    )
}

export default StatisticsCard

