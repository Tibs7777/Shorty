import React from 'react'
import './Statistics.scss'
import StatisticsCard from './StatisticsCard/StatisticsCard'
import BrandRec from '../../assets/icon-brand-recognition.svg'
import DetailedRecords from '../../assets/icon-detailed-records.svg'
import FullyCustom from '../../assets/icon-fully-customizable.svg'


const Statistics = props => {


    return (
        <div className="Statistics">
            <div className="Statistics__heading">
                <h2 className="Statistics__title heading--secondary">Advanced Statistics</h2>
                <p className="Statistics__paragraph">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="Statistics__cards">
                <StatisticsCard img={BrandRec} title="Brand Recognition">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</StatisticsCard>
                <StatisticsCard img={DetailedRecords} title="Detailed Records">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</StatisticsCard>
                <StatisticsCard img={FullyCustom} title="Fully Custom">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</StatisticsCard>
            </div>

        </div>
    )
}

export default Statistics

