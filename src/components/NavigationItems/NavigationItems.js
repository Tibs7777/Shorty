import React from 'react'
import './NavigationItems.scss'
import Button from '../UI/Button/Button'


const NavigationItems = props => {

    let classes = "NavigationItems"
    if(props.show) {
        classes = classes + ' NavigationItems--open'
    }
    if(props.desktop) {
        classes = classes + ' NavigationItems--desktop'
    }
    if(props.mobile) {
        classes = classes + ' NavigationItems--mobile'
    }

    return(
        <div className={classes}>
            <ul className="NavigationItems__nav">
                <li className="NavigationItems__item">Features</li>
                <li className="NavigationItems__item">Pricing</li>
                <li className="NavigationItems__item">Resources</li>
            </ul>
            <ul className="NavigationItems__auth">
                <li className="NavigationItems__item">Login</li>
                {props.desktop ? <Button size="s" rounded>SignUp</Button> : <Button size="l" rounded>SignUp</Button>}
            </ul>
        </div>
    )
}

export default NavigationItems