import React from 'react'
import Button from '../UI/Button/Button'
import './LinkShortener.scss'


const LinkShortener = props => {


    let inputClasses = "LinkShortener__input"
    let errorMessage = null
    if(props.error) {
        inputClasses += ' LinkShortener__input--error'
        errorMessage = <span className="LinkShortener__error">{props.error}</span>
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!props.link) {
            props.setError('Please add a link')
        } else {
            props.setError(null)
            props.shortenLink(props.link)
        }
    }
    const changeHandler = (e) => {
        props.setLink(e.target.value)
        if(props.error) {
            props.setError(null)
        }
    }

    return(
        <div className="LinkShortener__outer">
            <form className="LinkShortener" onSubmit={(event) => submitHandler(event)}>
                <input className={inputClasses} placeholder="Shorten a link here..." type="text" onChange={(e) => changeHandler(e)} value={props.link}/>
                {errorMessage}
                <Button size="input" loader={props.loading}>Shorten it!</Button>
            </form>
        </div>
    )
}

export default LinkShortener