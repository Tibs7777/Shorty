import React from 'react'
import './Loader.scss'





const Loader = props => {

    let classes = "loader"
    if(props.button) {
        classes += ' loader--button'
    }

    return <div className={classes}></div>
}

export default Loader