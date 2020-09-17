import React from 'react';
import './Button.scss'
import Loader from '../Loader/Loader'

const Button = props => {



    let classes = "Button"
    if (props.size) {
        classes += ` Button--${props.size}`
    }
    if (props.rounded) {
        classes += ` Button--rounded`
    }
    if (props.copied && !classes.includes("Button--copied")) {
        classes += ' Button--copied'
    }
    if (props.loader) {
        classes += ' Button--loader'
    }

    let button = <button className={classes} onClick={props.clickHandler}>{props.children}</button>
    if(props.loader) {
        button = <React.Fragment>
                    <div className={classes} onClick={props.clickHandler}>{props.children}
                    <Loader button/>
                    </div>
                 </React.Fragment>
    }

    return button
}

export default Button