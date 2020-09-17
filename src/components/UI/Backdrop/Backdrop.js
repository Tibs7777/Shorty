import React from 'react'
import './Backdrop.scss'

const Backdrop = props => {

    let classes = "Backdrop"

    if(props.show) {
        classes += ' Backdrop--show'
    }

    return(
        <div className={classes} onClick={props.clicked}>

        </div>
    )
}

export default Backdrop