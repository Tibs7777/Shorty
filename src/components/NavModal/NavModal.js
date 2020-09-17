import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../UI/Backdrop/Backdrop'

const NavModal = props => {



    return(
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <NavigationItems show={props.show} mobile/>
        </React.Fragment>
    )
}

export default NavModal